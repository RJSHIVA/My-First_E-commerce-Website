import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

import  { Toaster } from 'react-hot-toast';



const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div >
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "135vh",background: 'linear-gradient(45deg, #00b4d8, #caf0f8, #90e0ef)',
  width: 'auto',
  height:'auto' }}>
       
        <Toaster/>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Choudhary-Bazaar-Shop Now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Rahul Choudhary",
};

export default Layout;