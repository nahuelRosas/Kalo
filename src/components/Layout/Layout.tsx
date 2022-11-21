import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import Directory from "../Directory";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Directory />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
