
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-bold text-xl flex items-center">
              <span className="text-coin-navy">Coin</span>
              <span className="text-coin-gold">App</span>
              <span className="ml-1 h-2 w-2 rounded-full bg-coin-gold animate-pulse"></span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-coin-navy transition-colors">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-coin-navy transition-colors">Benefits</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-coin-navy transition-colors">How It Works</a>
            <a href="#contact" className="text-gray-600 hover:text-coin-navy transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
