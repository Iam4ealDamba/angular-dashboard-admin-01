/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        tw_primary: "#353E71",
        tw_secondary: "#E6C088",
        tw_accent: "#E4E4E4",
        tw_bg: "#212744",
        tw_light: "#F5F5F5",
        tw_dark: "#161616",
        success: "#4BDA7B",
        error: "#DA4B4B",
      },
      screens: {
        max_2xl: { max: "1536px" },
        max_xl: { max: "1280px" },
        max_lg_2: { max: "1100px" },
        max_lg: { max: "1024px" },
        max_md: { max: "768px" },
        max_sm: { max: "640px" },
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
