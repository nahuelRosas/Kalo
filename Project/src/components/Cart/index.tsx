import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Box } from "@chakra-ui/react";
import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { CartDrawerAtom } from "../../atoms/cartDrawerAtom";
import CartDrawer from "../Drawer/CartDrawer";

const Cart = () => {
  const setCartDrawerState = useSetRecoilState(CartDrawerAtom);

  return (
    <>
      <CartDrawer />
      <Box
        display={
          useBreakpointValue({
            base: "none",
            md: "flex",
          }) as string
        }
        position="relative"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        mr={4}>
        <IconButton
          onClick={() => setCartDrawerState({ isOpen: true, type: "cart" })}
          isRound={true}
          colorScheme="purple"
          variant="ghost"
          size="md"
          aria-label="cart">
          <FiShoppingCart />
        </IconButton>
      </Box>
    </>
  );
};
export default Cart;
