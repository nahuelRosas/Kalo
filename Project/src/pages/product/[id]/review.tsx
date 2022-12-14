import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { firestore } from "../../../firebase/clientApp";
import useProductsData from "../../../hooks/useProductsData";
import useUserData from "../../../hooks/useUserData";

type value = {
  name: string;
  comment: string;
  rating: number;
};

const Review: React.FC<value> = () => {
  const router = useRouter();
  const { id } = router.query;
  const { userData } = useUserData();
  const toast = useToast();
  const { findProduct } = useProductsData();

  const product = findProduct(id as string);

  const [value, setValue] = useState<value>({
    name: userData?.displayName,
    comment: "",
    rating: 0,
  });

  useEffect(() => {
    if (userData) {
      setValue({ ...value, name: userData.displayName });
    }
  }, [userData, value]);

  const [loading, setLoading] = useState(false);

  const updateReview = async () => {
    setLoading(true);
    if (value.comment !== "" && value.rating > 0) {
      if (!product) return;
      const docRef = doc(firestore, "products", product.id);
      try {
        await updateDoc(docRef, {
          ...product,
          reviews: [...product.reviews, value],
        });
        toast({
          title: "Thanks for your review!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } catch (e: unknown | any) {
        toast({
          title: "An error occurred.",
          description: e.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast({
        title: "Please fill all the fields.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <Container
      maxW="2xl"
      mt={20}
      backgroundColor={useColorModeValue("white", "gray.800")}
      centerContent>
      <Flex
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
                    setValue({ ...value, rating: ratingValue });
                  }}
                />

                <AiFillStar
                  size={40}
                  cursor={"pointer"}
                  color={ratingValue <= value.rating ? "#ffc107" : "#e4e6e9"}
                />
              </label>
            );
          })}
        </Flex>
        <Textarea
          variant="filled"
          mt="5"
          placeholder="Type your review..."
          value={value.comment}
          onChange={(e) => {
            setValue({ ...value, comment: e.target.value });
          }}
        />
        <Button
          colorScheme="purple"
          mb="5"
          mt="5"
          onClick={updateReview}
          isLoading={loading}
          loadingText="Sending review"
          spinnerPlacement="end">
          Send review
        </Button>
      </Flex>
    </Container>
  );
};

export default Review;
