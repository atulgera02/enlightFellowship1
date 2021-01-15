import React from "react";
import logo from "./enlightLogo.png";
import Welcome from "../components/welcome";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-1/4 h-24 m-auto">
        <img src={logo}></img>
      </div>
      <Welcome />
    </Layout>
  );
}

export default IndexPage;
