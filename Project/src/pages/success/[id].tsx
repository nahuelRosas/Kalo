import React, { useState } from "react";
import { useRouter } from "next/router";
import useCartData from "../../hooks/useCartData";
import useUserData from "../../hooks/useUserData";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

type SuccessProps = {};

const Success: React.FC<SuccessProps> = () => {
  const [isClean, setIsClean] = useState(false);
  const router = useRouter();
  const { userData } = useUserData();
  const { id } = router.query;
  const { clearCart } = useCartData();
  if (!isClean) {
    setIsClean(true);
    clearCart();
  }

  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <Container maxW="container.xl" bg={bg}>
      <Center
        h="100vh"
        w="100%"
        bg={bg}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        shadow={"dark-lg"}>
        <VStack>
          <Text fontSize="3xl" fontWeight="bold" color="teal.300">
            Payment Successful
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="teal.300">
            Order ID: {id}
          </Text>

          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </VStack>
      </Center>
    </Container>
  );
};
export default Success;
