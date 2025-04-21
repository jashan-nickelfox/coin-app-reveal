
import React from 'react';
import { Camera, Star, Database } from 'lucide-react';

const StepItem = ({ 
  number, 
  icon, 
  title, 
  description 
}: { 
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-coin-navy text-white flex items-center justify-center text-xl font-bold mb-4">
          {number}
        </div>
        {/* Connector line */}
        {number < 3 && (
          <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-coin-navy to-transparent"></div>
        )}
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 w-full">
        <div className="text-coin-gold mb-3">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Take a Photo",
      description: "Snap a clear photo of both sides of your coin using the CoinApp camera."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Get Results",
      description: "Receive instant identification, grading, and valuation details."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Manage Collection",
      description: "Add to your digital collection with all details automatically saved."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">
            Three simple steps to transform your coin collecting experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative">
          {steps.map((step, index) => (
            <StepItem 
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-coin-gold/10 px-6 py-4 rounded-lg">
            <p className="text-coin-navy font-medium">
              "CoinApp has revolutionized my collecting process. What used to take hours now takes seconds."
            </p>
            <p className="mt-2 text-sm text-gray-600">— James W., Professional Collector</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
