import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "::selection": {
      color: "black",
      backgroundColor: "white",
    },
    "::-moz-selection": {
      color: "black",
      backgroundColor: "white",
    },
    "html, body": {},
  },
  cssVarsPrefix: "ns",
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1216px",
      "2xl": "1440px",
    },
    tokens: {
      colors: {
        primary: {
          main: { value: "#EE3965" },
        },
        error: {
          light: { value: "#D32F2F" },
          dark: { value: "#F44336" },
        },
        grey: {
          400: { value: "#BDBDBD" },
          600: { value: "#757575" },
        },
        common: {
          black: { value: "#000000" },
          white: { value: "#FFFFFF" },
        },
        dark: {
          text: {
            primary: { value: "#FFFFFF" },
            secondary: { value: "rgba(255, 255, 255, 0.7)" },
          },
          background: {
            default: { value: "#131313" },
          },
        },
        additional: {
          blue: { value: "#2BA1DA" },
          purple: { value: "#8C6E7D" },
          darkGrey: { value: "#292929" },
        },
        gradient: {
          thumb: {
            value:
              "linear-gradient(0deg, #000000, #000000), linear-gradient(107.54deg, rgba(255, 255, 255, 0.1) -0.03%, rgba(0, 0, 0, 0) 99.99%)",
          },
        },
      },
      fonts: {
        inter: { value: "Inter, sans-serif" },
        nunito: { value: "Nunito Sans, sans-serif" },
      },
    },
    textStyles: {
      "header-link": {
        description: "header link",
        value: {
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0",
        },
      },
      "body-01": {
        description: "body 01",
        value: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "0.15px",
        },
        verticalAlign: "bottom",
      },
      "body-02": {
        description: "body 02",
        value: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "143%",
          letterSpacing: "0.17px",
        },
      },
      "heading-h4": {
        description: "heading 4",
        value: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "34px",
          lineHeight: "124%",
          letterSpacing: "0px",
        },
      },
      "heading-h5": {
        description: "heading 5",
        value: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "133%",
          letterSpacing: "0px",
        },
      },
      "heading-h6": {
        description: "heading 6",
        value: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "160%",
          letterSpacing: "0px",
        },
      },
      "heading-h7": {
        description: "heading 7",
        value: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "140%",
          letterSpacing: "0px",
        },
      },
      "button-large-desktop": {
        description: "button large desktop",
        value: {
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "26px",
          letterSpacing: "0px",
        },
      },
      "button-large-mobile": {
        description: "button large mobile",
        value: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "26px",
          letterSpacing: "0px",
        },
      },
      "button-small": {
        description: "button small",
        value: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "22px",
          letterSpacing: "0px",
        },
      },
      subtitle: {
        description: "subtitle",
        value: {
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "175%",
          letterSpacing: "0.15px",
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export { system };
