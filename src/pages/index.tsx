import React from "react";

import About from "../components/about";
import Layout from "../components/layout";
import Projects from "../components/projects";
import WindowDimensionsProvider from "../components/WindowDimensionsProvider/WindowsDimensionsProvider";

const IndexPage = () => (
  <WindowDimensionsProvider>
    <Layout>
      <About />
      <Projects />
    </Layout>
  </WindowDimensionsProvider>
);

export default IndexPage;
