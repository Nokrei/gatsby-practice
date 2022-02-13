import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Made this with Gatsby... duh</p>
      <StaticImage
        alt="Curious kitty"
        src="../images/kitty.jpg"
        placeholder="blurred"
      />
    </Layout>
  );
};

export default IndexPage;
