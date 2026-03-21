import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Privacy() {
  const lastUpdated = "21 March 2026";

  return (
    <div className="min-h-screen bg-white dark:bg-dark-page text-gray-900 dark:text-gray-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand via-accent to-gold text-white py-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
            <p className="text-lg font-light opacity-90">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Who We Are</h2>
              <p>
                VLC Construction (Pty) Ltd ("VLC Construction", "we", "us", or "our") is a construction and steel
                fabrication company registered in South Africa, with its principal place of business at 192A Kock
                Street, Rustenburg, North West, 0299. We are the responsible party for personal information
                collected through this website, as defined under the Protection of Personal Information Act 4 of
                2013 ("POPIA").
              </p>
              <p className="mt-3">
                For privacy-related queries, contact us at:{" "}
                <a href="mailto:info@vlcconstruction.co.za" className="text-brand dark:text-gold underline">
                  info@vlcconstruction.co.za
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2. Information We Collect</h2>
              <p>We collect personal information only when you voluntarily provide it to us. This includes:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Your first and last name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>The content of messages you send through our contact form</li>
              </ul>
              <p className="mt-3">
                We do not collect sensitive personal information, financial information, or any information
                automatically through cookies or tracking technologies on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Why We Collect Your Information</h2>
              <p>We process your personal information for the following purposes:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>To respond to your project enquiry or request for a quotation</li>
                <li>To communicate with you about our services</li>
                <li>To fulfil any contractual obligations where applicable</li>
              </ul>
              <p className="mt-3">
                We will not use your information for direct marketing without your explicit consent, and we will
                not sell, rent, or share your personal information with third parties for their own marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Legal Basis for Processing</h2>
              <p>
                Under POPIA, we process your personal information on the following grounds:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li><strong>Consent</strong> — when you submit our contact form, you consent to us processing your information to respond to your enquiry.</li>
                <li><strong>Legitimate interest</strong> — to manage and respond to business enquiries received through our website.</li>
                <li><strong>Contractual necessity</strong> — where information is required to fulfil a service agreement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">5. How We Store and Protect Your Information</h2>
              <p>
                Contact form submissions are processed through Formspree, a secure third-party form handling
                service. Your information is transmitted over HTTPS and stored securely. We retain contact
                enquiry data for a maximum of 12 months, after which it is deleted unless a business
                relationship has been established.
              </p>
              <p className="mt-3">
                We take reasonable technical and organisational measures to protect your personal information
                against unauthorised access, loss, or misuse.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">6. Sharing Your Information</h2>
              <p>We do not sell or trade your personal information. We may share it only with:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li><strong>Formspree</strong> — our form processing service provider, who processes data on our behalf and is bound by their own privacy policy.</li>
                <li><strong>Legal authorities</strong> — where required by South African law or a court order.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">7. Your Rights Under POPIA</h2>
              <p>As a data subject under POPIA, you have the right to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Be notified that your personal information is being collected (this policy fulfils that obligation)</li>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information, subject to legal retention requirements</li>
                <li>Object to the processing of your personal information</li>
                <li>Lodge a complaint with the Information Regulator of South Africa</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@vlcconstruction.co.za" className="text-brand dark:text-gold underline">
                  info@vlcconstruction.co.za
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">8. Information Regulator</h2>
              <p>
                If you believe we have not handled your personal information in accordance with POPIA, you may
                lodge a complaint with the Information Regulator of South Africa:
              </p>
              <address className="not-italic mt-3 space-y-1">
                <p><strong>Information Regulator (South Africa)</strong></p>
                <p>JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</p>
                <p>
                  Email:{" "}
                  <a href="mailto:inforeg@justice.gov.za" className="text-brand dark:text-gold underline">
                    inforeg@justice.gov.za
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">9. Third-Party Links</h2>
              <p>
                Our website contains links to third-party services such as Google Maps. We are not responsible
                for the privacy practices of those services and recommend you review their privacy policies
                separately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The date at the top of this page reflects
                when it was last revised. Continued use of our website after any changes constitutes acceptance
                of the updated policy.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Us With Questions
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
