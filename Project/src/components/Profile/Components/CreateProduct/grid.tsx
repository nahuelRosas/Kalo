import { Flex, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import React from "react";

type gridProps = {
  children: React.ReactNode | null;
};

const GridComponent: React.FC<gridProps> = ({ children }) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      px={6}
      py={4}
      bg={useColorModeValue("gray.50", "gray.700")}
      borderBottomWidth="1px">
      <SimpleGrid columns={2} spacing={4} w="full">
        {children}
      </SimpleGrid>
    </Flex>
  );
};
export default GridComponent;
