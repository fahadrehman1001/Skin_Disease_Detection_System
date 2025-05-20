
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import ResultCard from "@/components/ResultCard";

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();
  
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    age: user?.age || "",
    dob: user?.dob || "",
    bloodGroup: user?.bloodGroup || "",
    height: user?.height || "",
    weight: user?.weight || ""
  });
  
  if (!user) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please Login</h1>
          <p className="text-gray-600 mb-6">
            You need to be logged in to view your profile.
          </p>
          <Button asChild>
            <a href="/login">Sign In</a>
          </Button>
        </div>
      </div>
    );
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    updateProfile(profileData);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved."
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="bg-skinwise-blue-light bg-opacity-30">
                <CardTitle className="text-xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={profileData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <Input
                        name="age"
                        type="number"
                        value={profileData.age}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <Input
                        name="dob"
                        type="date"
                        value={profileData.dob}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Blood Group
                      </label>
                      <Input
                        name="bloodGroup"
                        value={profileData.bloodGroup}
                        onChange={handleChange}
                        placeholder="e.g. O+, A-, B+"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Height
                      </label>
                      <Input
                        name="height"
                        value={profileData.height}
                        onChange={handleChange}
                        placeholder="e.g. 5'10&quot;, 178 cm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Weight
                      </label>
                      <Input
                        name="weight"
                        value={profileData.weight}
                        onChange={handleChange}
                        placeholder="e.g. 160 lbs, 72 kg"
                      />
                    </div>
                    <div className="pt-2 flex space-x-4">
                      <Button onClick={handleSave}>Save Changes</Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    {user.age && (
                      <div>
                        <p className="text-sm text-gray-500">Age</p>
                        <p className="font-medium">{user.age}</p>
                      </div>
                    )}
                    {user.dob && (
                      <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="font-medium">{user.dob}</p>
                      </div>
                    )}
                    {user.bloodGroup && (
                      <div>
                        <p className="text-sm text-gray-500">Blood Group</p>
                        <p className="font-medium">{user.bloodGroup}</p>
                      </div>
                    )}
                    {user.height && (
                      <div>
                        <p className="text-sm text-gray-500">Height</p>
                        <p className="font-medium">{user.height}</p>
                      </div>
                    )}
                    {user.weight && (
                      <div>
                        <p className="text-sm text-gray-500">Weight</p>
                        <p className="font-medium">{user.weight}</p>
                      </div>
                    )}
                    <Button 
                      className="mt-4" 
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Test Results */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="bg-skinwise-blue-light bg-opacity-30">
                <CardTitle className="text-xl">My Test Results</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {user.testResults && user.testResults.length > 0 ? (
                  <Tabs defaultValue="latest">
                    <TabsList className="mb-6">
                      <TabsTrigger value="latest">Latest Results</TabsTrigger>
                      <TabsTrigger value="all">All Results</TabsTrigger>
                    </TabsList>
                    <TabsContent value="latest">
                      <ResultCard result={user.testResults[user.testResults.length - 1]} />
                    </TabsContent>
                    <TabsContent value="all">
                      <div className="space-y-6">
                        {[...user.testResults].reverse().map((result, idx) => (
                          <ResultCard key={idx} result={result} />
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">
                      You haven't taken any skin tests yet.
                    </p>
                    <Button asChild>
                      <a href="/test">Take Your First Test</a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
