import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        istok: ["Istok Web", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
