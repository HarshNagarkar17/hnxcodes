import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        batman: {
          black: "#0a0a0a",
          "dark-gray": "#1a1a1a",
          "medium-gray": "#2a2a2a",
          "light-gray": "#3a3a3a",
          red: "#8b1538",
          "red-dark": "#6b1028",
          "red-light": "#a01d45",
          gold: "#d4af37",
        },
        neon: {
          green: "#00ff88", // Keep for some accent elements
          yellow: "#d4af37", // Batman gold
          blue: "#4a5568", // Muted blue-gray
          red: "#8b1538", // Batman red
        },
        grid: {
          line: "rgba(255, 255, 255, 0.02)",
          dot: "rgba(139, 21, 56, 0.1)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #8b1538, 0 0 10px #8b1538, 0 0 15px #8b1538",
          },
          "50%": {
            boxShadow: "0 0 10px #8b1538, 0 0 20px #8b1538, 0 0 30px #8b1538",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        "fade-in": "fade-in 0.6s ease-out",
      },
      backgroundImage: {
        "grid-pattern": `
					linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
					linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)
				`,
      },
      backgroundSize: {
        grid: "20px 20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
