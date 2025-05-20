
import { Shield, Clock, ChartBar, HeartPulse } from "lucide-react";

const WhyUseAI = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Quick Results",
      description: "Get preliminary analysis in under a minute, saving time compared to waiting for appointments."
    },
    {
      icon: Shield,
      title: "Early Detection",
      description: "Identify potential issues early, when they're typically easier and less expensive to treat."
    },
    {
      icon: HeartPulse,
      title: "Reduced Anxiety",
      description: "Gain peace of mind with immediate feedback about common skin conditions."
    },
    {
      icon: ChartBar,
      title: "Track Progress",
      description: "Monitor changes in your skin condition over time with stored historical results."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Use AI-based Skin Disease Detection?
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          SkinWise combines advanced AI technology with practical healthcare benefits to help you make informed decisions about your skin health.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 text-skinwise-accent">
                <benefit.icon size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUseAI;
