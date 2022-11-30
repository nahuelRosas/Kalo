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
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { WishListDrawerAtom } from "../../atoms/wishListDrawerAtom";
import { auth } from "../../firebase/clientApp";

const WishListDrawer: React.FC = () => {
  const [drawerState, setDrawerState] = useRecoilState(WishListDrawerAtom);
  const [user] = useAuthState(auth);

  const handleClose = useCallback(() => {
    return setDrawerState((prev) => ({ ...prev, isOpen: false }));
  }, [setDrawerState]);

  const totalItems = 2;
  const cartItems: any[] = [];

  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <Drawer
        isOpen={drawerState.isOpen}
        placement="right"
        onClose={handleClose}
        size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"}>
            {drawerState.type === "wishList" && `Complete your order`}
          </DrawerHeader>
          {drawerState.type === "wishList" && (
            <>
              <DrawerBody>
                {cartItems.length === 0 ? (
                  <Text>Your WishList is Empty</Text>
                ) : (
                  <Grid templateColumns="repeat(1, 1fr)">
                    {cartItems.map((item: any) => {
                      if (item.quantity > 0) {
                        return (
                          <Box key={item.product._id} p={5} shadow="md" bg={bg}>
                            <Grid templateColumns="repeat(2, 1fr)">
                              <Text fontSize="xl" fontWeight="bold">
                                {item.product.name}
                              </Text>
                              <Text
                                fontSize="xl"
                                fontWeight="bold"
                                textAlign="right"
                                color="teal.500">
                                ${item.product.price * item.quantity},00
                              </Text>
                            </Grid>
                            <Grid
                              templateColumns="repeat(3, 1fr)"
                              w={"20%"}
                              mt={2}
                              gap={2}>
                              <IconButton
                                colorScheme="purple"
                                variant={"ghost"}
                                size="2xl"
                                borderRadius={"999px"}
                                aria-label={""}>
                                <FiArrowDownCircle />
                              </IconButton>
                              <Text fontSize="xl" textAlign="center">
                                {item.quantity}
                              </Text>
                              <IconButton
                                colorScheme="purple"
                                variant={"ghost"}
                                size="2xl"
                                borderRadius={"999px"}
                                aria-label={""}>
                                <FiArrowUpCircle />
                              </IconButton>
                            </Grid>
                          </Box>
                        );
                      }
                    })}
                  </Grid>
                )}
              </DrawerBody>
              {/* <DrawerFooter>
                <Button
                  variant="outline"
                  colorScheme="purple"
                  mr={3}
                  onClick={handleClose}>
                  Cancel
                </Button>
                <Button colorScheme="purple" onClick={handleClose}>
                  Checkout
                </Button>
              </DrawerFooter> */}
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default WishListDrawer;
