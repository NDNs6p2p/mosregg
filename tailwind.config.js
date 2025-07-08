/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./storybook/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "rgba(69, 140, 255, 1)",
      lightBlue: "rgba(69, 140, 255, 0.08)",
      blueHover: "rgba(69, 140, 255, 0.9)",
      black: "rgba(9, 14, 29, 1)",
      black2: "rgba(9, 14, 29, 0.88)",
      grey: "rgba(9, 14, 29, 0.6)",
      grey2: "rgba(9, 14, 29, 0.4)",
      grey3: "rgba(225, 226, 228, 1)",
      grey4: "rgba(245, 245, 246, 1)",
      "text/disabled": "rgb(157,159,165)",
      "text/secondary": "rgb(107,110,119)",
      disabled: "rgb(235,236,237)",
      white: "rgba(255, 255, 255, 1)",
      accent: "rgba(69, 140, 255, 1)",
      "accent-subhead": "rgba(69, 140, 255, 0.08)",
      "bg-accent-subdued": "rgba(238, 246, 255, 1)",
      "bg/success": "rgb(219, 253, 233)",
      green: "#13A654",
      "success-on-color": "#14673A",
      "success-subdued": "rgb(219,253,233)",
      red: "#FA4D5E",
      alert: "rgb(179,79,10)",
      "bg/alert": "rgb(254, 242, 199)",
      blueOld: "rgb(69, 140, 255)",
      teal: "rgb(8,180,189)",
      tealActive: "rgb(107, 210, 215)",
      yellowOld2: "rgb(250,182,25)",
      pink: "rgb(255,69,173)",
      purple: "rgb(168,107,255)",
      orangeRed: "rgb(255,106,51)",
      inherit: "inherit",
      // Тут можно добавлять необходимые цвета, называйте абстрактно, а лучше как в дизайне
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "700px",
      lg: "1024px",
      xl: "1060px",
      "2xl": "1360px",
    },
    container: {
      center: true,
      screens: {
        sm: "360px",
        md: "700px",
        lg: "1024px",
        "2xl": "1360px",
      },
      // padding: '1rem'
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        headerH3: ["28px", "32px"],
      },
      screens: {
        phone: { max: "699px" },
        tablet: { min: "700px", max: "1059px" },
        laptop: { min: "1060px", max: "1359px" },
        "min-tablet": { min: "700px" },
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
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
        x8: "2rem",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-motion"),
  ],
}
