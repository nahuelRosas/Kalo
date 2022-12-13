import { Button, DrawerBody, DrawerFooter, Flex, Grid, Text, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import useWishlistData from "../../hooks/useWishlistData";
import CardWishlist from "./CardWishlist";



const WishList = () => {
  const {
    Length,
    TotalPrice,
    Wishlist,
    clearWishlist,
    toggleDrawer,
    changeDrawer,
    getCheckOutSession,
  } = useWishlistData();


  return (
    <>
      <DrawerBody>
        {Length === 0 ? (
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="bold"
            color="gray.500">
            Your wishlist is empty
          </Text>
        ) : (
          <Grid>
            {Wishlist.map((item, index) => (
              <CardWishlist key={index} itemState={item} />
            ))}
          </Grid>
        )}
      </DrawerBody>
      <DrawerFooter>
        {/* <Flex w="100%" justifyContent="space-between" alignItems="center" p={4}>
          <Text fontSize="xl" fontWeight="bold">
            Total: {TotalPrice}
          </Text> */}
        <Flex>
          <Button
            colorScheme="purple"
            variant="outline"
            size="md"
            mr={2}
            onClick={() => {
              // clearWishlist();
              toggleDrawer();
            }}>
            Cancel
          </Button>

          {Wishlist.length > 0 ? <Button
            colorScheme="purple"
            variant="outline"
            size="md"
            mr={2}
            onClick={() => {
              clearWishlist();
              // toggleDrawer();
            }}>
            Delete all
          </Button> : false}

        </Flex>
      </DrawerFooter>
    </>
  );
};
export default WishList;
