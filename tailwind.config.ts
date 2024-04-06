import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme")

const config : Config = {

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens:{
      'xs':'350px',
      'l':'540px',
      ...defaultTheme.screens,
  }
    
  },
};

export default config;
