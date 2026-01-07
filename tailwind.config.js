/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'youtube-red': '#FF0000',
        'youtube-dark': '#0F0F0F',
        'youtube-light': '#FFFFFF',
        'youtube-gray': '#272727',
        'youtube-light-gray': '#F9F9F9',
        'youtube-border-dark': '#272727',
        'youtube-border-light': '#E5E5E5',
        'youtube-text-dark': '#FFFFFF',
        'youtube-text-light': '#0F0F0F',
        'youtube-hover-dark': 'rgba(255, 255, 255, 0.1)',
        'youtube-hover-light': 'rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

