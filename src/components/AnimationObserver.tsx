
import React, { useEffect } from "react";

const AnimationObserver = () => {
  // Function to check if element is in viewport
  const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  // Function to handle animation on scroll
  const handleAnimation = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(el => {
      if (isElementInViewport(el)) {
        // Using className instead of style for better compatibility
        el.classList.add('animated');
        el.classList.add('fadeIn');
      }
    });
  };

  useEffect(() => {
    // Initial check for elements in viewport
    handleAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleAnimation);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleAnimation);
    };
  }, []);

  return null;
};

export default AnimationObserver;
