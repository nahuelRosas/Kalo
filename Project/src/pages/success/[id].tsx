import React, { useState } from "react";
import { useRouter } from "next/router";
import useCartData from "../../hooks/useCartData";
import useUserData from "../../hooks/useUserData";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Icon,
  IconButton,
  Image,
  Spinner,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import FormatPrice from "../../components/Products/Price/formatPrice";
import { Heading } from "@chakra-ui/react";

type SuccessProps = {};

const Success: React.FC<SuccessProps> = () => {
  const ProductTest = [
    {
      active: true,
      name: "Puma Karmen Exotics",
      description:
        "The Puma Karmen Exotics Sneakers are urban, sporty and feminine. They are made of leather and have a rubber sole. They have a lace-up closure and a padded tongue and collar. They have a Puma logo on the tongue and on the side. They have a Puma logo on the tongue and on the side.",
      brand: "Puma",

      images: [
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwddf9c570/products/PU_389022-02/PU_389022-02-2.JPG",
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1c598d0b/products/PU_389022-02/PU_389022-02-1.JPG",
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4adcd2c6/products/PU_389022-02/PU_389022-02-3.JPG",
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw41f2e969/products/PU_389022-02/PU_389022-02-4.JPG",
      ],
      unitofmeasurement: {
        label: "ARG",
        value: "ARG",
      },
      subType: [
        { size: { value: "ARG 36.5", label: "ARG 36.5" }, stock: 10 },
        { size: { value: "ARG 37", label: "ARG 37" }, stock: 10 },
        { size: { value: "ARG 37.5", label: "ARG 37.5" }, stock: 10 },
        { size: { value: "ARG 38", label: "ARG 38" }, stock: 10 },
        { size: { value: "ARG 38.5", label: "ARG 38.5" }, stock: 10 },
        { size: { value: "ARG 39", label: "ARG 39" }, stock: 10 },
      ],

      price: 23.0,
      rating: 4.5,
      numReviews: 1,
      reviews: [
        {
          name: "Ani",
          rating: 5,
          comment: "LOVE!! I will definitely buy more",
        },
      ],

      color: "White",
      genres: { value: "Women", label: "Women" },
      agegroup: { value: "Adult", label: "Adult" },
      exteriormaterials: "synthetic",
      solematerials: "Rubber",
      fittype: "Regular",
      recommendedsport: "Running",
      style: "casual",
      discount: 0,
    },
    {
      active: true,
      name: "Nike Court Vision Lo Vday",
      images: [
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw42b16ddd/products/NI_DJ9297-100/NI_DJ9297-100-1.JPG",
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwce9303e4/products/NI_DJ9297-100/NI_DJ9297-100-2.JPG",
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw05346929/products/NI_DJ9297-100/NI_DJ9297-100-3.JPG",
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7d5e4732/products/NI_DJ9297-100/NI_DJ9297-100-4.JPG",
      ],
      description:
        "The Nike Court Vision Lo Vday Sneakers invade you in style thanks to its canvas upper with cutouts that create a unique look for all your plans. Its floral print fills you with energy and gives you a springtime feel that never fails to remind you of your love for basketball that's currently moving to the city. It features a foam midsole to ensure your cushioning with every step, while the rubber outsole creates unique traction wherever you go.",
      brand: "Nike",

      price: 25.0,
      rating: 4,
      numReviews: 3,

      reviews: [
        {
          name: "A",
          rating: 5,
          comment: "I love the design, very comfortable",
        },
        {
          name: "B",
          rating: 4,
          comment: "I love the design, very comfortable",
        },
        {
          name: "C",
          rating: 4,
          comment: "I love the design, very comfortable",
        },
      ],

      color: "Beige",
      genres: { value: "Women", label: "Women" },
      agegroup: { value: "Adult", label: "Adult" },
      exteriormaterials: "leather",
      solematerials: "Rubber",
      fittype: "Laced",
      recommendedsport: "Other",
      style: "casual",
      discount: 0,
      subType: [
        { size: { value: "ARG 36.5", label: "ARG 36.5" }, stock: 10 },
        { size: { value: "ARG 37", label: "ARG 37" }, stock: 10 },
        { size: { value: "ARG 37.5", label: "ARG 37.5" }, stock: 10 },
        { size: { value: "ARG 38", label: "ARG 38" }, stock: 10 },
      ],
      unitofmeasurement: {
        label: "ARG",
        value: "ARG",
      },
    },
  ];

  const router = useRouter();
  const { userData } = useUserData();
  const { id } = router.query;
  console.log(userData);
  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <Center
      w="100%"
      bg={bg}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      shadow={"dark-lg"}
    >
      <Flex flexDirection={"column"}>
        <Heading mx={4}>Order Details</Heading>
        <Flex flexDirection={"row"} m={2}>
          <Box mx={4}>Orderer on December 27, 2020 //Created At ||</Box>
          <Box>Order ID: {id}</Box>
        </Flex>
      </Flex>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={3}
        justifyContent={"space-between"}
        borderRadius={"md"}
        shadow="md"
      >
        <Box m={4} p={5}>
          <Text fontSize={"xl"}>Shipping Address</Text>
          <Text>{/* {userData?.name} */} Ignacio Calas</Text>
          <Text>{/* {userData?.address} */} Calle Falsa 123</Text>
          <Text>{/* {userData?.city} */} Cordoba</Text>
          <Text>{/* {userData?.country} */}</Text>
          <Text>{/* userData?.postalCode} */}</Text>
        </Box>
        <Box m={4} p={5}>
          <Text>Order Summary</Text>
          <Text fontSize={"xl"}>Payment Method</Text>
          <Text>PayPal</Text>
          <Text fontSize={"xl"}>Item Total</Text>
          <Text>$25.00</Text>
        </Box>
      </Grid>

      {ProductTest.map((product) => (
        <>
          <Flex flexDirection={"column"}>
              <Box m="2" p={5} shadow="md" bg={bg} borderRadius={"md"}>
                <Grid templateColumns="repeat(2, 1fr)">
                  <Image
                    src={product.images[0]}
                    borderRadius="md"
                    alt="product"
                    maxHeight={{ base: "5rem", md: "7rem" }}
                    mt={{ base: "8", md: "none" }}
                    fallback={
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="purple.500"
                        size="xl"
                        maxHeight={{ base: "5rem", md: "7rem" }}
                        mt={{ base: "12", md: "none" }}
                        ml={{ base: "10", md: "none" }}
                      />
                    }
                  />
                  <Flex
                    justifyContent={"flex-start"}
                    ml={-150}
                    direction="column"
                  >
                    <Text
                      fontWeight="semibold"
                      mt={{ base: "1", md: "none" }}
                      fontSize={{ base: "sm", md: "lg" }}
                      color={"gray.500"}
                    >
                      {product.name} - {product.subType[0].size.label}
                    </Text>

                    <Flex justifyContent={"flex-end"}>
                      <Text
                        fontWeight="semibold"
                        mt={{ base: "6", md: "none" }}
                      >
                        Price: {FormatPrice({ value: product.price })}
                      </Text>
                    </Flex>
                  </Flex>
                </Grid>
                <Divider />
              </Box>

          </Flex>
        </>
      ))}
    </Center>
  );
};
export default Success;
