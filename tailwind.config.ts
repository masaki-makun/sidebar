import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E5E5E5",
        containerBackground: "#F1F2ED",
        brand: "#7CE4A3",
        primary: "#000000",
        secondary: "#A7A99F",
      },
    },
  },
  plugins: [],
}
export default config
