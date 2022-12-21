/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 5s linear infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            "margin-top": "-270px",
          },
          "5%, 33%": {
            "margin-top": "-180px",
          },
          "38%, 66%": {
            "margin-top": "-90px",
          },
          "71%, 99.99%": {
            "margin-top": "0px",
          },
        },
      },
      animationBtn: {
        splashout: "spreadout 0.7s steps(22) forwards",
        splashin: "spreadin 0.7s steps(22) forwards",
      },
      keyframesBtn: {
        spreadout: {
          "0%": { "mask-position": "0 0" },
          "100%": { "mask-position": "100% 0" },
        },
        spreadin: {
          "0%": { "mask-position": "100% 0" },
          "100%": { "mask-position": "0 0" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
