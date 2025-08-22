import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FaTools, FaCogs, FaClipboardCheck, FaTimes } from "react-icons/fa";

// Vite-safe URLs for assets under src/assets
const maintenanceImg = new URL("../assets/maintaincework4.png", import.meta.url).href;
const installationImg = new URL("../assets/movingaround3.png", import.meta.url).href;
const qualityImg = new URL("../assets/qualityControl1.png", import.meta.url).href;

export default function Projects() {
  const iconClass = "text-2xl sm:text-3xl text-gray-700 dark:text-gray-200";

  const projects = useMemo(
    () => [
      {
        title: "Maintenance Work",
        img: maintenanceImg,
        Icon: FaTools,
        description:
          "High-quality maintenance services ensuring reliability and efficiency across operations.",
      },
      {
        title: "Installation Work",
        img: installationImg,
        Icon: FaCogs,
        description:
          "Expert installation solutions delivered with precision for long-term durability.",
      },
      {
        title: "Quality Control",
        img: qualityImg,
        Icon: FaClipboardCheck,
        description:
          "Strict quality checks to ensure every project meets industry standards and expectations.",
      },
    ],
    []
  );

  // Lightbox state
  const [openIndex, setOpenIndex] = useState(null);
  const [animIn, setAnimIn] = useState(false); // controls fade/zoom classes

  const openModal = (idx) => {
    setOpenIndex(idx);
    // allow next paint, then animate in
    requestAnimationFrame(() => setAnimIn(true));
  };

  const closeModal = useCallback(() => {
    // animate out, then unmount
    setAnimIn(false);
    const timeout = setTimeout(() => {
      setOpenIndex(null);
    }, 250); // keep in sync with duration classes below
    return () => clearTimeout(timeout);
  }, []);

  // ESC + arrow key support
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
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Our Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, img, Icon, description }, idx) => (
            <article
              key={title}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Full-bleed header image with subtle hover zoom */}
              <button
                type="button"
                onClick={() => openModal(idx)}
                className="relative overflow-hidden w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b5e7b]"
                aria-label={`Open full image of ${title}`}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </button>

              <div className="p-6">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Icon className={iconClass} aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-center sm:text-left">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with stable animations */}
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
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
              aria-label="Close image modal"
              title="Close"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Image constrained to viewport */}
            <img
              src={projects[openIndex].img}
              alt={projects[openIndex].title}
              className="mx-auto block max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain select-none"
              draggable="false"
            />

            {/* Caption */}
            <div className="mt-3 text-center text-sm text-white/80">
              {projects[openIndex].title}
            </div>

            {/* Prev/Next controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button
                type="button"
                className="pointer-events-auto p-3 text-white/80 hover:text-white"
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
                className="pointer-events-auto p-3 text-white/80 hover:text-white"
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
