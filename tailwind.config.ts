import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-img": "url('../public/samsung970evoplus.webp')",
      },
      fontFamily: {
        noto: "var(--font-noto-sans)",
      },
      colors: {
        dark: "#444466",
        tertiary: "#845781",
        secondary: "#c66b86",
        primary: "#f78c78",
        light: "#ffbd67",
        bright: "#f9f871",
      },
    },
  },
  plugins: [],
};
export default config;
