/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useProductsData from "../../../hooks/useProductsData";
import PriceTag from "../Price";

type ProductCardProps = {
  id: any;
};

const ProductDetailComponent: React.FC<ProductCardProps> = ({ id }) => {
  const { productsActive } = useProductsData();

  return (
    <Center>
      {" "}
      <VStack bg={useColorModeValue("gray.50", "gray.700")}>
        {" "}
        <Box>
          <Heading>
            {productsActive.map((product, index) => {
              if (product.id === id) {
                return (
                  <Flex key={index}>
                    <Box>
                      <Text
                        fontWeight="bold"
                        fontSize="lg"
                        overflowY={"hidden"}
                        textOverflow="ellipsis"
                        h={"1.5rem"}>
                        {product?.name}
                      </Text>
                      <Image
                        src={product?.images[0]}
                        alt={product?.name}
                        width={90}
                        height={90}
                        style={{
                          objectFit: "cover",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <PriceTag
                        price={product?.prices[0].unit_amount}
                        currency={product?.prices[0].currency}
                      />
                    </Box>
                  </Flex>
                );
              }
            })}
          </Heading>
        </Box>
      </VStack>
    </Center>
  );
};

export default ProductDetailComponent;
