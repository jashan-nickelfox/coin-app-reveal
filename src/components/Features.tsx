
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Star, Coins, Database, BookOpen, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <Card className="feature-card overflow-hidden group hover:-translate-y-1 transition-all duration-300 border-none shadow-md hover:shadow-xl">
      <CardContent className="p-0">
        <div className="relative p-6 z-10">
          <div className="coin-icon mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-yellow-100">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-coin-gold transition-colors duration-300">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        {/* Background gradient decorative element */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl",
          index % 3 === 0 ? "bg-coin-gold" : 
          index % 3 === 1 ? "bg-coin-navy" : 
          "bg-coin-dark"
        )}></div>
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
      description: "Get professional-level condition assessment with our automated Sheldon grading scale technology."
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
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Currency Support",
      description: "Track coins from around the globe with extensive international currency database."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-t from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coin-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-coin-navy/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Powerful Features for Collectors</h2>
          <p className="text-gray-600 text-lg">
            Discover the comprehensive toolset that makes CoinApp the preferred choice for numismatists worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
