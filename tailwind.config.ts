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
      },
      colors: {
        grayscale: {
          10: "#ffffff",
          20: "#FAFAFA",
          30: "#EEEEEE",
          40: "#D9D9D9",
          50: "#9FA6B2",
          60: "#787486",
          70: "#4B4B4B",
          80: "#333236",
          90: "#171717",
          100: "#000000",
        },
        violet: {
          10: "#F1EFFD", // 8% violet color
          50: "#5534DA",
        },
        red: {
          50: "#D6173A",
        },
        green: {
          50: "#7AC555",
        },
        purple: {
          50: "#760DDE",
        },
        orange: {
          50: "#FFA500",
        },
        blue: {
          50: "#76A5EA",
        },
        pink: {
          50: '#E876EA',
        },
      },
      spacing: {
        px: '1px',
      },
    },
    corePlugins: {
      fontSize: false,  // 폰트 사이즈 기본 플러그인 비활성화
    },
  },
  plugins: [],
};
export default config;
