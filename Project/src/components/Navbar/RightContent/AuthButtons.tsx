import React from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { AuthModalState } from "../../../atoms/authModalAtom";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
  FiLogIn,
  FiUserPlus,
  FiMoon,
  FiSun,
  FiShoppingCart,
} from "react-icons/fi";
import ItemMenu from "./itemMenu";
import { FaUser } from "react-icons/fa";
import { CartDrawerAtom } from "../../../atoms/cartDrawerAtom";
import { WishListDrawerAtom } from "../../../atoms/wishListDrawerAtom";
import { MdFavorite } from "react-icons/md";
import { cartState } from "../../../atoms/cartAtom";

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const setCartDrawerState = useSetRecoilState(CartDrawerAtom);
  const setWishListDrawerState = useSetRecoilState(WishListDrawerAtom);
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");

  const display = useBreakpointValue({ base: "flex", md: "none" });
  //const cartItems = useRecoilState(cartState)

  return (
    <>
      <Menu
        isLazy
        placement="bottom-end"
        closeOnBlur={true}
        closeOnSelect={true}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaUser />}
          variant="ghost"
          isRound={true}
          colorScheme="purple"></MenuButton>
        <MenuList>
          <ItemMenu
            title="Login"
            icon={FiLogIn}
            onClick={() =>
              setAuthModalState({
                isOpen: true,
                type: "login",
              })
            }
          />
          <ItemMenu
            title="SignUp"
            icon={FiUserPlus}
            onClick={() =>
              setAuthModalState({
                isOpen: true,
                type: "SignUp",
              })
            }
          />
          <ItemMenu
            title="Cart"
            icon={FiShoppingCart}
            onClick={() => setCartDrawerState({ isOpen: true, type: "cart" })}
            ItemMenuProp={{
              display: display,
            }}
          />

          <ItemMenu
            title="WishList"
            icon={MdFavorite}
            onClick={() =>
              setWishListDrawerState({ isOpen: true, type: "wishList" })
            }
            ItemMenuProp={{
              display: display,
            }}></ItemMenu>

          <ItemMenu
            icon={text === "Dark" ? FiMoon : FiSun}
            title={text}
            onClick={toggleColorMode}
          />
        </MenuList>
      </Menu>
    </>
  );
};
export default AuthButtons;
