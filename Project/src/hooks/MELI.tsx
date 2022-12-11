export async function payCartProducts(paymentMethod: string) {
  // if (paymentMethod === "1") {
  //   const carryProductsToMap = cartItems.map((element: any) => {
  //     const newProduct = {
  //       title: element.name,
  //       unit_price: element.price,
  //       price: element.price,
  //       quantity: element.quantity,
  //       id: element.id,
  //     };
  //     return newProduct;
  //   });
  //   const response = await fetch(
  //     "https://api.mercadopago.com/checkout/preferences",
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization:
  //           "Bearer TEST-7971931143108565-120213-9543ac0f52ff97241f2833737a6a4c85-389442168", //Aca va el token individual luego del bearer: token individual
  //       },
  //       body: JSON.stringify({
  //         items: carryProductsToMap,
  //       }),
  //     }
  //   );
  //   const data = await response.json();
  //   window.open(data.init_point, "_blank");
  // }
}

{
  /* <Container maxW="90%" display="flex" flexDir="column">
      <Container
        maxW="90%"
        display="flex"
        flexDir="row"
        justifyContent="center"
        bg={bgBox}
        alignItems="center">
        <Flex maxW="40%" display="flex" flexDir="column" mb="1rem">
          <HStack
            spacing="0.5"
            alignItems="flex-start"
            justifyContent="space-between">
            <Rating
              defaultValue={product?.rating}
              size="sm"
              value={product?.rating}
            />
          </HStack>

          <Text fontWeight={"bold"} fontSize={"4xl"}>
            {product?.name}
          </Text>

          <PriceTag price={product?.price} />

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
              ml={2}
              mr={2}
              flexWrap={"wrap"}>
              {product?.size.map(
                (size: { value: string; label: string }, index: number) => {
                  return (
                    <Flex flexDirection={"row"} key={index}>
                      <Button
                        borderRadius="full"
                        p={2}
                        colorScheme="purple"
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                        _hover={{
                          color: "white",
                          bg: "purple.500",
                        }}
                        color={selectedSize === size ? "white" : "gray.700"}
                        bg={selectedSize === size ? "purple.500" : "gray.300"}>
                        {size.value}
                      </Button>
                    </Flex>
                  );
                }
              )}
            </Flex>
            <Button
              mt={"1rem"}
              mr={"1rem"}
              colorScheme="purple"
              size="lg"
              width={"100%"}
              onClick={() => addOrIncrementProduct(product, selectedSize)}>
              Add to cart
            </Button>
          </Box>

          {/* <Box ml={"1.5rem"}>
          <Text
            fontWeight={"bold"}
            fontSize={{
              md: "xs",
              lg: "md",
              xl: "lg",
            }}>
            Colors:
          </Text>
          <Flex
            flexDirection={"row"}
            gap={3}
            mt={2}
            mb={2}
            ml={2}
            mr={2}
            flexWrap={"wrap"}>
            {product?.colors?.map((color: string, index: number) => {
              return (
                <Button
                  key={index}
                  onClick={() =>
                    setSelectedSize({ label: color, value: color })
                  }
                  colorScheme={selectedSize?.value === color ? "red" : "gray"}
                  variant="outline">
                  {color}
                </Button>
              );
            })}
          </Flex>
        </Box> */
}
//         </Flex>
//       </Container>
//       <Container
//         maxW="90%"
//         display="flex"
//         flexDir="column"
//         justifyContent="left"
//         alignItems="left"
//         textAlign={"justify"}
//         bg={bgBox}
//         mb={"3rem"}
//         fontSize={{
//           md: "xs",
//           lg: "md",
//           xl: "lg",
//         }}>
//         <Divider />
//         <Text mt={"1rem"} fontWeight={"bold"}>
//           Description:
//         </Text>
//         <Text mt={"1rem"} fontWeight={"light"}>
//           {product?.description}
//         </Text>
//         <Divider />

//         <Text mt={"1rem"} fontWeight={"bold"}>
//           Product Details
//         </Text>
//       </Container>
//     </Container> */}
// // <Center>
// //   <Flex w="100%" flexDirection={{ base: "column", md: "row" }}>
// //     <Flex w={"100%"}>

// //     </Flex>

// //     {/* <Grid templateColumns="repeat(1, 1fr)" w={"100%"}>
// //         <Box>
// //           <Text
// //             mt={"4rem"}
// //             ml={"1.5rem"}
// //             fontSize={{
// //               base: "3xl",
// //               md: "4xl",
// //               lg: "5xl",
// //             }}>
// //             {product?.name}
// //           </Text>
// //         </Box>

// //         <Divider />

// //         <PriceTag price={product?.price} />

// //         <Box ml={"1.5rem"}>
// //           <Text
// //             fontWeight={"bold"}
//             fontSize={{
//               md: "xs",
//               lg: "md",
//               xl: "lg",
//             }}>
//             Sizes:
//           </Text>
//           <Flex
//             flexDirection={"row"}
//             gap={3}
//             mt={2}
//             mb={2}
//             flexWrap={"wrap"}>

//           </Flex>
//         </Box>
//         <Divider />

//         <Flex
//           flexDirection={"row"}
//           w={"100%"}
//           justifyContent={"space-between"}>
//           <IconButton
//             mt={"1rem"}
//             mx={"1rem"}
//             isRound={true}
//             colorScheme="purple"
//             bg={"gray.200"}
//             size="lg"
//             aria-label="AddToWishlist"
//             icon={<MdFavoriteBorder />}
//           />

//         </Flex>
//       </Grid> */}
//   </Flex>

//   {/* <Box
//       mt={"2rem"}
//       ml={"1.5rem"}
//       mr={"1.5rem"}
//       mb={"2rem"}
//       fontSize={{
//         md: "md",
//         lg: "lg",
//         xl: "xl",
//       }}>

//       <Text mt={"1rem"} fontWeight={"light"}>
//             {product?.metadata.Color}
//           </Text>
//           <Text mt={"1rem"} fontWeight={"bold"}>
//             Material:
//           </Text>
//           <Text mt={"1rem"} fontWeight={"light"}>
//             {product?.metadata.Material}
//           </Text>
//           <Text mt={"1rem"} fontWeight={"bold"}>
//             Gender:
//           </Text>
//           <Text mt={"1rem"} fontWeight={"light"}>
//             {product?.metadata.Gender}
//           </Text>
//           <Text mt={"1rem"} fontWeight={"bold"}>
//             Fit:
//           </Text>
//           <Text mt={"1rem"} fontWeight={"light"}>
//             {product?.metadata.Fit}
//           </Text>
//     </Box> */}
// </Center>
