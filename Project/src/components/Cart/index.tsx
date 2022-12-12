import {
  Button,
  DrawerBody,
  DrawerFooter,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useCartData from "../../hooks/useCartData";
import CardCart from "./CardCart";

const Cart: React.FC = () => {
  const {
    Length,
    TotalPrice,
    Cart,
    clearCart,
    toggleDrawer,
    changeDrawer,
    getCheckOutSession,
  } = useCartData();

  return (
    <>
      <DrawerBody>
        {Length === 0 ? (
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="bold"
            color="gray.500">
            Your cart is empty
          </Text>
        ) : (
          <Grid>
            {Cart.map((item, index) => (
              <CardCart key={index} itemState={item} />
            ))}
          </Grid>
        )}
      </DrawerBody>
      <DrawerFooter>
        <Flex w="100%" justifyContent="space-between" alignItems="center" p={4}>
          <Text fontSize="xl" fontWeight="bold">
            Total: {TotalPrice}
          </Text>
          <Flex>
            <Button
              colorScheme="purple"
              variant="outline"
              size="md"
              mr={2}
              onClick={() => {
                clearCart();
                toggleDrawer();
              }}>
              Cancel
            </Button>

            <Button
              colorScheme="purple"
              size="md"
              onClick={() => {
                changeDrawer("checkout");
                getCheckOutSession();
              }}>
              Checkout
            </Button>
          </Flex>
        </Flex>
      </DrawerFooter>
    </>
  );
};
export default Cart;
