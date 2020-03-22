import React from "react";

import About from "../components/About";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const IndexPage = (): JSX.Element => (
  <Layout>
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
