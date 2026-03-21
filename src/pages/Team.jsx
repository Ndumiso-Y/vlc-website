import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUsers, FaHardHat, FaClipboardList, FaShieldAlt, FaCrown } from "react-icons/fa";

export default function Team() {
  const people = [
    { name: 'Viran Chand', role: 'CEO', icon: FaCrown, color: 'from-brand to-accent' },
    { name: 'Quinton Douwie', role: 'Assistant CEO', icon: FaUserTie, color: 'from-accent to-gold' },
    { name: 'Victor Ratshimolo', role: 'Assistant CEO', icon: FaUserTie, color: 'from-accent to-gold' },
    { name: 'Shivesh Singh', role: 'Supervisor', icon: FaUsers, color: 'from-brand to-gold' },
    { name: 'John Makhubela', role: 'Construction Manager', icon: FaHardHat, color: 'from-gold to-brand' },
    { name: 'Karabo Mohale', role: 'Supervisor', icon: FaUsers, color: 'from-brand to-gold' },
    { name: 'Ofentse Ntshabele', role: 'Supervisor', icon: FaUsers, color: 'from-brand to-gold' },
    { name: 'Robert Muthivhi', role: 'Supervisor', icon: FaUsers, color: 'from-brand to-gold' },
    { name: 'Ozia Khoza', role: 'Supervisor', icon: FaUsers, color: 'from-brand to-gold' },
    { name: 'Anna Van Staden', role: 'Admin', icon: FaClipboardList, color: 'from-accent to-brand' },
    { name: 'Alex Manicus', role: 'Admin', icon: FaClipboardList, color: 'from-accent to-brand' },
    { name: 'Isaac Gadinabokao', role: 'Safety Officer', icon: FaShieldAlt, color: 'from-gold to-accent' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-page text-gray-900 dark:text-gray-100">
      
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
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              The VLC Construction team exemplifies excellence and innovation, consistently exceeding expectations with dedication, expertise and a commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent">
                Our Leadership & Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experienced professionals driving innovation and excellence in every project
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {people.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-card rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${person.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <person.icon className="text-2xl" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {person.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
