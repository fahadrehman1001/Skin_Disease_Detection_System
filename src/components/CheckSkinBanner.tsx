
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import AlertDialog from "./AlertDialog";

const CheckSkinBanner = () => {
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
    <section className="py-12 bg-gradient-to-r from-skinwise-blue-light to-skinwise-green-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to check your skin?</h2>
          <p className="text-gray-700 max-w-2xl mb-8">
            Take the first step towards better skin health. Upload a photo and get an instant analysis.
          </p>
          <Button
            size="lg"
            className="bg-skinwise-accent hover:bg-opacity-90 text-white px-6 py-6 h-auto text-lg"
            onClick={handleCheckSkin}
          >
            Check Your Skin Now
          </Button>
        </div>
        <AlertDialog open={isAlertOpen} onClose={handleAlertClose} />
      </div>
    </section>
  );
};

export default CheckSkinBanner;
