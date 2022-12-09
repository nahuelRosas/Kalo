import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import {
  FiCheckSquare,
  FiHeart,
  FiLogOut,
  FiMoon,
  FiShoppingCart,
  FiSun,
  FiUser,
} from "react-icons/fi";
import { useSetRecoilState } from "recoil";
import { CartDrawerAtom } from "../../../atoms/cartDrawerAtom";
import { auth } from "../../../firebase/clientApp";
import useUserData from "../../../hooks/useUserData";
import ItemMenu from "./itemMenu";
import useCartData from "../../../hooks/useCartData";

const UserMenu: React.FC = () => {
  const { userData } = useUserData();
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");
  const toast = useToast();
  const { clearCart } = useCartData();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast({
          title: "Logged out",
          description: "You have been logged out",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const display = useBreakpointValue({
    base: "flex",
    md: "none",
  }) as string;

  const setCartDrawerState = useSetRecoilState(CartDrawerAtom);
  const src = userData?.photoURL;
  return (
    <>
      {/*  <ButtonContent state={CartDrawerAtom} icon={FiShoppingCart} type={"cart"}>
        <CartDrawer />
      </ButtonContent>
      <ButtonContent
        state={WishListDrawerAtom}
        icon={FiHeart}
        type={"wishList"}>
        <WishListDrawer />
      </ButtonContent> */}
      <Menu
        isLazy
        placement="bottom-end"
        closeOnBlur={true}
        closeOnSelect={true}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Avatar size="sm" src={src} />}
          variant="ghost"
          isRound={true}
          colorScheme="purple"
        />
        <MenuList>
          <ItemMenu
            icon={FiUser}
            title="Profile"
            href="/configuration/profile"
          />
          <ItemMenu icon={FiCheckSquare} title="Orders" href="/orders" />
          <ItemMenu
            icon={FiHeart}
            title="Wishlist"
            href="/configuration/wishlist"
            ItemMenuProp={{
              display: display,
            }}
          />
          <ItemMenu
            icon={text === "Dark" ? FiMoon : FiSun}
            title={text}
            onClick={toggleColorMode}
          />
          <ItemMenu
            icon={FiShoppingCart}
            title={"Cart"}
            onClick={() => setCartDrawerState({ isOpen: true, type: "cart" })}
            ItemMenuProp={{
              display: display,
            }}
          />
          <ItemMenu
            title="LogOut"
            icon={FiLogOut}
            onClick={() => {
              logOut();
              clearCart();
            }}
          />
        </MenuList>
      </Menu>
    </>
  );
};
export default UserMenu;
