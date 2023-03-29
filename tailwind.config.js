/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#64748b',
        success: '#84cc16',
        info: '#06b6d4',
        warning: '#facc15',
        pending: '#f97316',
        danger: '#dc2626',
        light: '#f1f5f9',
        dark: '#1e293b',
        off: '#8D92A3',
      },
    },
  },
  plugins: [],
};
