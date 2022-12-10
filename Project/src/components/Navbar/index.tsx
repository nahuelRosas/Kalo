import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Cart from "../Cart/ButtonCart";
import MobileCategories from "./Categories/MobileCategories";
import LogoCompany from "./LogoCompany";
import RightContent from "./RightContent";
import SearchInput from "./SearchBar/SearchInput";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-evenly"
      wrap="wrap"
      w="100%"
      pl={8}
      pr={8}
      py={4}
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      boxShadow="xl">
      <MobileCategories />
      <LogoCompany />
      <SearchInput />
      <Flex>
        <Cart />
        <RightContent user={user} />
      </Flex>
    </Flex>
  );
};
export default Navbar;
