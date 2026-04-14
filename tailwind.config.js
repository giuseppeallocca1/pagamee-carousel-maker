/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pagamee: {
          cyan: '#00B4D8',
          blue: '#0077B6',
          amber: '#FFC107',
          dark: '#1A1A2E',
          gray: '#6B7280',
          bg: '#F0F9FF',
          border: '#D4E8F5',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'spin': 'spin 0.8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
