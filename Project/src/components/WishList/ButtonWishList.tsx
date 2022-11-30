import {
  MenuItem,
  useBreakpointValue,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { WishListDrawerAtom } from "../../atoms/wishListDrawerAtom";
import React from "react";

const ButtonWishList = () => {
  const setWishListDrawerstate = useSetRecoilState(WishListDrawerAtom);

  return (
    <>
      <MenuItem
        width="100%"
        aria-label="wishList"
        onClick={() =>
          setWishListDrawerstate({ isOpen: true, type: "wishList" })
        }
        display={useBreakpointValue({
          base: "flex",
          md: "none",
        })}>
        <Icon
          as={MdFavorite}
          boxSize={useBreakpointValue({ base: 4, md: 5 })}
          color={
            useColorModeValue("purple.600", "purple.400") as
              | "purple.600"
              | "purple.400"
          }
          mr={2}
        />
        <Text>Cart</Text>
      </MenuItem>
    </>
  );
};

export default ButtonWishList;
