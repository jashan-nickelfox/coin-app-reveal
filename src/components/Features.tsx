import React from 'react';
import { Camera, Star, Coins, Database, BookOpen, Globe, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Camera className="h-8 w-8 text-coin-navy dark:text-coin-gold" />,
    title: "AI Coin Identification",
    description: "Easily snap a photo and let AI instantly identify your coin easily."
  },
  {
    icon: <Star className="h-8 w-8 text-coin-navy dark:text-coin-gold" />,
    title: "Grading & Value Estimation",
    description: "Professional grading insights and market value predictions."
  },
  {
    icon: <Coins className="h-8 w-8 text-coin-navy dark:text-coin-gold" />,
    title: "Mint Error Detection",
    description: "Spot rare minting errors that increase coin value."
  },
  {
    icon: <Database className="h-8 w-8 text-coin-navy dark:text-coin-gold" />,
    title: "Collection Management",
    description: "Organize and track your entire collection securely."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-coin-navy dark:text-coin-gold" />,
    title: "Educational Hub",
    description: "Access in-depth guides, articles, and numismatic resources."
  },
  {
    icon: <Globe className="h-8 w-8 text-coin-navy dark:text-coin-gold" />,
    title: "Global Currency Support",
    description: "Track coins and currencies from around the world and monitor real-time market trend"
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes lineGrow {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        .pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        .line-animate {
          animation: lineGrow 1s ease forwards;
        }
      `}</style>

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-coin-gold/10 rounded-full blur-3xl pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-coin-navy/10 rounded-full blur-3xl pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-12 fade-in-up" style={{ animationDelay: '0s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-coin-navy to-coin-gold bg-clip-text text-transparent">
            Why Choose CoinApp?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore the top features that make CoinApp the essential tool for collectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="fade-in-up space-y-4"
              style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110 hover:rotate-3 shadow-lg rounded-full p-4 bg-coin-gold/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
              <div className="h-0.5 bg-gradient-to-r from-coin-navy to-coin-gold rounded-full line-animate"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
