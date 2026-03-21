// src/App.jsx
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ChatBot from "./components/ChatBot.jsx";

// Pages — lazy loaded per route to reduce initial bundle size
const Home     = lazy(() => import("./pages/Home.jsx"));
const About    = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Ethos    = lazy(() => import("./pages/Ethos.jsx"));
const Team     = lazy(() => import("./pages/Team.jsx"));
const Contact  = lazy(() => import("./pages/Contact.jsx"));
const Privacy  = lazy(() => import("./pages/Privacy.jsx"));
const Terms    = lazy(() => import("./pages/Terms.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  // Theme state (persist + light mode default)
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return false; // Default to light mode
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    // Flex column so footer always renders and sticks to bottom on short pages
    <div className="min-h-screen bg-white dark:bg-dark-page text-gray-900 dark:text-gray-100 flex flex-col">
      <ScrollToTop />
      <Navbar dark={dark} setDark={setDark} />
      <main className="flex-1">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-10 h-10 rounded-full border-4 border-brand border-t-transparent animate-spin" aria-label="Loading page" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ethos" element={<Ethos />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
