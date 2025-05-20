
import React from "react";
import { Upload, FileImage, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const HowToUse = () => {
  const steps = [
    {
      icon: <Upload size={40} />,
      title: "Upload Photo",
      description: "Take or upload a clear, well-lit photo of the affected skin area.",
      bgColor: "bg-blue-100",
      delay: 0.1
    },
    {
      icon: <FileImage size={40} />,
      title: "Submit for Analysis",
      description: "Our AI will process and analyze your image for potential skin conditions.",
      bgColor: "bg-purple-100",
      delay: 0.2
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Get Your Results",
      description: "Receive detailed analysis and potential condition matches within seconds.",
      bgColor: "bg-green-100",
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">How to Use SkinWise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get instant AI-powered skin analysis in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: step.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center hover-scale"
            >
              <div className={`${step.bgColor} p-4 rounded-full mb-6`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-center text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
