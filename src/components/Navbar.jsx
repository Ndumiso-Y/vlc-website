// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const BASE = import.meta.env.BASE_URL;
const logoSrc = `${BASE}vlc-logo.png`; // public/vlc-logo.png (lowercase)

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

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = React.useState(false);
  const loc = useLocation();

  React.useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-dark-section/80 backdrop-blur border-b border-gray-200 dark:border-white/10">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="VLC Construction logo"
              className="h-10 md:h-12 w-auto block"
              width={140}
              height={48}
              loading="eager"
              decoding="async"
            />
            <div className="leading-tight">
              <div className="font-bold text-brand dark:text-gold text-lg md:text-xl">VLC Construction</div>
              <div className="text-xs text-gray-600 dark:text-gray-300/80">Building with integrity</div>
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
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* Right actions (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setDark((v) => !v)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md"
              type="button"
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-600" />}
              <span className="text-sm font-semibold">
                {dark ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
            <Link to="/contact" className="px-4 py-2 rounded-xl bg-accent text-white shadow-soft hover:opacity-95">
              Get a Quote
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-300 dark:border-white/15 hover:bg-subtle/70 dark:hover:bg-white/10"
            onClick={() => setOpen(true)}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Open menu"
            type="button"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="ml-auto h-full w-[85%] max-w-sm bg-white dark:bg-dark-section shadow-xl border-l border-gray-200 dark:border-white/10 p-5 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-brand dark:text-gold">Menu</span>
              <button
                className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-300 dark:border-white/15 hover:bg-subtle/70 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                type="button"
              >
                <FaTimes />
              </button>
            </div>

            <nav className="mt-6 grid gap-1">
              <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
              <NavItem to="/about" onClick={() => setOpen(false)}>About</NavItem>
              <NavItem to="/services" onClick={() => setOpen(false)}>Services</NavItem>
              <NavItem to="/projects" onClick={() => setOpen(false)}>Projects</NavItem>
              <NavItem to="/ethos" onClick={() => setOpen(false)}>Ethos</NavItem>
              <NavItem to="/team" onClick={() => setOpen(false)}>Team</NavItem>
              <NavItem to="/contact" onClick={() => setOpen(false)}>Contact</NavItem>
            </nav>

            <div className="mt-auto flex items-center justify-between pt-6">
              <button
                onClick={() => setDark((v) => !v)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md"
                type="button"
                title={dark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {dark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-600" />}
                <span className="text-sm font-semibold">
                  {dark ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
              <Link to="/contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl bg-accent text-white shadow-soft hover:opacity-95">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
