import type { Config } from "tailwindcss";

export const colors = {
  primary: "#F1F3F2",
  secoundary: "#1C1C1C",
  tertiary: "#FF5C00",
  text: "#4E4E4E",
  details: "#D3D3D3",
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
      phone: {
        max: "480px",
      },
      m2xl: { max: "1536px" },
			mxl: { max: "1280px" },
			mlg: { max: "1023px" },
			mmd: { max: "920px" },
			msm: { max: "640px" },
			mxs: { max: "480px" },
			"2xl": "1536px",
			xl: "1280px",
			lg: "1023px",
			md: "920px",
			sm: "640px",
			xs: "480px",
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
