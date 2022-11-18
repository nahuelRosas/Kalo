import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent";
import LogoCompany from "./LogoCompany";
import { auth } from "../../firebase/clientApp";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      pl={8}
      pr={8}
      py={4}
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      boxShadow="xl">
      <LogoCompany />
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
