import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ─ Core ─ */
        background: "var(--background)",
        "background-pure": "var(--background-pure)",
        "background-alt": "var(--background-alt)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        "foreground-subtle": "var(--foreground-subtle)",

        /* ─ Accent ─ */
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",

        /* ─ Brand Teal ─ */
        teal: "var(--teal)",
        "teal-light": "var(--teal-light)",
        "teal-muted": "var(--teal-muted)",

        /* ─ Border ─ */
        border: "var(--border)",
        "border-strong": "var(--border-strong)",

        /* ─ Dark sections ─ */
        "dark-bg": "var(--dark-bg)",
        "dark-fg": "var(--dark-fg)",
      },

      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
        mono: ["'DM Mono'", "monospace"],
      },

      letterSpacing: {
        wide: "0.22em",
        wider: "0.28em",
        heading: "-0.03em",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },

      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
      },

      spacing: {
        section: "var(--section-padding)",
        "section-sm": "var(--section-padding-sm)",
      },
    },
  },
  plugins: [],
};

export default config;