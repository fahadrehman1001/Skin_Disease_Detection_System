
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Droplet, Shield } from "lucide-react";

const SkinCareTipsBanner = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <div className="mb-6 flex items-center gap-3">
              <Droplet className="text-blue-500" size={28} />
              <Shield className="text-indigo-500" size={28} />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Expert Skin Care Tips & Recommendations
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Discover personalized skin care routines, expert tips, and precautions 
              to maintain healthy skin based on your skin type and concerns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => navigate("/skin-care")}
                className="bg-skinwise-accent hover:bg-opacity-90 text-white"
              >
                Explore Skin Care Routines
              </Button>
              <Button
                onClick={() => navigate("/precautions")}
                variant="outline"
                className="border-skinwise-accent text-skinwise-accent hover:bg-skinwise-accent hover:text-white"
              >
                View Precautions
              </Button>
            </div>
          </div>
          <div className="lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Skin care products and routine"
              className="rounded-lg shadow-lg w-full object-cover h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinCareTipsBanner;
