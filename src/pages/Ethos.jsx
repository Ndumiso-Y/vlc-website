import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaShieldAlt, FaHandshake, FaAward, FaHeart } from "react-icons/fa";

export default function Ethos() {
  const principles = [
    {
      icon: FaShieldAlt,
      title: "Safety first — everyone goes home safely.",
      color: "from-brand to-accent"
    },
    {
      icon: FaHandshake,
      title: "Transparent collaboration and fair pricing.",
      color: "from-accent to-gold"
    },
    {
      icon: FaAward,
      title: "Quality workmanship and punctual delivery.",
      color: "from-brand to-gold"
    },
    {
      icon: FaHeart,
      title: "Community upliftment and local supplier support.",
      color: "from-gold to-brand"
    }
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
              Our Ethos
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Excellence, innovation, safety and integrity guide everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Mission */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-dark-card rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-brand to-accent text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaBullseye className="text-3xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  Add value by delivering on expectations safely and cost-effectively, with integrity and commitment to customers and employees.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-dark-card rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-accent to-gold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaEye className="text-3xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  Lead sustainably by developing talent, enhancing asset value, integrating vertically, and achieving operational excellence with eco-friendly practices and a skilled, diverse workforce.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50 dark:bg-dark-section">
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
                Core Principles
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The fundamental values that drive our commitment to excellence in every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${principle.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <principle.icon className="text-2xl" />
                    </div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                      {principle.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
