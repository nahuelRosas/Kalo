import {
  IconButton,
  Menu,
  MenuButton, MenuList,
  useBreakpointValue,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import {
  FiLogIn, FiMoon, FiShoppingCart, FiSun, FiUserPlus
} from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "../../../atoms/authModalAtom";
import { CartDrawerAtom } from "../../../atoms/cartDrawerAtom";
import { WishListDrawerAtom } from "../../../atoms/wishListDrawerAtom";
import ItemMenu from "./itemMenu";
const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const setCartDrawerState = useSetRecoilState(CartDrawerAtom);
  const setWishListDrawerState = useSetRecoilState(WishListDrawerAtom);
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");

  const display = useBreakpointValue({ base: "flex", md: "none" });

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
