import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHardHat, FaHome, FaEnvelope } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-page flex items-center justify-center px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-gradient-to-br from-brand to-accent text-white shadow-2xl">
            <FaHardHat className="text-5xl" />
          </div>
        </div>

        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          This page doesn't exist or may have been moved. Let's get you back on solid ground.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaHome />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand dark:border-gold text-brand dark:text-gold font-semibold rounded-xl hover:bg-brand hover:text-white dark:hover:bg-gold dark:hover:text-gray-900 transition-all duration-300"
          >
            <FaEnvelope />
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
