import { Container, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container
      maxW="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      color={useColorModeValue("grey.100", "grey.800")}
      bg={useColorModeValue("gray.100", "grey.800")}
      alignItems="center"
      mb="1rem">
      <Banner />
      <Products />
      {/* <Categories />
      <Carousel text="Based on your latest searches" name="productList" />
      <Carousel text="For Sale" name="productList" /> */}
    </Container>
  );
}
