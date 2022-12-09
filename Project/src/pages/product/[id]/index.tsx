import React from "react";
import { useRouter } from "next/router";
import { DocumentData } from "@firebase/firestore-types";
import useProductsData from "../../../hooks/useProductsData";
import ProductDetail from "../../../components/Products/ProductDetail/ProductDetail";
import { Center, Flex, Spinner, useColorModeValue } from "@chakra-ui/react";

type ProductDetailsProps = {
  product: DocumentData;
};

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const bg = useColorModeValue("white", "gray.800");
  const router = useRouter();
  const { id } = router.query;
  const { findProduct } = useProductsData();
  const Product = findProduct(id as string);

  if (!Product)
    return (
      <Center h="100vh" bg={bg}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
          size="xl"
        />
      </Center>
    );

  return (
    <Flex>
      <ProductDetail product={Product} />
    </Flex>
  );
};
export default ProductDetails;
