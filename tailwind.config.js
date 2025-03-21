/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "teal-lg": "0px 15px 80px -15px rgba(20, 170, 126, 0.2)", // Teal shadow
        "3xl": "0px 35px 120px -15px #211e35",
        "4xl": "0px 30px 120px -15px #211e35",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/minimalbg.jpg')",
        "portrait-image": "url('/portraitmain1.png')",
        "laptop-image": "url('/laptopbg.png')",
        "texture-1": "url('/texture1.png')",
        "texture-2": "url('/texture2.png')",
        "contact-bg": "url('/contactbg.png')",
      },
    },
  },
  plugins: [],
};
