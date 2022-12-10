import { Center, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "../Products/index";
import { DocumentData } from "firebase/firestore";
import useProductsData from "../../hooks/useProductsData";
type productComponentProps = {
  filterByURL: string | undefined;
};
const ProductsComponent: React.FC<productComponentProps> = ({
  filterByURL,
}) => {
  const { MappingProducts } = useProductsData();
  const Products = MappingProducts(filterByURL);
  return (
    <Center maxW={"100%"}>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="40px">
        {Products.map((product: DocumentData) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </SimpleGrid>
    </Center>
  );
};

export default ProductsComponent;
