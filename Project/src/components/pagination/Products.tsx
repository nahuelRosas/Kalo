import { Center, SimpleGrid } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import React from "react";
import useProductsData from "../../hooks/useProductsData";
import ProductCard from "../Products/ProductCard/productCard";

const ProductsComponent: React.FC = () => {
  const { MappingProducts } = useProductsData();
  const Products = MappingProducts();
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
