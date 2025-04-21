
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Star, Coins, Database, BookOpen } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="feature-card">
      <CardContent className="pt-6">
        <div className="coin-icon mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Coin Identification",
      description: "Snap a photo and instantly identify any coin with our powerful AI recognition system."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Coin Grading",
      description: "Get professional-level condition assessment with our automated grading technology."
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Mint Error Detection",
      description: "Discover valuable minting errors that could make your coins worth significantly more."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Collection Management",
      description: "Organize, track, and manage your entire coin collection in one secure place."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Educational Content",
      description: "Access exclusive articles and resources in our 'Coin Lounge' to enhance your knowledge."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Collectors</h2>
          <p className="text-gray-600 text-lg">
            Discover the comprehensive toolset that makes CoinApp the preferred choice for numismatists worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div key={index + 3} className="animate-fade-in" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
