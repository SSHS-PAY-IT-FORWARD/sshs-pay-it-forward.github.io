/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "350px", max: "819px" },
      md: { min: "820px", max: "1023px" },
      lg: { min: "1080px" },
    },
    extend: {
      backgroundImage: {
        main: 'url("/public/pay-it-forward-conf-bg-contrast.webp")',
      },
    },
    fontFamily: {
      proxima: ["Proxima Nova", "Poppins", "sans-serif"],
      pretendard: ["Pretendard", "Noto Sans KR", "sans-serif"],
    },
  },
  plugins: [],
};
