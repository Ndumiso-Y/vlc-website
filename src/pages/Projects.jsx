import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaTools, 
  FaCogs, 
  FaClipboardCheck, 
  FaTimes, 
  FaBuilding,
  FaIndustry,
  FaHome,
  FaFilter,
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaAward,
  FaStar,
  FaArrowRight,
  FaQuoteLeft,
  FaHardHat,
  FaShieldAlt
} from "react-icons/fa";

// Vite-safe URLs for assets under src/assets
const maintenanceImg = new URL("../assets/maintaincework4.png", import.meta.url).href;
const installationImg = new URL("../assets/movingaround3.png", import.meta.url).href;
const qualityImg = new URL("../assets/qualityControl1.png", import.meta.url).href;
const maintenance3Img = new URL("../assets/Maintaince work 3.png", import.meta.url).href;
const installationWorkImg = new URL("../assets/Installation.png", import.meta.url).href;

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const [animIn, setAnimIn] = useState(false);

  const projects = useMemo(
    () => [
      {
        title: "Maintenance Work",
        img: maintenanceImg,
        Icon: FaTools,
        description: "High-quality maintenance services ensuring reliability and efficiency across operations.",
      },
      {
        title: "Installation Work",
        img: installationImg,
        Icon: FaCogs,
        description: "Expert installation solutions delivered with precision for long-term durability.",
      },
      {
        title: "Quality Control",
        img: qualityImg,
        Icon: FaClipboardCheck,
        description: "Strict quality checks to ensure every project meets industry standards and expectations.",
      },
    ],
    []
  );

  const openModal = (idx) => {
    setOpenIndex(idx);
    requestAnimationFrame(() => setAnimIn(true));
  };

  const closeModal = useCallback(() => {
    setAnimIn(false);
    const timeout = setTimeout(() => {
      setOpenIndex(null);
    }, 250);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") {
        setOpenIndex((prev) => (prev + 1) % projects.length);
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, closeModal, projects.length]);

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
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Showcasing our expertise in steel construction, maintenance, and quality control across diverse industrial applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
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
                Featured Projects
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white dark:bg-[#0f1426] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-white/10"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <button
                    onClick={() => openModal(index)}
                    className="w-full h-64 overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand group-hover:scale-105 transition-transform duration-500"
                    aria-label={`View ${project.title} details`}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-brand to-accent text-white shadow-lg">
                      <project.Icon className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
            animIn ? "bg-black/80 opacity-100" : "bg-black/0 opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative max-w-6xl w-full max-h-[90vh] bg-transparent transition-all duration-200 ease-out ${
              animIn ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
              aria-label="Close image modal"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            <img
              src={projects[openIndex]?.img}
              alt={projects[openIndex]?.title}
              className="mx-auto block max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain select-none rounded-2xl"
              draggable="false"
            />

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{projects[openIndex]?.title}</h3>
              <p className="text-white/80 text-lg">{projects[openIndex]?.description}</p>
            </div>

            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button
                type="button"
                className="pointer-events-auto p-4 text-white/80 hover:text-white bg-black/20 rounded-full hover:bg-black/40 transition-all text-3xl font-bold"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((prev) => (prev - 1 + projects.length) % projects.length);
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="pointer-events-auto p-4 text-white/80 hover:text-white bg-black/20 rounded-full hover:bg-black/40 transition-all text-3xl font-bold"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((prev) => (prev + 1) % projects.length);
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
