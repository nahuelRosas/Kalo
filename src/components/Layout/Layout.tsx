import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import Directory from "../Directory/index";
import { useRecoilState } from "recoil";
import { ProductsAtom } from "../../atoms/productsAtom";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  // const [products, setProducts] = useRecoilState(ProductsAtom);
  // if (products.isLoadead === false) {
  //   getProducts();
  //   setProducts({ ...products, isLoadead: true });
  // }

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
