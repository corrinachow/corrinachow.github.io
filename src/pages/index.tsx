import React from "react";

import About from "../components/about";
import Layout from "../components/layout";
import Projects from "../components/projects";

const IndexPage = (): JSX.Element => (
  <Layout>
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
