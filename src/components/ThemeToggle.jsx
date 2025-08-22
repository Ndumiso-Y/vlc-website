import React from "react";
import { useTheme } from "../theme/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-white/15 hover:bg-subtle/70 dark:hover:bg-white/10 transition text-gray-900 dark:text-gray-100"
      aria-label="Toggle color theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
      <span className="text-sm font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
