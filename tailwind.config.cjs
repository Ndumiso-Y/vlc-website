/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1f2d5c",
        accent: "#8b5a2b",
        gold: "#d4b06a",
        dark: "#0b0f1a",
        surface: "#ffffff",
        subtle: "#f6f7fb",
        // Dark mode background tokens — use these instead of raw hex values
        "dark-page": "#0b1020",   // full-page background in dark mode
        "dark-card": "#0f1426",   // card / panel background in dark mode
        "dark-section": "#0d1324", // section / navbar background in dark mode
      },
      boxShadow: { soft: "0 10px 25px rgba(0,0,0,0.08)" },
      borderRadius: { xl2: "1.25rem" }
    },
    container: { center: true, padding: "1rem", screens: { sm:"640px", md:"768px", lg:"1024px", xl:"1200px" } }
  },
  plugins: [],
}
