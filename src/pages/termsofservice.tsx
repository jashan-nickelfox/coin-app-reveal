// pages/terms-of-service.tsx

import React from 'react';

const TermsOfService = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Terms of Service
        </h1>

        <p className="mb-4">
          Welcome to CoinScanAI. By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using CoinScanAI, you agree to comply with and be legally bound by the terms and conditions of these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Modifications to Terms</h2>
        <p className="mb-4">
          CoinScanAI reserves the right to modify these Terms at any time. We will notify users of any changes by updating the date at the top of the Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for your conduct and any data, text, information, or other materials that you submit.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Account Registration</h2>
        <p className="mb-4">
          To access certain features, you may be required to register for an account. You agree to provide accurate and complete information and to keep this information up to date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
        <p className="mb-4">
          All content and materials on CoinScanAI, including but not limited to text, graphics, logos, and software, are the property of CoinScanAI or its licensors and are protected by intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your access to CoinScanAI at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of CoinScanAI, us, or third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimer of Warranties</h2>
        <p className="mb-4">
          CoinScanAI is provided on an \"as is\" and \"as available\" basis. We disclaim all warranties of any kind, whether express or implied.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall CoinScanAI be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which CoinScanAI operates, without regard to its conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at{' '}
          <a
            href="mailto:stephen@coinscanai.com"
            className="text-coin-navy dark:text-coin-gold hover:underline"
          >
            stephen@coinscanai.com
          </a>.
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
