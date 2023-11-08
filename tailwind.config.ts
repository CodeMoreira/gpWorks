import type { Config } from "tailwindcss";

export const colors = {
  primary: "#F1F3F2",
  secoundary: "#1C1C1C",
  tertiary: "#4E4E4E",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    screens: {
      desktop: {
        max: "1480px",
      },
      desktop2: {
        max: "1280px",
      },
      tablet: {
        max: "980px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
