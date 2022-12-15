import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import useProductsData from "../../../hooks/useProductsData";
import useUserData from "../../../hooks/useUserData";
import FormatPrice from "../../Products/Price/formatPrice";

type OrdersProps = {};

const Orders: React.FC<OrdersProps> = () => {
  const { userData } = useUserData();
  const { findProduct } = useProductsData();
  const bg = useColorModeValue("white", "gray.800");

  if (!userData) {
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
  }
  return (
    <>
      {userData.orders.map((order: any, index: number) => {
        const _Date = `${new Date(
          order.created * 1000
        ).toDateString()} — ${new Date(order.created * 1000).toTimeString()}
        `;
        const PaymentMethod =
          order.charges?.data[0]?.payment_method_details?.type[0].toUpperCase() +
          order.charges?.data[0]?.payment_method_details?.type
            .slice(1)
            .toLowerCase();
        const TotalPrice = FormatPrice({
          value: order.amount,
          currency: order.currency,
        });
        const _Products = order.items?.map(
          (product: { price: { product: string } }) => {
            return findProduct(product.price.product);
          }
        );

        const goReceipt = () => {
          router.push(order.charges.data[0].receipt_url);
        };

        return (
          <Flex key={index}>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
              m={3}
              borderRadius={"md"}
              borderColor={"gray.300"}
              border={"2px"}
              bg={bg}>
              <Grid templateColumns="3fr 1fr" gap={3} bg={bg} w={"100%"}>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  m={4}
                  gap={4}>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    Order: {order.id}
                  </Text>
                  <Flex flexDirection={"row"}>
                    <Text mr={2}>Date:</Text>
                    <Text fontWeight={"bold"}>{_Date}</Text>
                  </Flex>
                </Flex>
                <Flex align={"center"} justify={"center"}>
                  <Button
                    colorScheme={"purple"}
                    variant={"outline"}
                    onClick={goReceipt}>
                    Check Receipt
                  </Button>
                </Flex>
              </Grid>

              <Grid templateColumns="repeat(2, 2fr)" gap={3} bg={bg} w={"100%"}>
                <Box m={4}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Shipping Address
                  </Text>
                  <Text>{userData?.displayName}</Text>
                  <Text>{userData?.address.line1}</Text>
                  <Text>
                    {userData?.address?.city}, {userData?.address?.postal_code}
                  </Text>
                  <Text>{userData?.address?.country}</Text>
                </Box>
                <Box m={2}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Order Summary
                  </Text>
                  <Text fontSize={"lg"}>Payment Method</Text>
                  <Text>{PaymentMethod} </Text>
                  <Text fontSize={"lg"}>Item Total</Text>
                  <Text fontWeight={"bold"}>{TotalPrice}</Text>
                </Box>
              </Grid>
              {_Products?.map((product: any, index: number) => (
                <Box m="2" p={5} w={"100%"} key={index}>
                  <Grid templateColumns="1.3fr 3fr 2fr">
                    <Image
                      src={product?.images[0]}
                      alt="product"
                      maxHeight={{ base: "5rem", md: "7rem" }}
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
                      ml="-20"
                      direction="column">
                      <Text
                        fontWeight="semibold"
                        fontSize={{ base: "sm", md: "lg" }}
                        color={"gray.500"}>
                        {product?.name}
                      </Text>
                      <Text fontSize="sm">{product?.brand}</Text>
                      <Text fontSize="sm">{product?.color}</Text>
                    </Flex>
                    <Flex
                      justifyContent={"space-around"}
                      flexDirection={"column"}>
                      <Button
                        colorScheme={"purple"}
                        onClick={() =>
                          router.push(`/product/${product?.id}/review`)
                        }>
                        Review This product
                      </Button>
                      <Text
                        display={"flex"}
                        flexDirection={"row-reverse"}
                        fontWeight="bold"
                        mt={{ base: "6", md: "none" }}>
                        Price: {FormatPrice({ value: product?.price })}
                      </Text>
                    </Flex>
                  </Grid>
                  <Divider mt={2} />
                </Box>
              ))}
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};

export default Orders;
