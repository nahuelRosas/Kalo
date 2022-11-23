import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import Directory from "../Directory/index";
import useProductsData from "../../hooks/useProductsData";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { getProducts } = useProductsData();
  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
