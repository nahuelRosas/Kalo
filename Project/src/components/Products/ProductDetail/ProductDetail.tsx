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
import { DocumentData } from "@firebase/firestore-types";
import React, { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { StyleShoes } from "../../../chakra/ColorIcon";
import useCartData from "../../../hooks/useCartData";
import Carousel from "../../Carousel";
import PriceTag from "../Price";
import Rating from "../Rating";
import CarouselImages from "./CarouselImages";
import IconsProducts from "./Icons/IconsProducts";

export type ProductCardProps = {
  product: DocumentData;
};

const ProductDetail: React.FC<ProductCardProps> = ({ product }) => {
  const bg = useColorModeValue("gray.200", "gray.700");
  console.log(product);
  const [selectedSize, setSelectedSize] = useState<{
    label: string;
    value: string;
  }>();

  useEffect(() => {
    setSelectedSize(product?.size[0]);
  }, [product?.size]);

  const { addOrIncrementProduct } = useCartData();
  return (
    <Container maxW="container.xl" mt="2rem" bg={bg}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={5}
        alignItems="center">
        <CarouselImages product={product} />
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            {product?.name}
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.500">
            {product?.brand}
          </Text>
          <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />
          <Rating
            defaultValue={product?.rating}
            size="lg"
            value={product?.rating}
          />
          <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />
          <Text fontSize="xl" fontWeight="light" color="gray.500">
            {product?.description}
          </Text>
          <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="gray.400"
            display="flex"
            alignItems="center">
            <PriceTag
              price={product?.price}
              rootProps={{
                fontSize: "2xl",
                fontWeight: "bold",
                color: "gray.500",
                mr: "0.5rem",
              }}
            />
            EUR
          </Text>
          <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />

          <HStack mt="1rem">
            <Grid templateColumns="repeat(6, 1fr)" gap={2} alignItems="center">
              {product?.size.map(
                (size: { value: string; label: string }, index: number) => {
                  return (
                    <Button
                      key={index}
                      borderRadius="full"
                      p={2}
                      colorScheme="purple"
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      _hover={{
                        color: "white",
                        bg: "purple.500",
                      }}
                      color={selectedSize === size ? "white" : "gray.700"}
                      bg={selectedSize === size ? "purple.500" : "gray.300"}>
                      {size.value}
                    </Button>
                  );
                }
              )}
            </Grid>
          </HStack>

          <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />

          <HStack mt="1rem">
            <Button
              width={"100%"}
              size="lg"
              variant="solid"
              colorScheme="purple"
              onClick={() => addOrIncrementProduct(product, selectedSize)}>
              Add to cart
            </Button>
            <IconButton
              size="lg"
              variant="outline"
              colorScheme="purple"
              aria-label="Add to wishlist"
              icon={<MdFavoriteBorder />}
            />
          </HStack>
        </Box>
      </Grid>

      <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />

      <Text fontSize="2xl" fontWeight="bold">
        Characteristics of {product?.name}
      </Text>
      <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />
      <Grid
        gap={5}
        mb="2rem"
        alignItems="center"
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <Box display="flex" alignItems="center">
          <IconsProducts type={"color"} color={`${product?.color}`} />
          <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
            Color:
          </Text>
          <Text fontSize="xl" fontWeight="light" color="gray.400">
            {product?.color[0].toUpperCase() + product?.color.slice(1)}
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <IconsProducts type={"externalMaterials"} />
          <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
            External Materials:
          </Text>
          <Text fontSize="xl" fontWeight="light" color="gray.400">
            {product?.exteriormaterials[0].toUpperCase() +
              product?.exteriormaterials.slice(1)}
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <IconsProducts type={"recommendedSport"} />
          <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
            Recommended Sport: :
          </Text>
          <Text fontSize="xl" fontWeight="light" color="gray.400">
            {product?.recommendedsport[0].toUpperCase() +
              product?.recommendedsport.slice(1)}
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <IconsProducts type={"fitType"} />
          <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
            Fit Type:
          </Text>
          <Text fontSize="xl" fontWeight="light" color="gray.400">
            {product?.fittype[0].toUpperCase() + product?.fittype.slice(1)}
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <IconsProducts type={"soleMaterials"} />

          <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
            Sole Materials:
          </Text>
          <Text fontSize="xl" fontWeight="light" color="gray.400">
            {product?.solematerials[0].toUpperCase() +
              product?.solematerials.slice(1)}
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <IconsProducts type={"style"} />
          <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
            Style:
          </Text>
          <Text fontSize="xl" fontWeight="light" color="gray.400">
            {product?.style[0].toUpperCase() + product?.style.slice(1)}
          </Text>
        </Box>
      </Grid>
      <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />

      <Text fontSize="2xl" fontWeight="bold">
        Reviews of {product?.name}
      </Text>

      <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />

      <Grid
        gap={5}
        mb="2rem"
        alignItems="center"
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <Box display="flex" alignItems="center">
          <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
            Average Rating:
          </Text>
          <Text fontSize="xl" fontWeight="light" color="gray.400">
            {product?.rating}
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
            Number of Reviews:
          </Text>
          <Text fontSize="xl" fontWeight="light" color="gray.400">
            {product?.numReviews}
          </Text>
        </Box>
      </Grid>
      <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />

      {product?.reviews.map(
        (
          review: {
            name: string;
            rating: string;
            comment: string;
          },
          index: number
        ) => {
          return (
            <>
              <Divider mt="1rem" mb="1rem" />
              <Grid
                gap={5}
                mb="2rem"
                alignItems="center"
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                key={index}>
                <Box display="flex" alignItems="center">
                  <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
                    Reviewer:
                  </Text>
                  <Text fontSize="xl" fontWeight="Light" ml={2} mr={2}>
                    {review.name[0].toUpperCase() + review.name.slice(1)}
                  </Text>
                </Box>
                <Box display="flex" alignItems="center">
                  <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
                    Rating:
                  </Text>
                  <Text fontSize="xl" fontWeight="Light" ml={2} mr={2}>
                    <Rating
                      disableText
                      defaultValue={product?.rating}
                      size="lg"
                      value={product?.rating}
                    />
                  </Text>
                </Box>
                <Box display="flex" alignItems="center">
                  <Text fontSize="xl" fontWeight="bold" ml={2} mr={2}>
                    Comment:
                  </Text>
                  <Text fontSize="xl" fontWeight="Light" ml={2} mr={2}>
                    {review.comment}
                  </Text>
                </Box>
              </Grid>
            </>
          );
        }
      )}
      <Divider mt="1rem" mb="1rem" borderColor={"transparent"} />
    </Container>
  );
};

export default ProductDetail;
