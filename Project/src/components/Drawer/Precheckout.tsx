import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  Button,
  Grid,
  Text,
  IconButton,
  Flex,
  DrawerHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { CartDrawerAtom } from "../../atoms/cartDrawerAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import MPago from "../../../public/assets/images/mercadopago.jpg";
import Stripe from "../../../public/assets/images/stripe.png";
import { Heading } from "@chakra-ui/react";
import { cartState, cartTotal } from "../../atoms/cartItemAtom";
import { useToast } from "@chakra-ui/react";

const Precheckout: React.FC = () => {
  const [drawerState, setDrawerState] = useRecoilState(CartDrawerAtom);
  const handleClose = useCallback(() => {
    return setDrawerState((prev) => ({ ...prev, isOpen: false }));
  }, [setDrawerState]);
  const cartItems = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);
  const toast = useToast();
  const [disabledButton, setDisabledButton] = useState(false);
  const [input, setInput] = useState({
    fullName: "",
    streetAddress: "",
    zipCode: "",
    city: "",
    email: "",
  });

  const handleInputChange = (e:any) => {
    if(input.fullName === "" || input.streetAddress === "" || input.zipCode === "" || input.city === "" || input.email === "") {
      setInput({ ...input, [e.target.name]: e.target.value });
      setDisabledButton(true);
  };
}

  async function payCartProducts(paymentMethod: string) {
    if (paymentMethod === "1") {
      console.log(cartItems);
      const carryProductsToMap = cartItems.map((element: any) => {
        const newProduct = {
          title: element.name,
          unit_price: element.price,
          price: element.price,
          quantity: element.quantity,
          id: element.id,
        };
        return newProduct;
      });

      const response = await fetch(
        "https://api.mercadopago.com/checkout/preferences",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer TEST-7971931143108565-120213-9543ac0f52ff97241f2833737a6a4c85-389442168", //Aca va el token individual luego del bearer: token individual
          },
          body: JSON.stringify({
            items: carryProductsToMap,
          }),
        }
      );

      const data = await response.json();

      window.open(data.init_point, "_blank");
    }
  }

  const handlePaymentMethod = () => {
    if(input.fullName === "" || input.streetAddress === "" || input.zipCode === "" || input.city === "" || input.email === ""){
      toast ({
        title: "Error",
        description: "Please fill out all the fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      })

    }else{
      payCartProducts("1");
  };
}

  return (
    <>
      <DrawerHeader textAlign={"center"}>
        Complete your shipping data
      </DrawerHeader>

      <DrawerBody
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <FormControl isRequired>
          <FormLabel>Full name</FormLabel>
          <Input
            type="text"
            placeholder="Your first and last name"
            name="fullName"
            // value={input.fullName}
            onChange={handleInputChange}
          />
          <FormLabel mt={3}>Street address</FormLabel>
          <Input
            type="text"
            placeholder="742 Evergreen Terrace"
            name="streetAddress"
            // value={input.streetAddress}
            onChange={handleInputChange}
          />
          <FormLabel mt={3}>Zip Code</FormLabel>
          <Input
            type="text"
            placeholder="zip code"
            name="zipCode"
            // value={input.zipCode}
            onChange={handleInputChange}
          />
          <FormLabel mt={3}>City</FormLabel>
          <Input
            type="text"
            placeholder="city"
            name="city"
            // value={input.city}
            onChange={handleInputChange}
          />
          <FormLabel mt={3}>Email</FormLabel>
          <Input
            type="email"
            placeholder="you@example.com"
            name="email"
            // value={input.email}
            onChange={handleInputChange}
          />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          {/* <Button
          colorScheme={"purple"}
          variant="outline"
          mr={3}
          onClick={handlePaymentMethod}
          isDisabled={!disabledButton}
        >
          Continue
        </Button> */}
        </FormControl>
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
        <Button
          colorScheme={"purple"}
          variant="outline"
          mr={3}
          onClick={handlePaymentMethod}
          disabled={!disabledButton}
        >
          Continue
        </Button>
      </DrawerFooter>
    </>
  );
};


export default Precheckout;