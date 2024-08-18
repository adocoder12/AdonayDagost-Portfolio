/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        mainColor: "#2c475c",
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
