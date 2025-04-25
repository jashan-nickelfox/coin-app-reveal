import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-bold text-xl flex items-center">
              <img src="/logo-1.png" alt="CoinApp Logo" className="h-10 w-auto transition-transform hover:scale-105" />
              <span className="text-coin-goldbrown dark:text-white ml-2">Coin ScanAi</span>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-white transition-colors"
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-white transition-colors"
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
