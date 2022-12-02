import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  DrawerCloseButton,
  useColorModeValue,
  Text,
  Grid,
  Flex,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartDrawerAtom } from "../../atoms/cartDrawerAtom";
import { auth } from "../../firebase/clientApp";
import { cartState } from "../../atoms/cartItemAtom";
import CardCart from '../Cart/CardCart';
import CheckOutDrawer from './CheckOut';

const CartDrawer: React.FC = () => {
  const [drawerState, setDrawerState] = useRecoilState(CartDrawerAtom);
 
  const cartItem = useRecoilValue(cartState);
  const cartItems = Array.from(new Set(cartItem))


  const [user] = useAuthState(auth);

  const handleClose = useCallback(() => {
    return setDrawerState((prev) => ({ ...prev, isOpen: false }));
  }, [setDrawerState]);



  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <Drawer
        isOpen={drawerState.isOpen}
        placement="right"
        onClose={handleClose}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"}>
            {drawerState.type === "cart" && `Your order ( ${cartItems.length} )`}
            {drawerState.type === "checkout" && `Complete your Order`}
          </DrawerHeader>
          {drawerState.type === "cart" && (
            <>
              <DrawerBody>
                {cartItems.length === 0 ? (
                  <Text>Your cart is empty</Text>
                ) : (
                  <Grid>
                    {cartItems.map((item:any) => {
                      return (
                        <CardCart key={item.id} product={item}  />
                      )
                    })}
                  </Grid>
                )}
              </DrawerBody>
              <DrawerFooter>
                {/* <Flex w="100%" justifyContent="space-between">
                  SubTotal: ${cartItems.reduce((acc:any, item:any) => acc + item.prices[0].unit_amount, 0) / 100}
                </Flex> */}

                <Button
                  variant="outline"
                  colorScheme="purple"
                  mr={3}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button colorScheme="purple" onClick={() => setDrawerState({ isOpen: true, type: "checkout" })}>
                  Checkout
                </Button>
              </DrawerFooter>
            </>
          )}
          {drawerState.type === "checkout" && (
            <CheckOutDrawer />
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default CartDrawer;
