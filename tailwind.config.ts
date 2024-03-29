/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        greendarkest: {
          DEFAULT: "hsl(var(--greendarkest))",
          foreground: "hsl(var(--greendarkest-foreground))",
        },
        greensharp: {
          DEFAULT: "hsl(var(--greensharp))",
          foreground: "hsl(var(--greensharp-foreground))",
        },

        greendark: {
          DEFAULT: "hsl(var(--greendark))",
          foreground: "hsl(var(--greendark-foreground))",
        },

        greenprimary: {
          DEFAULT: "hsl(var(--greenprimary))",
          foreground: "hsl(var(--greenprimary-foreground))",
        },

        greensecondary: {
          DEFAULT: "hsl(var(--greensecondary))",
          foreground: "hsl(var(--greensecondary-foreground))",
        },

        greentertiary: {
          DEFAULT: "hsl(var(--greentertiary))",
          foreground: "hsl(var(--greentertiary-foreground))",
        },

        greenaccent: {
          DEFAULT: "hsl(var(--greenaccent))",
          foreground: "hsl(var(--greenaccent-foreground))",
        },

        greenlight: {
          DEFAULT: "hsl(var(--greenlight))",
          foreground: "hsl(var(--greenlighth-foreground))",
        },

        greendialog: {
          DEFAULT: "hsl(var(--greendialog))",
          foreground: "hsl(var(--greendialog-foreground))",
        },

        graydark: {
          DEFAULT: "hsl(var(--graydark))",
          foreground: "hsl(var(--graydark-foreground))",
        },

        graylight: {
          DEFAULT: "hsl(var(--graylight))",
          foreground: "hsl(var(--graylight-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "search-bar-in":{
          "0%": {
            opacity: 0,
            width: "0",
          },
          "50%": {
            opacity: 0,
            width: "20%",
          },
          "100%": {
            opacity: 1,
            width: "100%",
          },
        },
        "search-bar-out": {
          "0%": {
            opacity: 1,
            width: "100%",
          },
          "50%": {
            opacity: 0,
            width: "20%",
          },
          "100%": {
            opacity: "0",
            width: "0",
          },
        },
        "search-text-in": {
          "0%": {
            opacity: 0,
            width: "0%",
          },
          "50%": {
            opacity: 0,
            width: "80%",
          },
          "100%": {
            opacity: 1,
            width: "100%",
          },
        },
        "search-text-out": {
          "0%": {
            opacity: 1,
            width: "100%",
          },
          "50%": {
            opacity: 0,
            width: "80%",
          },
          "100%": {
            opacity: "0",
            width: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      boxShadow: {
        glow: "0px 0px 15px 0px #247a7f",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/forms"),
  ],
};
