
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="font-bold text-xl flex items-center mb-4">
              <span className="text-coin-navy">Coin</span>
              <span className="text-coin-gold">App</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              The ultimate mobile companion for coin collectors. Identify, grade, and manage your collection with precision and ease.
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} CoinApp. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-coin-navy transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-coin-navy transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-coin-navy transition-colors">How It Works</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-coin-navy transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-coin-navy transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-coin-navy transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-coin-navy transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
