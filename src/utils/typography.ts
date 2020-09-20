import Typography from "typography";

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Inter", "sans-serif"],
  headerWeight: 500,
  bodyFontFamily: ["Inconsolata", "monospace"],
  includeNormalize: true,
  googleFonts: [
    {
      name: "Inconsolata",
      styles: ["400,500"]
    }
  ]
});
export default typography;
