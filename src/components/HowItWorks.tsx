
import React from 'react';
import { Camera, Star, Database, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const StepItem = ({ 
  number, 
  icon, 
  title, 
  description,
  imageSrc
}: { 
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="relative mb-6">
        <div className="h-16 w-16 rounded-full bg-coin-navy text-white flex items-center justify-center text-xl font-bold relative z-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        {/* Connector line */}
        {number < 3 && (
          <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-coin-navy to-transparent"></div>
        )}
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 w-full relative z-10 hover:shadow-xl transition-shadow duration-300 group">
        {/* Phone mockup with screenshot */}
        <div className="mb-6 relative mx-auto w-[160px] h-[320px] rounded-[1.5rem] border-[8px] border-gray-900 bg-gray-800 shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <img 
            src={imageSrc}
            alt={`Step ${number}: ${title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="text-coin-gold mb-3 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-coin-gold transition-colors duration-300">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        {/* Arrow indicator */}
        {number < 3 && (
          <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-30 text-coin-gold/70">
            <ArrowRight className="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Take a Photo",
      description: "Snap a clear photo of both sides of your coin using the CoinApp camera.",
      imageSrc: "src/assests/identification.svg"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Get Results",
      description: "Receive instant identification, grading, and valuation details.",
      imageSrc: "src/assests/ss1.svg"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Manage Collection",
      description: "Add to your digital collection with all details automatically saved.",
      imageSrc: "src/assests/collection.svg" 
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-coin-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-coin-navy/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How It Works</h2>
          <p className="text-gray-600 text-lg">
            Three simple steps to transform your coin collecting experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 relative">
          {steps.map((step, index) => (
            <div key={index} className={cn(
              "group animate-fade-in",
              index === 0 ? "animate-fade-in" : 
              index === 1 ? "animate-fade-in" : 
              "animate-fade-in"
            )} style={{ animationDelay: `${index * 0.3}s` }}>
              <StepItem 
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                imageSrc={step.imageSrc}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-coin-gold/10 to-coin-navy/10 px-8 py-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <p className="text-coin-navy font-medium text-lg">
              "CoinApp has revolutionized my collecting process. What used to take hours now takes seconds."
            </p>
            <p className="mt-2 text-gray-600">— James W., Professional Collector</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
