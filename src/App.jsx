// src/App.jsx
import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Ethos from "./pages/Ethos.jsx";
import Team from "./pages/Team.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";

import logo from "./assets/vlc-logo.png"; // make sure this exists

// Small helper for active/inactive link styling
const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded-lg transition hover:bg-subtle/70 dark:hover:bg-white/5 ${
        isActive ? "text-accent underline decoration-gold" : "text-gray-900 dark:text-gray-100"
      }`
    }
  >
    {children}
  </NavLink>
);

// Simple theme hook (persists to localStorage)
function useTheme() {
  const [dark, setDark] = React.useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, toggle: () => setDark((v) => !v) };
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.2 });
  const { dark, toggle } = useTheme();

  // Mobile menu open/close
  const [open, setOpen] = React.useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 h-[3px] bg-accent origin-left z-50"
      />

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#0d1324]/85 backdrop-blur border-b border-gray-200 dark:border-white/10">
        <div className="container flex items-center justify-between py-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logo} alt="VLC Construction logo" className="h-12 md:h-14 w-auto" />
            <div className="leading-tight">
              <div className="font-bold text-brand dark:text-gold text-lg md:text-xl">
                VLC Construction
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-300/80">
                Building with integrity
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/ethos">Ethos</NavItem>
            <NavItem to="/team">Team</NavItem>
            <NavItem to="/events">Events</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Dark/Light toggle */}
            <button
              onClick={toggle}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-white/15 hover:bg-subtle/70 dark:hover:bg-white/10 transition text-gray-900 dark:text-gray-100"
              type="button"
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <FaSun /> : <FaMoon />}
              <span className="text-sm font-medium">{dark ? "Light" : "Dark"}</span>
            </button>

            {/* CTA (desktop) */}
            <Link
              to="/contact"
              className="hidden md:inline-block bg-accent text-white px-4 py-2 rounded-xl shadow-soft hover:shadow transition"
            >
              Get a Quote
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d1324]">
            <div className="container py-3 flex flex-col gap-1">
              <NavItem to="/" onClick={closeMenu}>Home</NavItem>
              <NavItem to="/about" onClick={closeMenu}>About</NavItem>
              <NavItem to="/services" onClick={closeMenu}>Services</NavItem>
              <NavItem to="/projects" onClick={closeMenu}>Projects</NavItem>
              <NavItem to="/ethos" onClick={closeMenu}>Ethos</NavItem>
              <NavItem to="/team" onClick={closeMenu}>Team</NavItem>
              <NavItem to="/events" onClick={closeMenu}>Events</NavItem>
              <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => { toggle(); }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-white/15 hover:bg-subtle/70 dark:hover:bg-white/10 transition text-gray-900 dark:text-gray-100"
                  type="button"
                >
                  {dark ? <FaSun /> : <FaMoon />}
                  <span className="text-sm font-medium">{dark ? "Light" : "Dark"}</span>
                </button>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="inline-block bg-accent text-white px-4 py-2 rounded-xl shadow-soft"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ROUTES */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ethos" element={<Ethos />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-white mt-16">
        <div className="container py-10 grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-sm text-gray-200 max-w-sm">
              We deliver civil works, renovations, and turnkey builds that stand the test of time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Email: info@vlcconstruction.co.za</li>
              <li>Phone: +27 83 303 0722</li>
              <li>192A Kock St, Rustenburg, NW 0299</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gold">Newsletter</h4>
            <form className="flex gap-2">
              <input className="flex-1 px-3 py-2 rounded-lg text-dark" placeholder="Your email" />
              <button className="px-3 py-2 rounded-lg bg-accent hover:bg-accent/90" type="button">Join</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 text-sm text-gray-400 py-4">
          <div className="container flex justify-between items-center">
            <span>© {new Date().getFullYear()} VLC Construction</span>
            <span>Designed by Embark Digitals</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
