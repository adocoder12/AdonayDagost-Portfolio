/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        colorText: "var(--text)",
        muted: "var(--color-muted)",
        decorator: "var(--decorator)",

        // Functional Colors
        success: "var(--color-success)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        info: "var(--color-info)",

        // Neutral Palette
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        black: {
          DEFAULT: "var(--color-black)",
          "02": "var(--color-black02)",
          "03": "var(--color-black03)",
        },
        white: {
          DEFAULT: "var(--color-white)",
          "02": "var(--color-white02)",
          "03": "var(--color-white03)",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        regular: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
        extrabold: "var(--font-weight-extrabold)",
      },
      fontSize: {
        // [fontSize, lineHeight]
        h1: ["var(--fs-h1)", "var(--lh-h1)"],
        h2: ["var(--fs-h2)", "var(--lh-h2)"],
        h3: ["var(--fs-h3)", "var(--lh-h3)"],
        h4: ["var(--fs-h4)", "var(--lh-h4)"],
        h5: ["var(--fs-h5)", "var(--lh-h5)"],
        h6: ["var(--fs-h6)", "var(--lh-h6)"],
        body: ["var(--fs-body)", "var(--lh-body)"],
        small: ["var(--fs-small)", "var(--lh-small)"],
        somep: ["var(--fs-somep)", "1.2"], // Fallback line-height as requested
      },
    },
  },
  plugins: [],
};
