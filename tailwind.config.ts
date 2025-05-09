/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "360" : "360px",
      "480" : "480px",
      "sm" : "576px",
      "md" : "768px",
      "lg" : "1024px",
      "xl" : '1536px'
    },
    container : {
      center : true,
      screens : {
        "360" : "100%",
        "480" : "100%",
        "sm" : "100%",
        "md" : "100%",
        "lg" : "1140px",
        "xl" : "1140px"
      },
      padding : "20px"
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

