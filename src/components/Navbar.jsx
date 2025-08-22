import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/vlc-logo.png";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-lg transition hover:bg-subtle/70 dark:hover:bg-white/5 ${
        isActive ? "text-accent underline decoration-gold" : "text-gray-900 dark:text-gray-100"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" :
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#0d1324]/80 backdrop-blur border-b border-gray-200 dark:border-white/10">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="VLC Construction logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <div className="font-bold text-brand dark:text-gold text-lg">VLC Construction</div>
            <div className="text-xs text-gray-600 dark:text-gray-300/80">Building with integrity</div>
          </div>
        </Link>

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

        <button
          onClick={() => setDarkMode((v) => !v)}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-white/15 hover:bg-subtle/70 dark:hover:bg-white/10 transition text-gray-900 dark:text-gray-100"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          type="button"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          <span className="text-sm font-medium">{darkMode ? "Light" : "Dark"}</span>
        </button>
      </div>
    </header>
  );
}
