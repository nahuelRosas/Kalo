import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  Button,
  Grid,
  Text,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useCallback } from "react";
import { CartDrawerAtom } from "../../atoms/cartDrawerAtom";
import { useRecoilState } from "recoil";
import MPago from "../../../public/assets/images/mercadopago.jpg";
import Stripe from "../../../public/assets/images/stripe.png";
import { Heading } from "@chakra-ui/react";

const CheckOutDrawer: React.FC = () => {
  const [drawerState, setDrawerState] = useRecoilState(CartDrawerAtom);
  const handleClose = useCallback(() => {
    return setDrawerState((prev) => ({ ...prev, isOpen: false }));
  }, [setDrawerState]);

  return (
    <>
      <DrawerBody
        display={"flex"}
        mt={"18rem"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text mb={"1rem"} fontSize={"2xl"}>Please choose your payment method</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Flex flexDirection={"column"}>
            <IconButton
              aria-label="Mercado Pago"
              overflow={"hidden"}
              borderRadius={"5%"}
              boxShadow={"lg"}
              icon={
                <Image
                  src={MPago}
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
              display={"flex"}
            >
              Mercado Pago
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <IconButton
              aria-label="Stripe"
              overflow={"hidden"}
              borderRadius={"5%"}
              boxShadow={"lg"}
              icon={
                <Image
                  src={Stripe}
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
              mt={"1rem"}
            >
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
          onClick={handleClose}
        >
          Cancel
        </Button>
      </DrawerFooter>
    </>
  );
};

export default CheckOutDrawer;
