import {
  Grid,
  Box,
  Text,
  useColorModeValue,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DocumentData } from "@firebase/firestore-types";
import { Divider, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartItemAtom";
import { useToast } from "@chakra-ui/react";

type CardCartProps = {
  product: DocumentData;

};

const CardCart: React.FC<CardCartProps> = ({ product }) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(1);
  const bg = useColorModeValue("white", "gray.800");
  const toast = useToast();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleDelete = () => {
    // return partialTotal
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    toast({
      title: "Item removed.",
      description: "We've removed the item from your cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    
    setCartItems(newCartItems);
  };
  const partialTotal = (product?.prices[0].unit_amount * quantity) / 100;

  return (
    <Box key={product?.id} p={5} shadow="md" bg={bg} borderRadius={"md"}>
      <Grid templateColumns="repeat(2, 1fr)">
        <Image
          src={product?.images[0]}
          borderRadius="md"
          alt="product"
          maxHeight={{ base: "5rem", md: "7rem" }}
          mt={{ base: "8", md: "none" }}
        />
        <Flex justifyContent={"flex-start"} ml={-150} direction="column">
          <Flex justify={"flex-end"}>

            <IconButton
              aria-label="Delete"
              _hover={{ bg: "red.500" }}
              isRound={true}
              icon={<DeleteIcon />}
              onClick={handleDelete}
            />
          </Flex>
          <Text
            fontSize="lg"
            fontWeight="bold"
            justifyContent={"center"}
            mt={-2.5}
          >
            {product?.name}
          </Text>
          <Flex
            justifyContent={{ base: "flex-end", md: "flex-start" }}
            mt={4}
            ml={6}
          >
            <Button
              onClick={decreaseQuantity}
              size="sm"
              maxWidth={"2rem"}
              _hover={{ background: "purple.300" }}
            >
              -
            </Button>
            <Text ml={2} mr={2} mt={1.5} fontSize="md">
              {quantity}
            </Text>
            <Button
              onClick={increaseQuantity}
              size="sm"
              maxWidth={"2rem"}
              _hover={{ background: "purple.300" }}
            >
              +
            </Button>
          </Flex>
          <Flex justifyContent={"flex-end"}>
            <Text fontWeight="semibold" mt={{ base: "6", md: "none" }}>
              Price: €{partialTotal}.00
            </Text>
          </Flex>
        </Flex>
      </Grid>
      <Divider />
    </Box>
  );
};

export default CardCart;
