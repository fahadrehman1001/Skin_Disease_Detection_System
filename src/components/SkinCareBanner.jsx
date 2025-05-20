
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SkinCareBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-skinwise-blue-light to-skinwise-green-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Expert Skin Care Tips & Recommendations
            </h2>
            <p className="text-gray-700 mb-6">
              Discover personalized skin care routines, product recommendations, and 
              professional advice to maintain healthy skin and prevent common skin problems.
            </p>
            <Button 
              onClick={() => navigate("/skin-care")}
              className="bg-skinwise-accent hover:bg-opacity-80 text-white px-8"
              size="lg"
            >
              View Skin Care Tips
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556228841-a3a2155ca4a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Skin Care Products" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinCareBanner;
