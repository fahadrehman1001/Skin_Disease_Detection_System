
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestForm from "@/components/TestForm";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const TestPage = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to access the skin analysis test.",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate, toast]);

  // If still loading auth state, show minimal loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Only render the test page content if authenticated
  if (!isAuthenticated) {
    return null; // Return nothing while redirecting
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Skin Analysis Test</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload a photo of your skin condition and answer a few questions 
            to receive an instant AI-powered analysis.
          </p>
        </div>
        
        <TestForm />
        
        <div className="mt-16 bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-3">Important Note:</h3>
          <p className="text-gray-700">
            The analysis provided by SkinWise is not a substitute for professional medical advice, 
            diagnosis, or treatment. Always consult with a qualified healthcare provider for proper evaluation of your skin condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
