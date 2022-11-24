import React from "react";
import DataProfile from "./dataProfile";
import LateralMenu from "./lateralMenu";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { User } from "firebase/auth";
type indexProps = {
  user: User | undefined | null;
  currentComponent: string;
};

const Base: React.FC<indexProps> = ({ user, currentComponent }) => {
  return (
    <Box
      w={{ base: "100%", md: "20%" }}
      h={{ base: "100%", md: "100%" }}
      bg={useColorModeValue("white", "gray.800")}
      overflow="hidden">
      <DataProfile user={user} />
      <LateralMenu currentComponent={currentComponent} />
    </Box>
  );
};
export default Base;
