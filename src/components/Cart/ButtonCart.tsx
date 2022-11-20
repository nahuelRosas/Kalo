import {
  MenuItem,
  useBreakpointValue,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useSetRecoilState } from "recoil";
import { CartDrawerAtom } from "../../atoms/cartDrawerAtom";
import React from "react";

const ButtonCart = () => {
  const setCartDrawerState = useSetRecoilState(CartDrawerAtom);

  return (
    <>
      <MenuItem
        width="100%"
        aria-label="cart"
        onClick={() => setCartDrawerState({ isOpen: true, type: "cart" })}
        display={useBreakpointValue({
          base: "flex",
          md: "none",
        })}>
        <Icon
          as={FiShoppingCart}
          boxSize={useBreakpointValue({ base: 4, md: 5 })}
          color={
            useColorModeValue("purple.600", "purple.400") as
              | "purple.600"
              | "purple.400"
          }
          mr={2}
        />
        <Text>Cart</Text>
      </MenuItem>
    </>
  );
};

export default ButtonCart;
