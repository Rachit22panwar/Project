import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';
import Body from "./Body"
const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        <Body />
        {children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Resume Builder",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
};

export default Layout;