
import React, { createContext, useState, useContext, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Create context
const AuthContext = createContext(null);

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check if user is authenticated when the app loads
  useEffect(() => {
    // First set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setIsAuthenticated(true);
          fetchUserProfile(session.user.id);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    // Then check for existing session
    const initializeUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setIsAuthenticated(true);
          await fetchUserProfile(session.user.id);
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeUser();
    
    return () => {
      subscription?.unsubscribe();
    };
  }, []);
  
  // Fetch user profile from Supabase
  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          id, name, email, age, dob, blood_group, height, weight,
          test_results(id, date, predicted_disease, image_url,
            question_answers(question, answer)
          )
        `)
        .eq('id', userId)
        .single();
        
      if (error) throw error;
      
      // Transform from database structure to app structure
      const formattedUser = {
        id: data.id,
        name: data.name,
        email: data.email,
        age: data.age,
        dob: data.dob,
        bloodGroup: data.blood_group,
        height: data.height,
        weight: data.weight,
        testResults: data.test_results?.map(result => ({
          id: result.id,
          date: result.date,
          predictedDisease: result.predicted_disease,
          imageUrl: result.image_url,
          questions: result.question_answers?.map(qa => ({
            question: qa.question,
            answer: qa.answer
          })) || []
        })) || []
      };
      
      setUser(formattedUser);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      // If we can't fetch the profile, log the user out
      if (error.message.includes("Row level security")) {
        toast({
          title: "Authentication error",
          description: "Please sign in again.",
          variant: "destructive",
        });
        logout();
      }
    }
  };

  // Login function
  const login = async (email, password) => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error.message || "Please check your credentials and try again",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name, email, password) => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name
          }
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Registration successful!",
        description: "Please check your email to verify your account."
      });
      
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: error.message || "Please check your information and try again",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Update profile function
  const updateProfile = async (userData) => {
    if (!user) return;
    
    const { age, bloodGroup, dob, height, weight, name } = userData;
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name,
          age,
          dob,
          blood_group: bloodGroup,
          height,
          weight
        })
        .eq('id', user.id);
      
      if (error) throw error;
      
      // Update local user state
      setUser({
        ...user,
        ...userData
      });
      
      return true;
    } catch (error) {
      console.error("Update profile error:", error);
      toast({
        title: "Update failed",
        description: error.message || "Failed to update your profile.",
        variant: "destructive"
      });
      throw error;
    }
  };

  // Add test result function
  const addTestResult = async (testResult) => {
    if (!user) return;
    
    try {
      // Insert test result
      const { data: testResultData, error: testResultError } = await supabase
        .from('test_results')
        .insert({
          user_id: user.id,
          date: testResult.date,
          predicted_disease: testResult.predictedDisease,
          image_url: testResult.imageUrl
        })
        .select('id')
        .single();
        
      if (testResultError) throw testResultError;
      
      // Insert questions and answers
      if (testResult.questions && testResult.questions.length > 0) {
        const questionAnswersToInsert = testResult.questions.map(qa => ({
          test_result_id: testResultData.id,
          question: qa.question,
          answer: qa.answer
        }));
        
        const { error: qaError } = await supabase
          .from('question_answers')
          .insert(questionAnswersToInsert);
          
        if (qaError) throw qaError;
      }
      
      // Refresh user profile to get the new test result
      await fetchUserProfile(user.id);
      
      return true;
    } catch (error) {
      console.error("Add test result error:", error);
      toast({
        title: "Error saving test result",
        description: error.message || "Failed to save your test result.",
        variant: "destructive"
      });
      throw error;
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    addTestResult
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
