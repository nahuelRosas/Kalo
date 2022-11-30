import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { WishListDrawerAtom } from "../../atoms/wishListDrawerAtom";
import WishListDrawer from "../Drawer/WishListDrawer";

const WishList = () => {
  const setWishListDrawerstate = useSetRecoilState(WishListDrawerAtom);

  return (
    <>
      <WishListDrawer />
      <Box
        display={
          useBreakpointValue({
            base: "none",
            md: "flex",
          }) as string
        }
        position="relative"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        mr={4}>
        <IconButton
          onClick={() =>
            setWishListDrawerstate({ isOpen: true, type: "wishList" })
          }
          isRound={true}
          colorScheme="purple"
          variant="ghost"
          size="md"
          aria-label="cart">
          <MdFavorite />
        </IconButton>
      </Box>
    </>
  );
};
export default WishList;
