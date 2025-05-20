
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import HowItWorks from "@/components/HowItWorks";
import WhyUseAI from "@/components/WhyUseAI";
import CheckSkinBanner from "@/components/CheckSkinBanner";
import AlertDialog from "@/components/AlertDialog";
import { useAuth } from "@/context/AuthContext";

const HomePage = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleCheckSkin = () => {
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    if (isAuthenticated) {
      navigate("/test");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Say No To <span className="text-skinwise-accent">Skin Diseases!</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in-delay-1">
                Check your skin on the smartphone and get instant results within 1 minute.
              </p>
              <Button 
                size="lg" 
                onClick={handleCheckSkin}
                className="bg-skinwise-accent hover:bg-opacity-90 text-white px-8 py-6 h-auto text-lg animate-fade-in-delay-2"
              >
                Check Your Skin
              </Button>
              <AlertDialog open={isAlertOpen} onClose={handleAlertClose} />
            </div>
            <div className="lg:w-1/2 animate-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Dermatologist examining patient's skin"
                className="rounded-lg shadow-xl max-h-[500px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Why Use AI Section */}
      <WhyUseAI />
      
      {/* Check Skin Banner */}
      <CheckSkinBanner />
      
    </div>
  );
};

export default HomePage;
