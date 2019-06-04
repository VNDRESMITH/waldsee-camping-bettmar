module.exports = {
  theme: {
    fontFamily: {
      sans: ["Amiri"],
      handwriting: ["Indie Flower"]
    },
    colors: {
      transparent: "transparent",
      green: {
        100: "#f0fff4",
        200: "#9dc485",
        300: "#79B754"
      },
      gray: {
        50: "rgba(0, 0, 0, 0.8)",
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c"
      },
      blue: {
        100: "#ebf8ff",
        200: "#bee3f8",
        300: "#90cdf4",
        400: "#63b3ed",
        500: "#4299e1",
        600: "#3182ce",
        700: "#2b6cb0",
        800: "#2c5282",
        900: "#2a4365"
      },
      dark: {
        100: "#4C4C4C"
      }
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      lg: "0.5rem",
      full: "9999px",
      large: "2rem"
    },
    opacity: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "95": "0.95",
      "100": "1"
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".flex-0-auto": {
          flex: "0 0 auto"
        },
        ".max-h-80": {
          "max-height": "80%"
        }
      };

      addUtilities(newUtilities);
    }
  ]
};
