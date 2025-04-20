/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        Clash: ["ClashDisplay", "sans-serif"],
        ClashVariable: ["ClashDisplayVariable", "sans-serif"]
      },
      colors: {
        Primary: "#3399ff",
        Secondary: "#f0f4f9",
      }
    },
  },
  plugins: [],
}

