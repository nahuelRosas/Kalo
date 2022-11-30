import React from "react";
import { products } from "../utils/products";
import { Text, Box, Image, Flex, SimpleGrid } from "@chakra-ui/react";
// import Image from 'next/image';
import ProductsC from "../components/AllProducts/Products";
import SideBar from "../components/AllProducts/SideBar";

// type productListProps = {};

const AllProducts: React.FC /* <productListProps> */ = () => {
  return (
    <Flex>
      <SideBar />
      <ProductsC />
    </Flex>
  );
};
export default AllProducts;
