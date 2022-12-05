import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import Directory from "../Directory/index";
import useProductsData from "../../hooks/useProductsData";
import useUserData from "../../hooks/useUserData";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { getProducts } = useProductsData();
  const { getUserData } = useUserData();
  useEffect(() => {
    getProducts();
    getUserData();
  }, [getProducts, getUserData]);

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
