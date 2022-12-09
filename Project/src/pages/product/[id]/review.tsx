import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Container,
  Flex,
  Heading,
  Textarea,
  Image,
  Text,
  Input,
} from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import { AiFillStar } from "react-icons/ai";
import useProductsData from "../../../hooks/useProductsData";

type ReviewProps = {
  product: DocumentData;
  ratingValue: number;
};

const Review: React.FC<ReviewProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { productsActive } = useProductsData();

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    console.log(review);
    console.log(rating);
  };

  return (
    <Container
      maxW="2xl"
      mt={20}
      backgroundColor="whiteAlpha.900"
      centerContent>
      {productsActive.map((product: DocumentData, index: number) => {
        if (product.id === id) {
          return (
            <Flex
              key={index}
              alignContent="center"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              h={"100%"}
              w={"100%"}>
              <Text fontWeight={"semibold"}>{product?.name}</Text>
              <Image
                src={product?.images[0]}
                alt={product?.name}
                w="xs"
                h="xs"
                objectFit="cover"
                objectPosition="center"
                borderRadius="md"
              />
              <Heading as="h1" size="lg">
                Please review our product
              </Heading>

              <Flex mt="5">
                {[...Array(5)].map((_star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <Input
                        display={"none"}
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => {
                          setRating(ratingValue), console.log(ratingValue);
                        }}
                      />

                      <AiFillStar
                        size={40}
                        cursor={"pointer"}
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e6e9"
                        }
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                      />
                    </label>
                  );
                })}
              </Flex>
              <Textarea
                variant="filled"
                mt="5"
                placeholder="Type your review..."
                value={review}
                onChange={handleReview}
              />
              <Button colorScheme="teal" mb="5" mt="5" onClick={handleSubmit}>
                Send review
              </Button>
            </Flex>
          );
        }
      })}
    </Container>
  );
};

export default Review;
