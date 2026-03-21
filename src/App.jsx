// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Ethos from "./pages/Ethos.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";

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
    <div className="min-h-screen bg-white dark:bg-[#0b1020] text-gray-900 dark:text-gray-100 flex flex-col">
      <ScrollToTop />
      <Navbar dark={dark} setDark={setDark} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ethos" element={<Ethos />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* Footer link placeholders */}
          <Route path="/privacy" element={<div className="container py-16">Privacy policy coming soon.</div>} />
          <Route path="/terms" element={<div className="container py-16">Terms of service coming soon.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
