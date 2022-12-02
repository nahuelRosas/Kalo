import React from "react";
import { Flex } from "@chakra-ui/react";
// import Image from 'next/image';
import ProductsC from "../../components/AllProducts/Products";
import SideBar from "../../components/AllProducts/SideBar";

// type productListProps = {};

const category: React.FC /* <productListProps> */ = () => {
  return (
    <Flex>
      <SideBar />
      <ProductsC />
    </Flex>
  );
};
export default category;
