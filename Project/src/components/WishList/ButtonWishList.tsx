import { Flex, IconButton, Text } from "@chakra-ui/react";
import WishListDrawer from "../Drawer/WishListDrawer";
import { MdFavorite } from "react-icons/md";
import useWishlistData from "../../hooks/useWishlistData";

const Wishlist = () => {
  const { toggleDrawer } = useWishlistData();

  return (
    <>
      <WishListDrawer />
      <Flex display={{ base: "none", md: "flex" }}>
        <IconButton
          onClick={toggleDrawer}
          colorScheme="purple"
          isRound
          variant="ghost"
          size="md"
          aria-label="cart"
          mr={2}
          icon={<MdFavorite />}></IconButton>
      </Flex>
    </>
  );
};
export default Wishlist;
