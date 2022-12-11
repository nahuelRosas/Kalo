import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useCartData from "../../../hooks/useCartData";
import PriceTag from "../Price";
import Rating from "../Rating";

type ProductCardProps = {
  product: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const bg = useColorModeValue("white", "gray.700");
  const { addOrIncrementProduct } = useCartData();
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const random = Math.floor(Math.random() * product.images.length);
    setImage(product.images[random]);
  }, [product.images]);

  return (
    <Stack
      mt="2rem"
      mb="2rem"
      bg={bg}
      maxH={"480px"}
      h="auto"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ transform: "scale(1.05)" }}
      transition="all 0.2s"
      cursor="pointer"
      ml="1rem">
      <Link href={`/product/${product?.id}`}>
        <Box position="relative">
          <Image
            src={image}
            alt={product?.name}
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            fallback={
              <Center mt={{ base: "25", md: "none" }}>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="purple.500"
                  size="xl"
                  maxHeight={{ base: "5rem", md: "7rem" }}
                  mt={{ base: "25", md: "none" }}
                />
              </Center>
            }
          />
        </Box>
        <Stack
          p={"10px"}
          spacing="0.5"
          alignItems="flex-start"
          justifyContent="space-between">
          <Stack
            spacing="0.5"
            alignItems="flex-start"
            justifyContent="space-between">
            <Text
              fontWeight="bold"
              fontSize="lg"
              overflowY={"hidden"}
              textOverflow="ellipsis"
              h={"1.5rem"}>
              {product?.name}
            </Text>
            <PriceTag price={product?.price} />
          </Stack>
          <HStack
            spacing="0.5"
            alignItems="flex-start"
            justifyContent="space-between">
            <Rating
              defaultValue={product?.rating}
              size="sm"
              value={product?.rating}
            />
          </HStack>
        </Stack>
      </Link>
      <Button
        w="100%"
        colorScheme="purple"
        variant="ghost"
        borderRadius={0}
        onClick={() => addOrIncrementProduct(product, product.size[0])}>
        Add Cart
      </Button>
    </Stack>
  );
};
export default ProductCard;
