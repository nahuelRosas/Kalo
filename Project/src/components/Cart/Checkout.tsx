import {
  Button,
  DrawerBody,
  DrawerFooter,
  Flex,
  Grid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useCartData from "../../hooks/useCartData";
import { useRouter } from "next/router";

const CheckOutDrawer: React.FC = () => {
  const { toggleDrawer, changeDrawer, urlCheckOut } = useCartData();
  const router = useRouter();

  return (
    <>
      <DrawerBody
        display={"flex"}
        mt={"13rem"}
        flexDirection={"column"}
        alignItems={"center"}>
        <Text mb={"1rem"} fontSize={"2xl"}>
          Please choose your payment method
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Flex flexDirection={"column"}>
            <IconButton
              aria-label="Mercado Pago"
              overflow={"hidden"}
              borderRadius={"5%"}
              boxShadow={"lg"}
              icon={
                <Image
                  src={
                    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1670577807/payment%20method/mercadopago_bfj6bh.jpg"
                  }
                  alt={"Button mercadopago"}
                  height={100}
                  width={200}
                />
              }
              h={100}
              w={200}
            />
            <Text
              mt={"1rem"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}>
              Mercado Pago
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            onClick={() => {
              router.push(urlCheckOut);
            }}>
            <IconButton
              aria-label="Stripe"
              overflow={"hidden"}
              borderRadius={"5%"}
              boxShadow={"lg"}
              icon={
                <Image
                  src={
                    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1670577806/payment%20method/stripe_h82b2t.png"
                  }
                  alt={"Button Stripe"}
                  height={100}
                  width={200}
                />
              }
              h={100}
              w={200}
            />
            <Text
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              mt={"1rem"}>
              Stripe
            </Text>
          </Flex>
        </Grid>
      </DrawerBody>
      <DrawerFooter>
        <Button
          colorScheme={"purple"}
          variant="outline"
          mr={3}
          onClick={() => {
            changeDrawer("cart");
          }}>
          Cancel
        </Button>
      </DrawerFooter>
    </>
  );
};

export default CheckOutDrawer;
