module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  fontFamily: {
    serif: ['var(--font-spectral)', 'serif'],
    sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
  }
},
  },
  plugins: [],
};

