import {
  Box, Button, Center, Divider, Flex, Grid, IconButton, Image, Text, useColorModeValue, VStack
} from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import React, { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import useCartData from "../../../hooks/useCartData";
import PriceTag from "../Price";

export type ProductCardProps = {
  product: DocumentData;
};

const ProductDetail: React.FC<ProductCardProps> = ({ product }) => {
  const bgBox = useColorModeValue("white", "gray.700");

  const [selectedSize, setSelectedSize] = useState<{
    label: string;
    value: string;
  }>();

  useEffect(() => {
    setSelectedSize(product.size[0]);
  }, [product.size]);

  const { addOrIncrementProduct } = useCartData();

  return (
    <Center>
      <VStack w={{ sm: "80%", lg: "70%" }} bg={bgBox}>
        <Box>
          <Flex flexDirection={"column"}>
            {/* IMAGE */}
            <Flex flexDirection={{ base: "column", md: "row" }}>
              <Image
                src={product?.images[0]}
                alt={product?.name}
                width={{ base: "100%", md: "50%" }}
                height={"100%"}
                style={{
                  objectFit: "cover",
                  height: "50%",
                }}
              />
              <Grid templateColumns="repeat(1, 1fr)" w={"100%"}>
                <Box>
                  <Text
                    mt={"4rem"}
                    ml={"1.5rem"}
                    fontSize={{
                      base: "3xl",
                      md: "4xl",
                      lg: "5xl",
                    }}>
                    {product?.name}
                  </Text>
                </Box>

                <Box>
                  <Text
                    mb={"1rem"}
                    ml={"1.5rem"}
                    fontWeight={"light"}
                    fontSize={{
                      md: "xs",
                      lg: "md",
                      xl: "lg",
                    }}>
                    {`Product ID: ${product?.id}`}
                  </Text>
                </Box>
                <Divider />

                <Text ml={"2rem"} mt={"1.5rem"} fontSize={"5xl"}>
                  <PriceTag price={product?.price} />
                </Text>

                <Box ml={"1.5rem"}>
                  <Text
                    fontWeight={"bold"}
                    fontSize={{
                      md: "xs",
                      lg: "md",
                      xl: "lg",
                    }}>
                    Sizes:
                  </Text>
                  <Flex
                    flexDirection={"row"}
                    gap={3}
                    mt={2}
                    mb={2}
                    flexWrap={"wrap"}>
                    {product?.size.map(
                      (
                        size: { value: string; label: string },
                        index: number
                      ) => {
                        return (
                          <Flex flexDirection={"row"} key={index}>
                            <Button
                              borderRadius="full"
                              p={2}
                              colorScheme="purple"
                              size="sm"
                              onClick={() => setSelectedSize(size)}
                              bg={
                                selectedSize === size
                                  ? "purple.500"
                                  : "gray.200"
                              }>
                              {size.value}
                            </Button>
                          </Flex>
                        );
                      }
                    )}
                  </Flex>
                </Box>
                <Divider />

                <Flex
                  flexDirection={"row"}
                  w={"100%"}
                  justifyContent={"space-between"}>
                  <IconButton
                    mt={"1rem"}
                    mx={"1rem"}
                    isRound={true}
                    colorScheme="purple"
                    bg={"gray.200"}
                    size="lg"
                    aria-label="AddToWishlist"
                    icon={<MdFavoriteBorder />}
                  />
                  <Button
                    mt={"1rem"}
                    mr={"1rem"}
                    colorScheme="purple"
                    size="lg"
                    width={"100%"}
                    onClick={() => addOrIncrementProduct(product, selectedSize)}>
                    Add to cart
                  </Button>
                </Flex>
              </Grid>
            </Flex>

            <Box
              mt={"2rem"}
              ml={"1.5rem"}
              mr={"1.5rem"}
              mb={"2rem"}
              fontSize={{
                md: "md",
                lg: "lg",
                xl: "xl",
              }}>
              <Text fontWeight={"bold"}>Description:</Text>
              <Text mt={"1rem"} fontWeight={"light"}>
                {product?.description}
              </Text>
              <Text mt={"1rem"} fontWeight={"bold"}>
                Color:
              </Text>
              {/* <Text mt={"1rem"} fontWeight={"light"}>
                {product?.metadata.Color}
              </Text>
              <Text mt={"1rem"} fontWeight={"bold"}>
                Material:
              </Text>
              <Text mt={"1rem"} fontWeight={"light"}>
                {product?.metadata.Material}
              </Text>
              <Text mt={"1rem"} fontWeight={"bold"}>
                Gender:
              </Text>
              <Text mt={"1rem"} fontWeight={"light"}>
                {product?.metadata.Gender}
              </Text>
              <Text mt={"1rem"} fontWeight={"bold"}>
                Fit:
              </Text>
              <Text mt={"1rem"} fontWeight={"light"}>
                {product?.metadata.Fit}
              </Text> */}
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Center>
  );
};

export default ProductDetail;
