import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Terms() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
            <p className="text-lg font-light opacity-90">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the VLC Construction website (vlc-construction.com), you accept and agree
                to be bound by these Terms of Service. If you do not agree to these terms, please do not use
                this website. These terms apply to all visitors, users, and anyone who accesses or uses the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2. About VLC Construction</h2>
              <p>
                VLC Construction (Pty) Ltd is a construction and steel fabrication company registered in South
                Africa. Our principal place of business is 192A Kock Street, Rustenburg, North West, 0299.
                This website is operated for informational and business enquiry purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Website Use</h2>
              <p>This website is provided for lawful, personal, and business use only. You agree not to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Use the website for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorised access to any part of the website or its systems</li>
                <li>Transmit any harmful, offensive, or malicious content through the contact form</li>
                <li>Reproduce, duplicate, or copy any content from this website without written permission</li>
                <li>Use automated tools to scrape or extract data from this website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, images, graphics, logos, and the VLC Construction
                brand — is the property of VLC Construction (Pty) Ltd and is protected by South African
                copyright law. No content may be reproduced, distributed, or used without prior written consent
                from VLC Construction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">5. Contact Form and Enquiries</h2>
              <p>
                Submitting an enquiry through our contact form does not constitute a binding contract or
                guarantee of service. All project quotations, agreements, and service engagements are subject
                to a separate written agreement between VLC Construction and the client.
              </p>
              <p className="mt-3">
                We aim to respond to all enquiries within 24 hours during business hours (Monday – Friday,
                08:00–17:00 SAST). We cannot guarantee response times outside these hours.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">6. Disclaimer of Warranties</h2>
              <p>
                This website is provided on an "as is" and "as available" basis. VLC Construction makes no
                warranties, express or implied, regarding the accuracy, completeness, or fitness for purpose
                of the content on this site. We do not warrant that the website will be uninterrupted,
                error-free, or free from viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by South African law, VLC Construction shall not be liable for
                any direct, indirect, incidental, or consequential damages arising from your use of, or
                inability to use, this website or its content. This includes, but is not limited to, loss of
                data, loss of revenue, or business interruption.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (such as Google Maps or social media
                platforms). These links are provided for convenience only. VLC Construction does not endorse,
                control, or accept responsibility for the content or practices of any linked third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">9. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the
                Republic of South Africa. Any disputes arising from these terms or your use of this website
                shall be subject to the exclusive jurisdiction of the South African courts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">10. Changes to These Terms</h2>
              <p>
                VLC Construction reserves the right to update these Terms of Service at any time. The date at
                the top of this page indicates when the terms were last revised. Continued use of the website
                after any changes constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">11. Contact</h2>
              <p>
                For any questions regarding these Terms of Service, contact us at:{" "}
                <a href="mailto:info@vlcconstruction.co.za" className="text-brand dark:text-gold underline">
                  info@vlcconstruction.co.za
                </a>
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex flex-wrap gap-4">
              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand text-brand dark:text-gold dark:border-gold font-semibold rounded-xl hover:bg-brand hover:text-white dark:hover:bg-gold dark:hover:text-gray-900 transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
