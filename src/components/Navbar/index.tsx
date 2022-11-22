import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import SearchInput from "./SearchBar/SearchInput";
import RightContent from "./RightContent/User";
import LogoCompany from "./LogoCompany";
import { auth } from "../../firebase/clientApp";
import Cart from "./RightContent/Cart/index";
import WishButton from "./RightContent/WishButton";
import MobileCategories from "./Categories/MobileCategories";

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
      <MobileCategories/>  
      <LogoCompany />
      <SearchInput />
      <Flex gap={3}>
        <WishButton />
        <Cart />
        <RightContent user={user} />
        <Flex display={{ base: "none", md: "flex" }}></Flex>
      </Flex>
    </Flex>
  );
};
export default Navbar;
