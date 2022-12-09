import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import useCartData from "../../hooks/useCartData";
import CartDrawer from "../Drawer/CartDrawer";

const Cart = () => {
  const { Length, toggleDrawer } = useCartData();

  return (
    <>
      <CartDrawer />
      <Flex display={{ base: "none", md: "flex" }}>
        <IconButton
          onClick={toggleDrawer}
          colorScheme="purple"
          isRound
          variant="ghost"
          size="md"
          aria-label="cart"
          mr={2}
          ml={2}
          icon={
            <>
              <FiShoppingCart />
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
                justifyContent={"center"}>
                {Length}
              </Text>
            </>
          }></IconButton>
      </Flex>
    </>
  );
};
export default Cart;
