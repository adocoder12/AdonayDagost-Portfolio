/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        jump7456: {
          "15%": { "border-bottom-right-radius": "3px" },
          "25%": { transform: "translateY(9px) rotate(22.5deg)" },
          "50%": {
            transform: "translateY(18px) scale(1, .9) rotate(45deg)",
            "border-bottom-right-radius": "40px",
          },
          "75%": { transform: "translateY(9px) rotate(67.5deg)" },
          "100%": { transform: "translateY(0) rotate(90deg)" },
        },
        shadow324: {
          "0%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.2, 1)" },
          "100%": { transform: "scale(1, 1)" },
        },
      },
      animation: {
        jump7456: "jump7456 0.5s linear infinite",
        shadow324: "shadow324 0.5s linear infinite",
      },
      colors: {
        transparent: "transparent",
        mainColor: "#3c6381",
        title: "#f4f9fc",
        content: "#f4f9fc",
        decorator: "#997a66",
      },
      backgroundImage: {
        "banner-img-about": "url('/src/assets/img/AboutCover_pic.jpg')", // Adjust the path to your image
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animated")],
};
