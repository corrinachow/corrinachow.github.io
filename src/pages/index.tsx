import { Link } from "gatsby";
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
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </WindowDimensionsProvider>
);

export default IndexPage;
