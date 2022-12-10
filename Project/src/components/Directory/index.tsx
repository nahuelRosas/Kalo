import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import PopoverDirectory from "../Popover/Directory/PopoverDirectory";

const Directory = () => {
  return (
    <Box maxW={"100vw"}>
      <Flex
        display={{ base: "none", md: "flex" }}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <PopoverDirectory />
      </Flex>
    </Box>
  );
};

export default Directory;
