import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import LateralMenu from "./LateralMenu";
const Base: React.FC = () => {
  return (
    <Box
      w={{ base: "100%", md: "20%" }}
      h={{ base: "100%", md: "100%" }}
      bg={useColorModeValue("white", "gray.700")}
      overflow="hidden">
      <LateralMenu />
    </Box>
  );
};
export default Base;
