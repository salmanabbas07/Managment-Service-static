/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e11d48',
          blue: '#2563eb',
          navy: '#071524',
          dark: '#09131f',
          gold: '#f59e0b',
          yellow: '#facc15',
          emerald: '#10b981'
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', '"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
