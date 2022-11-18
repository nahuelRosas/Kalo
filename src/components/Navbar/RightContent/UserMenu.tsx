import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  useToast,
  MenuItem,
  MenuList,
  useColorModeValue,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/clientApp";
import { useBreakpointValue } from "@chakra-ui/react";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const { toggleColorMode } = useColorMode();
  const toast = useToast();
  const text = useColorModeValue("Dark", "Light");

  const src =
    user?.photoURL ||
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1667478654/avatars/isemxk5z1opyiwbu9fao.svg";
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
          icon={useBreakpointValue({
            base: <HamburgerIcon />,
            md: <Avatar size="sm" src={src} />,
          })}
          variant="ghost"
          isRound={true}
          colorScheme="purple"
        />
        <MenuList>
          <Link href="/profile">
            <MenuItem
              icon={useBreakpointValue({
                base: <Avatar size="xs" src={src} />,
                md: <CgProfile size={20} />,
              })}>
              Profile
            </MenuItem>
          </Link>
          <Link href="/orders">
            <MenuItem icon={<IoBagCheckOutline size={20} />}>Orders</MenuItem>
          </Link>
          <MenuItem
            onClick={toggleColorMode}
            width="100%"
            aria-label="colorMode">
            {text === "Dark" ? (
              <BsMoonFill size={20} />
            ) : (
              <BsSunFill size={20} />
            )}
            <Text ml="2">{text}</Text>
          </MenuItem>
          <MenuItem
            icon={<MdLogout size={20} />}
            onClick={() => {
              signOut(auth);
              toast({
                title: "Signed Out",
                description: "You have signed out successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
export default UserMenu;
