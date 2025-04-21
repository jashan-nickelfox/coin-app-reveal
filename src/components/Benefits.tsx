
import React from 'react';
import { Check } from 'lucide-react';

const BenefitItem = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex mb-6">
      <div className="mr-4 mt-1">
        <div className="bg-coin-gold/20 p-1 rounded-full">
          <Check className="h-5 w-5 text-coin-gold" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Unmatched Accuracy",
      description: "Our advanced image recognition delivers 99.8% identification accuracy, even for rare and ancient coins."
    },
    {
      title: "Save Valuable Time",
      description: "Identify and grade coins in seconds instead of spending hours consulting reference books or visiting experts."
    },
    {
      title: "Increase Collection Value",
      description: "Discover hidden gems in your collection with our error detection and precise grading system."
    },
    {
      title: "Secure & Private",
      description: "Your collection data is encrypted and securely stored, accessible only to you on your devices."
    },
    {
      title: "Continuous Learning",
      description: "Expand your numismatic knowledge with our educational resources and community insights."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Collectors Choose CoinApp</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join thousands of collectors who have transformed their hobby with our professional-grade tools.
            </p>
            
            <div>
              {benefits.map((benefit, index) => (
                <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BenefitItem {...benefit} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-lg">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src="https://placehold.co/800x500/d4af37/FFF?text=Coin+Collection" 
                  alt="Organized coin collection" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-coin-gold mr-2"></div>
                  <p className="text-sm font-medium">Collection Value</p>
                </div>
                <div className="text-2xl font-bold text-coin-navy">$24,867.50</div>
                <div className="mt-2 text-sm text-green-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>+12.3% this month</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-coin-gold to-yellow-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-coin-navy to-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
