import {
  Center,
  useColorModeValue,
  Spinner,
  VStack,
  Flex,
  Box,
  Heading,
  Text,
  Grid,
  Divider,
  Button,
  IconButton,
  useToast,
  Image,
} from "@chakra-ui/react";
import React from "react";
import useProductsData from "../../../hooks/useProductsData";
/* import Image from "next/image"; */
import Carousel from "../../Carousel";
import PriceTag from "../Price";
import { MdFavoriteBorder } from "react-icons/md";
import Sizes from "./Sizes";
import { DocumentData } from "@firebase/firestore-types";
import ProductCard from "..";
import { addToCart, cartState } from "../../../atoms/cartItemAtom";
import { useRecoilState } from "recoil";
/* import settings from "../../../"; */
export type ProductCardProps = {
  id: any;
  product: DocumentData;
};

const ProductDetail: React.FC<ProductCardProps> = ({ id, product }) => {

  const toast = useToast();
  const bg = useColorModeValue("white", "gray.800");
  const bgBox = useColorModeValue("white", "gray.700");
  const bgFlex = useColorModeValue("gray.50", "gray.800");
  const colorHeading = useColorModeValue("gray.900", "white");
  const [image, setImage] = React.useState(
    product?.images[0] ? product?.images[0] : ""
  );
  const sizesNumber = [ 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46 ];
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddToCart = (item: any) => {
    const newCart = addToCart(cart, product);
    setCart(newCart as never[]);
    toast({
      title: "Added to cart",
      description: "We've added the item to your cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  if (!product)
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
                {/* NOMBRE PRODUCTO */}
                <Box>
                  <Text
                    mt={"4rem"}
                    ml={"1.5rem"}
                    fontSize={{
                      base: "3xl",
                      md: "4xl",
                      lg: "5xl",
                    }}
                  >
                    {product?.name}
                  </Text>
                </Box>

                {/* NUMERO DE ID */}
                <Box>
                  <Text
                    mb={"1rem"}
                    ml={"1.5rem"}
                    fontWeight={"light"}
                    fontSize={{
                      md: "xs",
                      lg: "md",
                      xl: "lg",
                    }}
                  >
                    {`Product ID: ${product?.id}`}
                  </Text>
                </Box>
                <Divider />

                {/* PRECIO */}
                <Text ml={"2rem"} mt={"1.5rem"} fontSize={"5xl"}>
                  <PriceTag
                    price={product?.prices[0].unit_amount}
                    currency={product?.prices[0].currency}
                  />
                </Text>

                {/* TALLAS */}
                <Box ml={"1.5rem"}>
                  <Text
                    fontWeight={"bold"}
                    fontSize={{
                      md: "xs",
                      lg: "md",
                      xl: "lg",
                    }}
                  >
                    Sizes:
                  </Text>
                  <Flex
                    flexDirection={"row"}
                    gap={3}
                    mt={2}
                    mb={2}
                    flexWrap={"wrap"}
                  >
                    {sizesNumber.map((size, index) => {
                      return (
                        <Sizes
                          sizesNumber={size}
                          key={index}
                          size={0}
                          setSize={function (): void {
                            throw new Error("Function not implemented.");
                          }}
                        />
                      );
                    }, [])}
                  </Flex>
                </Box>
                <Divider />

                {/* BOTONERA */}
                <Flex
                  flexDirection={"row"}
                  w={"100%"}

                  justifyContent={"space-between"}
                >
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
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                </Flex>
              </Grid>
            </Flex>

            {/* DESCRIPCION */}
            <Box
              mt={"2rem"}
              ml={"1.5rem"}
              mr={"1.5rem"}
              mb={"2rem"}
              fontSize={{
                md: "md",
                lg: "lg",
                xl: "xl",
              }}
            >
              <Text fontWeight={"bold"}>Description:</Text>
              <Text mt={"1rem"} fontWeight={"light"}>
                {product?.description}
              </Text>
              <Text mt={"1rem"} fontWeight={"bold"}>
                Color:
              </Text>
              <Text mt={"1rem"} fontWeight={"light"}>
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
              </Text>
            </Box>
          </Flex>
          {/* );
            }
          })} */}
        </Box>

    {/*     <Carousel
          settings={settings}
          carouselProps={{
            display: { base: "none", md: "flex" },
            mt: "1rem",
            mb: "5rem",
            h: "80%",
          }}
        >
          {productsActive.map((product: DocumentData, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </Carousel> */}
      </VStack>
    </Center>
  );
};


export default ProductDetail;