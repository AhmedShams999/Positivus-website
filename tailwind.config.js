/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      header: ['Space Grotesk','sans-serif'],
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      colors:{
        'primary': "#B9FF66",
        'secondry': "#191A23",
        'light_gray': '#F3F3F3',
      }
    },
  },
  plugins: [],
}

