/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        windsor: "Windsor Pro",
        urbanist: "Urbanist",
      },
      colors: {
        GreenHaza: "#00A85A",
        DeepBlack: "#292626",
        BlackSqueeze: "#F0FAF3",
        Dune: "#333333",
        DavyGrey: "#52575C",
        DeepGreen: "#005F22",
        AquaDeep: "#075142",
        BalticSea: "#292626",
        WhiteSmoke: "#F4F4F4",
        SnowDrift: "#F9F9F9",
        SherwoodGreen: "#003B36",
        SaladGreen: "#A9D046",
        Gray: "#545454",
        Cyan: "#008748",
        Graydark: "#707070",
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
      backgroundImage: {
        "ooo-oo": "url('/public/assets/images/home/why-choose-us-img.png')",
      },
      keyframes: {
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeUp: "fadeUp 4s ease-out",
      },
      // Custom utilities for scrollbar
      scrollbarHide: {
        "-ms-overflow-style": "none", // IE and Edge
        "scrollbar-width": "none", // Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, Opera
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
