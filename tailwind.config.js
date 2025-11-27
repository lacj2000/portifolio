/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      colors: {
        background: "#050505", 
        
        surface: "#0f172a", // Slate-900
        
        primary: {
          DEFAULT: "#3b82f6", // Blue-500 (Normal)
          hover: "#2563eb",   // Blue-600 (Ao passar o mouse)
        },
        
        txt: {
          main: "#f8fafc",    // Branco gelo (Slate-50)
          muted: "#94a3b8",   // Cinza para descrições
        }
      },
    },
  },
  plugins: [],
}
