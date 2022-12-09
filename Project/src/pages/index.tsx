import { Container, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import Banner from "../components/Home/Banner";
import Carousels from "../components/Home/Carousels";
import Publicity from "../components/Home/advertising";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container
      maxW="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      color={useColorModeValue("grey.100", "grey.800")}
      bg={useColorModeValue("gray.100", "grey.800")}
      alignItems="center"
      mb="1rem">
      <Banner />
      <Carousels />
      <Publicity />
    </Container>
  );
}
