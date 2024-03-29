import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Base from "./components/LateralMenu/Base";
import ProductsComponent from "./Products";

const Index: React.FC = () => {
  return (
    <Container
      maxW="100vw"
      mt={10}
      bg={useColorModeValue("gray.200", "gray.800")}>
      <Flex
        direction={{ base: "column", md: "row" }}
        shadow={{ md: "xl" }}
        rounded={{ md: "lg" }}>
        <Base />
        <Box
          as="form"
          w="full"
          mt={"-1"}
          maxW="full"
          mx="auto"
          bg={useColorModeValue("gray.100", "gray.800")}
          overflow="hidden"
          shadow="base">
          <VStack align="stretch" spacing={0}>
            <ProductsComponent />
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
