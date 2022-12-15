import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FormatPrice from "../../components/Products/Price/formatPrice";
import useProductsData from "../../hooks/useProductsData";
import useUserData from "../../hooks/useUserData";

type SuccessProps = {};

const Success: React.FC<SuccessProps> = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(true);
  const { userData } = useUserData();
  const { findProduct } = useProductsData();
  const bg = useColorModeValue("gray.200", "gray.700");
  const _Date = `${new Date(
    userData?.lastPurchase?.created * 1000
  ).toDateString()} — ${new Date(
    userData?.lastPurchase?.created * 1000
  ).toTimeString()}
  `;

  const PaymentMethod =
    userData?.lastPurchase?.charges?.data[0]?.payment_method_details?.type[0].toUpperCase() +
    userData?.lastPurchase?.charges?.data[0]?.payment_method_details?.type
      .slice(1)
      .toLowerCase();

  const goReceipt = () => {
    router.push(userData?.lastReceipt);
  };
  const TotalPrice = FormatPrice({
    value: userData?.lastPurchase?.amount,
    currency: userData?.lastPurchase?.currency,
  });

  const _Products = userData?.lastPurchase?.items?.map(
    (product: { price: { product: string } }) => {
      return findProduct(product.price.product);
    }
  );

  useEffect(() => {
    if (userData.lastReceipt) {
      setDisabled(false);
    }
  }, [userData]);

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minH={"80vh"}
      w={"6xl"}
      m={"auto"}>
      <Grid
        templateColumns="repeat(2, 2fr)"
        gap={3}
        m={4}
        bg={bg}
        border={"1px"}
        borderRadius={"md"}
        borderColor={"gray.300"}>
        <Flex flexDirection={"column"} justifyContent={"center"} gap={4} m={4}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Order Details
          </Text>
          <Flex flexDirection={"row"}>
            <Flex flexDirection={"column"} mr={2}>
              <Text>Orderer on </Text>
              <Text fontWeight={"bold"}>{_Date}</Text>
            </Flex>
            <Flex flexDirection={"column"}>
              <Text>Order ID: </Text>
              <Text fontWeight={"bold"}>{userData?.lastPurchase?.id}</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex align={"center"} justify={"center"}>
          <Button
            colorScheme={"purple"}
            onClick={goReceipt}
            disabled={disabled}>
            Check Your Receipt
          </Button>
        </Flex>
      </Grid>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={3}
        w={"80%"}
        justifyContent={"space-between"}
        borderRadius={"md"}
        shadow="md"
        border={"1px"}
        borderColor={"gray.300"}>
        <Box m={4} p={5}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Shipping Address
          </Text>
          <Text>{userData?.displayName}</Text>
          <Text>{userData?.address?.line1}</Text>
          <Text>
            {userData?.address?.city}, {userData?.address?.postal_code}
          </Text>
          <Text>{userData?.address?.country}</Text>
        </Box>
        <Box m={4} p={5}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Order Summary
          </Text>
          <Text fontSize={"lg"}>Payment Method</Text>
          <Text>{PaymentMethod}</Text>
          <Text fontSize={"lg"}>Item Total</Text>
          <Text>{TotalPrice}</Text>
        </Box>
      </Grid>

      <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        shadow={"md"}
        borderRadius={"md"}
        m={4}
        w="80%"
        border={"1px"}
        borderColor={"gray.300"}>
        {_Products?.map((product: any, index: number) => (
          <Box m="2" p={5} w={"100%"} key={index}>
            <Grid templateColumns="repeat(3, 1fr)">
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
              <Flex justifyContent={"flex-start"} ml="-20" direction="column">
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: "sm", md: "lg" }}
                  color={"gray.500"}>
                  {product?.name}
                </Text>
                <Text fontSize="sm">{product?.brand}</Text>
                <Text fontSize="sm">{product?.color}</Text>
              </Flex>
              <Flex justifyContent={"space-around"} flexDirection={"column"}>
                <Button
                  colorScheme={"purple"}
                  onClick={() => router.push(`/product/${product?.id}/review`)}>
                  Review This product
                </Button>
                <Text
                  display={"flex"}
                  flexDirection={"row-reverse"}
                  fontWeight="semibold"
                  mt={{ base: "6", md: "none" }}>
                  Price: {FormatPrice({ value: product?.price })}
                </Text>
              </Flex>
            </Grid>
            <Divider />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
export default Success;
