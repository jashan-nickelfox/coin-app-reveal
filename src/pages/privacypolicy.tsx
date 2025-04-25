// pages/privacy-policy.tsx

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy describes how CoinScanAI ("we", "us", or "our") collects, uses, and discloses your information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information that you provide directly, such as your name, email address, and payment details. We also collect data automatically, such as device information, IP addresses, and browsing behavior.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to provide and improve our services, process transactions, communicate with you, and ensure security and compliance with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
        <p className="mb-4">
          We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or with your consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information. You can also opt out of receiving marketing communications at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We encourage you to review it regularly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:stephen@coinscanai.com" className="text-coin-navy dark:text-coin-gold hover:underline">stephen@coinscanai.com</a>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
