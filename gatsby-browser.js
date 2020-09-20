import React from "react";
import { ThemeProvider } from "./src/Context/ThemeContext.tsx";
import "./src/styles/flexboxgrid.css";
import "./src/styles/global.css";
require("prismjs/themes/prism-okaidia.css");

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <>{element}</>
    </ThemeProvider>
  );
};
