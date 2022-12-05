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
  Box,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartDrawerAtom } from "../../atoms/cartDrawerAtom";
import { auth } from "../../firebase/clientApp";

import ProductCard from '../Products/index';
import CardCart from '../Cart/CardCart';
import CheckOutDrawer from './CheckOut';
import { cartState, cartTotal } from "../../atoms/cartItemAtom";
import Precheckout from './Precheckout'


const CartDrawer: React.FC = () => {
  const [drawerState, setDrawerState] = useRecoilState(CartDrawerAtom);
 
  const cartItems = useRecoilValue(cartState);
  const Total= useRecoilValue(cartTotal)

  
  const [user] = useAuthState(auth);

  const handleClose = useCallback(() => {
    return setDrawerState((prev) => ({ ...prev, isOpen: false }));
  }, [setDrawerState]);

 
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Drawer
        isOpen={drawerState.isOpen}
        placement="right"
        onClose={handleClose}
        size="lg"
        
      >
        <DrawerOverlay />
        <DrawerContent bg={bg}>
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
                    {cartItems.map((item:any, index:number) => {
                      return (
                        <CardCart key={index} product={item} index={index} />
                      )
                    })}
                  </Grid>
                )}
              </DrawerBody>
              <DrawerFooter>
                <Flex w="100%" justifyContent="space-between">
                  SubTotal: ${Total}
                </Flex>

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
          {drawerState.type === "preCheckout" && (
            <Precheckout />
          )}
           
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default CartDrawer;
