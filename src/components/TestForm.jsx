
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: "q1",
    text: "How long have you noticed the skin condition?",
    options: ["Less than a week", "1-4 weeks", "1-3 months", "More than 3 months"]
  },
  {
    id: "q2",
    text: "Is the affected area itchy?",
    options: ["Not at all", "Slightly", "Moderately", "Very itchy"]
  },
  {
    id: "q3",
    text: "Does the affected area hurt or burn?",
    options: ["Not at all", "Slightly", "Moderately", "Very painful"]
  },
  {
    id: "q4",
    text: "Have you applied any treatments to the area?",
    options: ["No", "Over-the-counter creams", "Prescription medication", "Home remedies"]
  },
  {
    id: "q5",
    text: "Are there any other symptoms you've noticed?",
    options: ["None", "Fever", "Fatigue", "Swelling", "Other"]
  },
  {
    id: "q6",
    text: "Have you been exposed to any new products or environments recently?",
    options: ["No", "New skincare products", "New detergent/soap", "Outdoor activities", "Other"]
  }
];

const possibleDiseases = [
  "Eczema",
  "Psoriasis",
  "Contact Dermatitis",
  "Acne",
  "Rosacea",
  "Fungal Infection",
  "Hives",
  "Shingles"
];

const TestForm = () => {
  const [answers, setAnswers] = useState({});
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addTestResult, isAuthenticated } = useAuth();

  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage({
        preview: e.target?.result,
        file
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isAuthenticated) {
      toast({
        title: "You must be logged in",
        description: "Please sign in or register to submit your test",
        variant: "destructive"
      });
      navigate("/login");
      return;
    }
  
    if (!uploadedImage || !uploadedImage.file) {
      toast({
        title: "Image required",
        description: "Please upload an image of your skin condition",
        variant: "destructive"
      });
      return;
    }
  
    if (Object.keys(answers).length < 4) {
      toast({
        title: "More information needed",
        description: "Please answer at least 4 questions for better analysis",
        variant: "destructive"
      });
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      // 1. Send image to FastAPI backend
      const formData = new FormData();
      formData.append("file", uploadedImage.file);
  
      const response = await fetch("http://localhost:8001/predict", {
        method: "POST",
        body: formData
      });
  
      if (!response.ok) {
        throw new Error("Failed to get prediction from server");
      }
  
      const data = await response.json();
      const { prediction, confidence, index } = data;
  
      // 2. Convert answers into Q&A array
      const questionAnswers = Object.entries(answers).map(([questionId, answer]) => {
        const question = questions.find(q => q.id === questionId)?.text || "";
        return { question, answer };
      });
  
      // 3. Save result to Supabase
      const testResult = {
        date: new Date().toISOString(),
        questions: questionAnswers,
        predictedDisease: prediction,
        predictionConfidence: confidence,
        imageUrl: uploadedImage.preview // still display base64 for profile preview
      };
  
      await addTestResult(testResult);
  
      toast({
        title: "Analysis Complete",
        description: `Prediction: ${prediction} (${Math.round(confidence * 100)}% confidence)`,
      });
  
      navigate("/profile");
  
    } catch (error) {
      console.error("Error submitting test:", error);
      toast({
        title: "Submission failed",
        description: "There was an error processing your test. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Upload Image</h3>
          <div className="flex flex-col items-center">
            {uploadedImage ? (
              <div className="relative w-full max-w-md">
                <img 
                  src={uploadedImage?.preview} 
                  alt="Uploaded skin" 
                  className="rounded-lg max-h-64 mx-auto object-contain"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setUploadedImage(null)}
                >
                  Remove Image
                </Button>
              </div>
            ) : (
              <div className="w-full max-w-md">
                <label 
                  htmlFor="image-upload" 
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg 
                      className="w-8 h-8 mb-4 text-gray-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 10MB)</p>
                  </div>
                  <input 
                    id="image-upload" 
                    type="file" 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Questions Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
          <p className="text-gray-600 mb-6">
            Help us provide a more accurate analysis by answering these questions:
          </p>
          
          <div className="space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="space-y-3">
                <label className="block font-medium text-gray-700">
                  {question.text}
                </label>
                <div className="flex flex-wrap gap-3">
                  {question.options.map((option) => (
                    <Button
                      key={option}
                      type="button"
                      variant={answers[question.id] === option ? "default" : "outline"}
                      onClick={() => handleAnswer(question.id, option)}
                      className="rounded-full"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button 
            type="submit" 
            className="bg-skinwise-accent hover:bg-opacity-90 text-white px-12 py-6 h-auto text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Analyzing..." : "Submit for Analysis"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TestForm;
