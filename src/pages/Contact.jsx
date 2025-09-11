import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe, FaPaperPlane, FaClock, FaUser, FaComment } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const emails = [
    { label: 'General Enquiries', value: 'info@vlcconstruction.co.za', icon: FaEnvelope, color: 'from-brand to-accent' },
    { label: 'CEO', value: 'viran@vlcconstruction.co.za', icon: FaUser, color: 'from-accent to-gold' },
    { label: 'Assistant CEO (Quinton)', value: 'quinton@vlcconstruction.co.za', icon: FaUser, color: 'from-gold to-brand' },
    { label: 'Assistant CEO (Victor)', value: 'victor@vlcconstruction.co.za', icon: FaUser, color: 'from-brand to-gold' },
    { label: 'Supervisor', value: 'shivesh@vlcconstruction.co.za', icon: FaUser, color: 'from-accent to-brand' },
    { label: 'Admin Enquiries', value: 'anna@vlcconstruction.co.za', icon: FaComment, color: 'from-gold to-accent' },
  ];

  const phones = [
    { label: 'CEO — Viran Chand', value: '083 303 0722', color: 'from-brand to-accent' },
    { label: 'Site Manager — Victor Ratshimolo', value: '079 219 3017', color: 'from-accent to-gold' },
    { label: 'Site Manager — Quinton Douwie', value: '068 547 3287', color: 'from-gold to-brand' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1020] text-gray-900 dark:text-gray-100">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand via-accent to-gold text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-30 bg-white"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-20 bg-white"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Get in touch with our team to discuss your next construction project or enquiry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent">
                    Let's Build Together
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/20 bg-white dark:bg-[#0f1426] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-brand focus:outline-none transition-colors"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/20 bg-white dark:bg-[#0f1426] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-brand focus:outline-none transition-colors"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/20 bg-white dark:bg-[#0f1426] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-brand focus:outline-none transition-colors"
                  placeholder="Email address"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/20 bg-white dark:bg-[#0f1426] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-brand focus:outline-none transition-colors"
                  placeholder="Phone number"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/20 bg-white dark:bg-[#0f1426] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-brand focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Location */}
              <div className="bg-white dark:bg-[#0f1426] rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-brand to-accent text-white shadow-lg">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Office</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  192A Kock Street<br />
                  Rustenburg, NW 0299<br />
                  South Africa
                </p>
                
                {/* Business Hours */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <FaClock className="text-brand dark:text-gold" />
                    <span className="font-semibold text-gray-900 dark:text-white">Business Hours</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Monday - Friday: 08:00 - 17:00
                  </p>
                </div>
              </div>

              {/* Email Contacts */}
              <div className="bg-white dark:bg-[#0f1426] rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-white/10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Email Contacts</h3>
                <div className="space-y-4">
                  {emails.map((email, index) => (
                    <motion.div
                      key={email.value}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${email.color} text-white`}>
                        <email.icon className="text-sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 dark:text-white">{email.label}</div>
                        <a
                          href={`mailto:${email.value}`}
                          className="text-brand dark:text-gold hover:text-accent transition-colors text-sm truncate block"
                        >
                          {email.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="bg-white dark:bg-[#0f1426] rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-white/10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Phone Contacts</h3>
                <div className="space-y-4">
                  {phones.map((phone, index) => (
                    <motion.div
                      key={phone.value}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${phone.color} text-white`}>
                        <FaPhoneAlt className="text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">{phone.label}</div>
                        <a
                          href={`tel:${phone.value.replace(/\s/g, '')}`}
                          className="text-brand dark:text-gold hover:text-accent transition-colors text-sm"
                        >
                          {phone.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Website */}
              <div className="bg-white dark:bg-[#0f1426] rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-gold to-brand text-white shadow-lg">
                    <FaGlobe className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Website</h3>
                    <a
                      href="https://www.vlc-construction.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand dark:text-gold hover:text-accent transition-colors"
                    >
                      www.vlc-construction.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
