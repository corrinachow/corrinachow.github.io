const themes = {
  lightTheme: {
    bg: "white",
    bgDark: "pink",
    color: "black",
    accent: "blue"
  },
  darkTheme: {
    bg: "#2c1320",
    bgDark: "#15090f",
    color: "white",
    accent: "#ef86a9"
  }
};

export default themes;

export type Themes = typeof themes[keyof typeof themes];
