import React from "react";

import logo from "./enlightLogo.png";
import DataChart from "../components/datachart";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Table from "../components/table";
import Stats from "../components/stats";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      
      
      <div className="text-center place-content-center">
        <div className="w-1/4 h-24 m-auto">
          <img src={logo}></img>
        </div>
        <div className ="m-auto font-sans">
        <Table />
        </div>
        <div>
          <Stats />
        </div>
        <div>
          <DataChart />
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
