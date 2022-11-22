import {
  Avatar,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";
import { auth } from "../../../../firebase/clientApp";
import { FaUser } from "react-icons/fa";
import ButtonCart from "../Cart/ButtonCart";
import { MdFavorite, MdLogout } from "react-icons/md";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const { toggleColorMode } = useColorMode();
  const toast = useToast();
  const text = useColorModeValue("Dark", "Light");
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
            base: <FaUser />,
            md: <Avatar size="sm" src={src} />,
          })}
          variant="ghost"
          isRound={true}
          colorScheme="purple"
        />
        <MenuList>
          <Link href="/profile">
            <MenuItem width="100%" aria-label="profile">
              <Icon
                as={CgProfile}
                display={
                  useBreakpointValue({
                    base: "none",
                    md: "block",
                  }) as string
                }
                boxSize={useBreakpointValue({ base: 4, md: 5 })}
                color={
                  useColorModeValue("purple.600", "purple.400") as
                    | "purple.600"
                    | "purple.400"
                }
                mr={2}
              />
              <Avatar
                size="sm"
                src={src}
                mr={2}
                display={
                  useBreakpointValue({
                    base: "block",
                    md: "none",
                  }) as string
                }
              />
              Profile
            </MenuItem>
          </Link>
          <Link href="/orders">
            <MenuItem>
              <Icon
                as={IoBagCheckOutline}
                boxSize={useBreakpointValue({ base: 4, md: 5 })}
                color={
                  useColorModeValue("purple.600", "purple.400") as
                    | "purple.600"
                    | "purple.400"
                }
                mr={2}
              />
              Orders
            </MenuItem>
            <MenuItem
            display={{base:"flex", md: "none"}}>
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
              Wish List
            </MenuItem>
          </Link>
          <MenuItem
            onClick={toggleColorMode}
            width="100%"
            aria-label="colorMode">
            <Icon
              as={text === "Dark" ? BsMoonFill : BsSunFill}
              boxSize={useBreakpointValue({ base: 4, md: 5 })}
              color={
                useColorModeValue("purple.600", "purple.400") as
                  | "purple.600"
                  | "purple.400"
              }
              mr={2}
            />
            <Text>{text}</Text>
          </MenuItem>
          <ButtonCart />
          <MenuItem
            width="100%"
            aria-label="logout"
            onClick={() => {
              logOut();
            }}>
          <Icon
              as={MdLogout}
              boxSize={useBreakpointValue({ base: 4, md: 5 })}
              color={
                useColorModeValue("purple.600", "purple.400") as
                  | "purple.600"
                  | "purple.400"
              }
              mr={2}
            />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
export default UserMenu;
