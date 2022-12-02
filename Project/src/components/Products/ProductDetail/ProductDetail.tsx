import React from "react";
import {
  Box,
  VStack,
  Heading,
  useColorModeValue,
  Center,
  Text,
  Image,
  Flex,
  Divider,
  Grid,
  Button,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import useProductsData from "../../../hooks/useProductsData";
import PriceTag from "../Price";
//import MobileCategories from "../../Navbar/Categories/MobileCategories/index";
import Sizes from "./Sizes";
import { MdFavoriteBorder } from "react-icons/md";
//import Carousel from "../../Carousel/index";
import { DocumentData } from "@firebase/firestore-types";
import { cartState, ItemCart } from "../../../atoms/cartItemAtom";
import { useRecoilState } from "recoil";
import ProductCard from "..";
import Carousel from "../../Carousel";

type ProductCardProps = {
  id: any;
  product: DocumentData;
};

const ProductDetailComponent: React.FC<ProductCardProps> = ({
  id,
  product,
}) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const toast = useToast();

  const { productsActive } = useProductsData();

  const sizesNumber = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

  const handleClick = () => {
    if (!cartItems.includes(product as ItemCart)) {
      setCartItems((prevState: any) => [...prevState, product]);
      toast({
        title: "Item added",
        description: "product was added to your cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Item already exists",
        description: "the selected product already exists in your cart",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Center>
      <VStack
        w={{ sm: "80%", lg: "70%" }}
        bg={useColorModeValue("white", "gray.700")}
      >
        <Box>
          <Heading>
            {productsActive.map((product: any) => {
              if (product.id === id) {
                return (
                  <>
                    {/* IMAGE */}
                    <Flex flexDirection={"row"}>
                      <Image
                        src={product?.images[0]}
                        alt={product?.name}
                        width={"100%"}
                        height={"100%"}
                        style={{
                          objectFit: "cover",
                          width: "50%",
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
                            {sizesNumber.map((size) => {
                              return (
                                <Sizes
                                  sizesNumber={size}
                                  key={size}
                                  size={0}
                                  setSize={function (): void {
                                    throw new Error(
                                      "Function not implemented."
                                    );
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
                            onClick={handleClick}
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

                    {/* Carousel */}
                  </>
                );
              }
            })}
          </Heading>
        </Box>
            <Carousel
              settings={settings}
              carouselProps={{
                mt: "1rem",
                mb: "5rem",
                h: "80%",
              }}
            >
              {productsActive.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Carousel>
      </VStack>
    </Center>
  );
};

export default ProductDetailComponent;
