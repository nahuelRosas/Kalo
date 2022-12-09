import {
  Container
} from "@chakra-ui/react";
import React from "react";
import CreateProducts from "../utils/products";

const ProductsDashBoard = () => {
  const [state, setState] = React.useState(true);
  try {
    if (state === false) return;
    CreateProducts();
    setState(false);
  } catch (e) {
    console.log(e);
  }

  return <Container maxW="container.xl"></Container>;
};

export default ProductsDashBoard;
