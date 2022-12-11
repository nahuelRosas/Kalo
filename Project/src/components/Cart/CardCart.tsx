import {
  Box,
  Divider,
  Flex,
  Grid,
  IconButton,
  Image,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import React, { useEffect, useState } from "react";
import { FiMinusCircle, FiPlusCircle, FiTrash2 } from "react-icons/fi";
import useCartData from "../../hooks/useCartData";
import FormatPrice from "../Products/Price/formatPrice";

type CardCartProps = {
  itemState: DocumentData;
};

const CardCart: React.FC<CardCartProps> = ({ itemState }) => {
  const bg = useColorModeValue("white", "gray.800");
  const { price, product, quantity, size } = itemState;

  const [image, setImage] = useState<string>("");
  const { addOrIncrementProduct, decrementProduct, deleteProduct } =
    useCartData();
  useEffect(() => {
    const random = Math.floor(Math.random() * product.images.length);
    setImage(product.images[random]);
  }, [product.images]);

  return (
    <Box m="2" p={5} shadow="md" bg={bg} borderRadius={"md"}>
      <Grid templateColumns="repeat(2, 1fr)">
        <Image
          src={image}
          borderRadius="md"
          alt="product"
          maxHeight={{ base: "5rem", md: "7rem" }}
          mt={{ base: "8", md: "none" }}
          fallback={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="purple.500"
              size="xl"
              maxHeight={{ base: "5rem", md: "7rem" }}
              mt={{ base: "12", md: "none" }}
              ml={{ base: "10", md: "none" }}
            />
          }
        />
        <Flex justifyContent={"flex-start"} ml={-150} direction="column">
          <Flex justify={"flex-end"}>
            <IconButton
              aria-label="Delete"
              _hover={{ bg: "red.300", color: "black" }}
              isRound
              icon={<FiTrash2 />}
              onClick={() => deleteProduct(product, size)}
              colorScheme="purple"
              variant="ghost"
              fontSize="xl"
            />
          </Flex>
          <Text
            fontWeight="semibold"
            mt={{ base: "1", md: "none" }}
            fontSize={{ base: "sm", md: "lg" }}
            color={"gray.500"}>
            {product.name} - {size.label}
          </Text>
          <Flex
            justifyContent={{ base: "flex-end", md: "flex-start" }}
            mt={4}
            ml={6}
            alignContent={"center"}
            alignItems={"center"}
            justifyItems={"center"}>
            <IconButton
              onClick={() => decrementProduct(product, size, true)}
              aria-label="decrement"
              icon={<FiMinusCircle />}
              isRound
              colorScheme="purple"
              variant="ghost"
              fontSize="2xl"
              _hover={{ bg: "red.300", color: "black" }}
              disabled={quantity <= 0}
            />
            <Text fontWeight="semibold" ml={3} mr={3}>
              {quantity}
            </Text>
            <IconButton
              onClick={() => addOrIncrementProduct(product, size, true)}
              aria-label="increment"
              icon={<FiPlusCircle />}
              isRound
              colorScheme="purple"
              variant="ghost"
              fontSize="2xl"
              _hover={
                quantity >= product.stock
                  ? { bg: "red.300", color: "black" }
                  : { bg: "green.300", color: "black" }
              }
              disabled={quantity >= product.stock}
            />
          </Flex>
          <Flex justifyContent={"flex-end"}>
            <Text fontWeight="semibold" mt={{ base: "6", md: "none" }}>
              Price: {FormatPrice({ value: price })}
            </Text>
          </Flex>
        </Flex>
      </Grid>
      <Divider />
    </Box>
  );
};

export default CardCart;
