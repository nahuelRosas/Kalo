import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type baseProps = {
  title: string;
  children: React.ReactNode | null;
};

const BaseComponent: React.FC<baseProps> = ({ title, children }) => {
  return (
    <Box
      as="form"
      w="full"
      mt={"-1"}
      maxW="full"
      mx="auto"
      bg={useColorModeValue("white", "gray.700")}
      overflow="hidden"
      shadow="base">
      <VStack align="stretch" spacing={0}>
        <Flex
          justify="space-between"
          align="center"
          px="6"
          py="4"
          bg={useColorModeValue("gray.50", "gray.800")}
          borderBottomWidth="1px">
          <Heading
            size="lg"
            fontWeight="bold"
            color={useColorModeValue("gray.900", "white")}>
            {title}
          </Heading>
        </Flex>
        {children}
      </VStack>
    </Box>
  );
};
export default BaseComponent;
