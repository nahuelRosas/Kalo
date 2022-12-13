import { Flex, IconButton, Text } from "@chakra-ui/react";
import WishListDrawer from "../Drawer/WishListDrawer";
import { MdFavorite } from 'react-icons/md';
import useWishlistData from "../../hooks/useWishlistData";

const Wishlist = () => {
  const { Length, toggleDrawer } = useWishlistData();

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
          ml={2}
          icon={
            <>
              <MdFavorite />
              {/* <Text
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
              </Text> */}
            </>
          }></IconButton>
      </Flex>
    </>
  );
};
export default Wishlist;
