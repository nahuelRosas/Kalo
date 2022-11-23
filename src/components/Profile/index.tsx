import React from "react";
import DataProfile from "./dataProfile";
import LateralMenu from "./lateralMenu";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
type indexProps = {
  user: any;
};

const Base: React.FC<indexProps> = ({ user }) => {
  return (
    <Box
      w={{ base: "100%", md: "20%" }}
      h={{ base: "100%", md: "100%" }}
      bg={useColorModeValue("white", "gray.800")}
      overflow="hidden">
      <DataProfile user={user} />
      <LateralMenu />
    </Box>
  );
};
export default Base;
