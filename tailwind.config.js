/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "256px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      short: { raw: "(max-height: 850px)" },
      // => @media (min-height: 800px) { ... }
      shorter: { raw: "(max-height: 690px)" },
      // => @media (min-height: 800px) { ... }
    },
    extend: {
      // backgroundImage: {
      //   blob: `url('/blob.png')`,
      // },
      colors: {
        bg_main: "#0D1F2D",
        bg_accent: "#1d2e3d",
        bg_button: "#4a9d9c",
        txt_main: "#FFFFFF",
        txt_accent: "#afffff",
        primary: "#3d3a3d",
        secondary: "#343434",
        notif: "#FF3D3D",
      },
    },
  },
  plugins: [],
};
