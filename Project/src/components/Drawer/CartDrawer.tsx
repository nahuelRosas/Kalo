import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import useCartData from "../../hooks/useCartData";
import Cart from "../Cart";
import Checkout from "../Cart/Checkout";
const CartDrawer: React.FC = () => {
  const { Length, toggleDrawer, isOpen, type } = useCartData();
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={toggleDrawer}
        size="lg">
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"}>
            {type === "cart" && `Your order ( ${Length} )`}
            {type === "precheckout" && `Complete your shipping data`}
            {type === "checkout" && `Complete your Order`}
          </DrawerHeader>
          {type === "cart" && <Cart />}
          {type === "checkout" && <Checkout />}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default CartDrawer;
