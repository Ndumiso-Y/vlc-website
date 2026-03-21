// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaClock, FaPhone } from "react-icons/fa";

const BASE = import.meta.env.BASE_URL; // "/" locally, "/vlc-website/" on GH Pages
const logoSrc = `${BASE}vlc-logo.png`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 relative overflow-hidden">
      {/* Premium gradient divider */}
      <div className="h-1 bg-gradient-to-r from-brand via-accent to-gold" />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-dark-section to-gray-900 dark:from-dark-section dark:via-dark-page dark:to-dark-section"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-brand to-accent"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl opacity-15 bg-gradient-to-br from-gold to-brand"></div>

      {/* Main footer content */}
      <div className="relative z-10 text-white">
        <div className="container py-16">
          {/* Top section with brand and map */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            
            {/* Brand section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <img src={logoSrc} alt="VLC Construction" className="h-12 w-auto block" />
                <div className="leading-tight">
                  <div className="font-extrabold text-gold text-xl">VLC Construction</div>
                  <div className="text-sm text-gray-300">Building with integrity</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Premier provider of high-quality steel products and comprehensive services for industrial plant projects across South Africa.
              </p>
              
              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { icon: FaFacebookF, href: "#", label: "Facebook" },
                  { icon: FaInstagram, href: "#", label: "Instagram" },
                  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                  { icon: FaTwitter, href: "#", label: "Twitter" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300 group"
                  >
                    <Icon className="text-lg group-hover:text-gold transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gold to-brand bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-brand/20 border border-brand/30 group-hover:bg-brand/30 transition-colors">
                    <FaMapMarkerAlt className="text-brand" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Address</div>
                    <div className="text-gray-300">192A Kock Street<br />Rustenburg NW 0299</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-accent/20 border border-accent/30 group-hover:bg-accent/30 transition-colors">
                    <FaEnvelope className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a href="mailto:info@vlcconstruction.co.za" className="text-gold hover:text-accent transition-colors">
                      info@vlcconstruction.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-gold/20 border border-gold/30 group-hover:bg-gold/30 transition-colors">
                    <FaClock className="text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Business Hours</div>
                    <div className="text-gray-300">Monday - Friday<br />08:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
                Find Us
              </h3>
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 hover:border-gold/50 transition-colors group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8234567890123!2d27.2417!3d-25.6673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe1000000000000%3A0x0000000000000000!2s192A%20Kock%20St%2C%20Rustenburg%2C%200299%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1000000000000!5m2!1sen!2sza"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  className="filter group-hover:contrast-110 transition-all duration-300"
                  title="VLC Construction Location"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-white/20">
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/projects", label: "Projects" },
                  { to: "/team", label: "Our Team" }
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link 
                      to={to} 
                      className="text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Steel Products</li>
                <li>Industrial Plants</li>
                <li>Custom Solutions</li>
                <li>Maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Manufacturing</li>
                <li>Petrochemical</li>
                <li>Construction</li>
                <li>Mining</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors duration-300">
                    Get Quote
                  </Link>
                </li>
                <li>
                  <Link to="/ethos" className="text-gray-300 hover:text-gold transition-colors duration-300">
                    Our Ethos
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-300 hover:text-gold transition-colors duration-300">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-black/50 border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-300">
            © {year} VLC Construction. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-300 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
