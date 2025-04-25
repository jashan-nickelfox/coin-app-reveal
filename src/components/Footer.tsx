import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
          <div className="font-bold text-xl flex items-center mb-3">
              <img src="/logo-1.png" alt="CoinApp Logo" className="h-8 w-auto transition-transform hover:scale-105" />
              <span className="text-coin-goldbrown dark:text-white ml-2">Coin Scan AI</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              The ultimate mobile companion for coin collectors. Identify,
              grade, and manage your collection with precision and ease.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} CoinApp. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-coin-gold transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-coin-gold transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-coin-gold transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-coin-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacypolicy"
                  className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-coin-gold transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/termsofservice"
                  className="text-gray-600 dark:text-gray-300 hover:text-coin-navy dark:hover:text-coin-gold transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
