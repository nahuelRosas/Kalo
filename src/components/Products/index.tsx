import { Box, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceTag from "./Price/priceTag";

type ProductCardProps = {
  product: DocumentData;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const bg = useColorModeValue("white", "gray.700");
  return (
    <Stack
      mt="2rem"
      mb="2rem"
      bg={bg}
      h="110%"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ transform: "scale(1.1)" }}
      transition="all 0.2s"
      cursor="pointer"
      ml="1rem">
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

      <Link href={`/product/${product?.id}`}>
        <Stack p={"10px"}>
          <Stack spacing="1" p={"10px"}>
            <Text
              fontWeight="bold"
              fontSize="lg"
              overflowY={"hidden"}
              textOverflow="ellipsis"
              h={"1.5rem"}>
              {product?.name}
            </Text>
            <PriceTag
              price={product?.prices[0].unit_amount}
              currency={product?.prices[0].currency}
            />
          </Stack>
          <HStack>
            {/* <Rating defaultValue={1} size="sm" /> */}
            {/* <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {1} reviews
            </Text> */}
          </HStack>
        </Stack>
      </Link>
    </Stack>
  );
};
export default ProductCard;

// interface Props {
//   defaultValue?: number;
//   max?: number;
//   size?: "sm" | "md" | "lg" | "xl";
//   rootProps?: StackProps;
// }

// export const Rating = (props: Props) => {
//   const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
//   const color = useColorModeValue("gray.200", "gray.600");
//   const activeColor = useColorModeValue("teal.500", "teal.200");
//   return (
//     <HStack spacing="0.5" {...rootProps}>
//       {Array.from({ length: max })
//         .map((_, index) => index + 1)
//         .map((index) => (
//           <Icon
//             key={index}
//             as={FaStar}
//             fontSize={size}
//             color={index <= defaultValue ? activeColor : color}
//           />
//         ))}
//     </HStack>
//   );
// };
