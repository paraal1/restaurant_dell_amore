/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'italian-red': '#C41E3A',
        'italian-red-dark': '#8B0000',
        'italian-green': '#008C45',
        'italian-green-dark': '#006400',
        'cream': '#FFF8DC',
        'cream-dark': '#F5DEB3',
        'wood': '#8B4513',
        'wood-light': '#DEB887',
        'gold': '#D4AF37',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      },
    },
  },
  plugins: [],
}
