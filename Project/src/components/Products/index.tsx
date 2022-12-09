import {
  Box,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
/* import Image from "next/image"; */
import Link from "next/link";
import React from "react";
import PriceTag from "./Price";
import Rating from "./Rating";
import { useRecoilState, useSetRecoilState } from "recoil";
// import { cartState, cartItem, addToCart } from "../../atoms/cartAtom";
import productsActive from "../../hooks/useProductsData";

type ProductCardProps = {
  product: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const [cart, setCart] = useRecoilState(cartState);

  // const handleAddToCart = (item: any) => {
  //   const newCart = addToCart(cart, product);
  //   setCart(newCart as never[]);
  // };

  const bg = useColorModeValue("white", "gray.700");
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
            src={product?.images[0]}
            alt={product?.name}
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
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
            <Rating defaultValue={0} size="sm" value={0} />
          </HStack>
        </Stack>
      </Link>
      {/* <Button onClick={()=>handleAddToCart(product)}>Add Cart</Button> */}
    </Stack>
  );
};
export default ProductCard;
