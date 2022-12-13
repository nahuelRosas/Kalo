import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import useWishlistData from "../../hooks/useWishlistData";
import WishList from "../WishList";

const WishListDrawer: React.FC = () => {
  const { Length, toggleDrawer, isOpen, type } = useWishlistData();
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
            {type === "wishList" && `Your wishlist(${Length})`}
          </DrawerHeader>
          {type === "wishList" && <WishList />}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default WishListDrawer;
