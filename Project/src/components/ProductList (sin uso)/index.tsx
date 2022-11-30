import React from "react";
import useProductsData from "../../hooks/useProductsData";
import ProductCard from "../Products/index";
import { Flex, SimpleGrid } from "@chakra-ui/react";

type ProductListType = {
  // type: string;
};

const ProductList: React.FC<ProductListType> = () => {
  const { productsActive } = useProductsData();

  return (
    <Flex margin={"auto"}>
      <SimpleGrid
        columns={{ base: 2, sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        margin={"auto"}
        boxSize={"90%"}
      >
        {productsActive.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
export default ProductList;

