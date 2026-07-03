/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury palette
        champagne: {
          50: "#FBF6EF",
          100: "#F5E9D7",
          200: "#EAD2AE",
          300: "#DFBA85",
          400: "#D4A35C",
          500: "#C98C33", // Champagne Gold
          600: "#A87129",
          700: "#87561F",
          800: "#663B15",
          900: "#45200B",
        },
        rose: {
          gold: "#E0BFB8", // Soft Rose Gold
          deep: "#C9A6A0",
        },
        pearl: {
          50: "#FFFFFF",
          100: "#FDFBFA",
          200: "#F7F3F1",
          300: "#EFE9E6",
        },
        charcoal: {
          DEFAULT: "#2B2420",
          light: "#4A413B",
          plum: "#3D2B33", // Deep Plum
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        arabic: ["var(--font-tajawal)", "Tajawal", "Cairo", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(43, 36, 32, 0.15)",
        glow: "0 0 30px rgba(201, 140, 51, 0.35)",
        "glow-rose": "0 0 30px rgba(224, 191, 184, 0.45)",
        card: "0 20px 60px -20px rgba(43, 36, 32, 0.25)",
      },
      backgroundImage: {
        "gradient-luxury":
          "linear-gradient(135deg, #FBF6EF 0%, #F7F3F1 50%, #FDFBFA 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #D4A35C 0%, #C98C33 50%, #E0BFB8 100%)",
        "gradient-charcoal":
          "linear-gradient(135deg, #2B2420 0%, #3D2B33 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [
    // RTL variant: use `rtl:` to apply styles only when dir="rtl"
    function ({ addVariant }) {
      addVariant("rtl", "&:where([dir='rtl'], [dir='rtl'] *)");
    },
  ],
};
