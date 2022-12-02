import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Button, Flex, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { CartDrawerAtom } from "../../atoms/cartDrawerAtom";
import CartDrawer from "../Drawer/CartDrawer";
import { cartState } from "../../atoms/cartItemAtom";

const Cart = () => {
  const setCartDrawerState = useSetRecoilState(CartDrawerAtom);
  const cartItem = useRecoilValue(cartState);
  const cartItems = Array.from(new Set(cartItem))


  return (
    <>
      <CartDrawer />
      <Flex display={{ base: "none", md: "flex" }}>
        <Button
          onClick={() => setCartDrawerState({ isOpen: true, type: "cart" })}
          borderRadius={"full"}
          colorScheme="purple"
          variant="ghost"
          size="md"
          aria-label="cart"
        >
          <FiShoppingCart />
          {cartItems.length > 0 && (
            <Text
              mb={5}
              color={"white"}
              fontSize={"xs"}
              bg={"purple.500"}
              borderRadius={"full"}
              w={4}
              h={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {cartItems.length}
            </Text>
          )}
        </Button>
      </Flex>
    </>
  );
};
export default Cart;
