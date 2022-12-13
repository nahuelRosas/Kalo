import {
  Box,
  Button,
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
import useWishlistData from "../../hooks/useWishlistData";
import FormatPrice from "../Products/Price/formatPrice";
import Link from "next/link";


type CardWishlistProps = {
  itemState: DocumentData;
};

const CardWishlist: React.FC<CardWishlistProps> = ({ itemState }) => {
  const bg = useColorModeValue("white", "gray.800");
  const { price, product, quantity, size } = itemState;

  const [image, setImage] = useState<string>("");
  const { deleteProduct, closeDrawer } =
    useWishlistData();
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

          <Text fontWeight="semibold" mt={{ base: "6", md: "none" }}>
            Price: {FormatPrice({ value: price })}
          </Text>
          <Flex justifyContent={"flex-end"}>
            <Link href={`/product/${product?.id}`}>
              <Button bg="purple.300" color="white" _hover={{ bg: "purple.300", color: "black" }} onClick={closeDrawer}>view product details</Button>
            </Link>
          </Flex>
        </Flex>
      </Grid>
      <Divider />
    </Box>
  );
};

export default CardWishlist;
