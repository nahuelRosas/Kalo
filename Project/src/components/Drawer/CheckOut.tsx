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
import { useRecoilState, useRecoilValue } from 'recoil';
import MPago from "../../../public/assets/images/mercadopago.jpg";
import Stripe from "../../../public/assets/images/stripe.png";
import { Heading } from "@chakra-ui/react";
import {cartState, cartTotal } from '../../atoms/cartItemAtom';


const CheckOutDrawer: React.FC = () => {
  const [drawerState, setDrawerState] = useRecoilState(CartDrawerAtom);
  const handleClose = useCallback(() => {
    return setDrawerState((prev) => ({ ...prev, isOpen: false }));
  }, [setDrawerState]);
  const cartItems = useRecoilValue(cartState)
  const total = useRecoilValue(cartTotal)

  // async function payCartProducts(paymentMethod: string) {
  //   if (paymentMethod === "1") {
  //     console.log(cartItems)
  //     const carryProductsToMap = cartItems.map((element: any) => {
  //       const newProduct = {
  //         title: element.name,
  //         unit_price: element.price,
  //         price: element.price,
  //         quantity: element.quantity,
  //         id: element.id,
  //       };
  //       return newProduct;
  //     });

  //     const response = await fetch(
  //       "https://api.mercadopago.com/checkout/preferences",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization:
  //             "Bearer TEST-7971931143108565-120213-9543ac0f52ff97241f2833737a6a4c85-389442168", //Aca va el token individual luego del bearer: token individual
  //         },
  //         body: JSON.stringify({
  //           items: carryProductsToMap,
  //         }),
  //       }
  //     );

  //     const data = await response.json();

  //     window.open(data.init_point, "_blank");
  //   }
  // }

  // const handlePaymentMethod = () =>{
  //   payCartProducts("1")
  // }


  return (
    <>
      <DrawerBody
        display={"flex"}
        mt={"13rem"}
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
              onClick={() => setDrawerState({ isOpen: true, type: "preCheckout" })}
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
