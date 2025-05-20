
import { FileUp, Rotate3D, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileUp,
      title: "Upload Photo",
      description: "Take or upload a clear photo of the affected skin area using your smartphone.",
      color: "bg-blue-100"
    },
    {
      icon: Rotate3D,
      title: "Submit for Analysis",
      description: "Our AI system processes the image and analyzes it for potential skin conditions.",
      color: "bg-purple-100"
    },
    {
      icon: CheckCircle,
      title: "Get Results",
      description: "Receive your analysis results within minutes with potential matches and recommendations.",
      color: "bg-green-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to Use SkinWise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 rounded-lg hover-scale"
              style={{opacity: 0}}
              data-animation={`fade-in-delay-${index + 1}`}
            >
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                <step.icon size={32} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-center text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
