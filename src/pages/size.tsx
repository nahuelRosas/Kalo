import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function Size() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
        <Box marginTop={"10"} w="full" bg="purple" px="100px" py="40px">
          <Flex justifyContent="space-between" alignItems="center" pb="30px">
            <Heading color="whiteAlpha.900">Size guide</Heading>
          </Flex>
        </Box>
        <Flex>
          <Box bg={"whiteAlpha.100"} overflow="hidden" p={50} boxShadow="lg">
            <Box>
              <Text fontSize="2xl" as="i" pb="20px">
                Footwear
              </Text>
              <Text fontSize="lg" mt={4}>
                Take the measurements of your feet before choosing your
                sneakers. Remember to do this at the end of the day, as your
                feet may swell and thus increase in size as the day goes by.
                Distribute your weight equally on both feet and wear socks that
                you wear regularly. Remember to measure both feet. The
                measurement between them may vary and keep in mind that the
                larger foot is always taken as a reference.
              </Text>
              <Flex
                mt={4}
                justify="center"
                direction={{ base: "column", md: "row" }}>
                <Image
                  ml={2}
                  src="https://www.dexter.com.ar/on/demandware.static/-/Sites-Dexter-Library/default/dwe9ed6e8f/images/talles/tallespie1.jpg"
                  alt="size1"
                />
                <Image
                  ml={2}
                  src="https://www.dexter.com.ar/on/demandware.static/-/Sites-Dexter-Library/default/dw3419c4d9/images/talles/tallespie2.jpg"
                  alt="size2"
                />
                <Image
                  ml={2}
                  src="https://www.dexter.com.ar/on/demandware.static/-/Sites-Dexter-Library/default/dw766e8056/images/talles/tallespie3.jpg"
                  alt="size3"
                />
              </Flex>
              <Text fontSize="lg" mt={4} fontWeight="semibold">
                Step 1:
              </Text>
              <Text fontSize="lg" mt={2}>
                Take a piece of white paper and lay it on a hard surface,
                perpendicular to the wall. Tape it at the ends to make sure it
                doesn´t move. Stand up straight and rest your heel against the
                baseboard, with no air between the two.
              </Text>
              <Text fontSize="lg" mt={4} fontWeight="semibold">
                Step 2:
              </Text>
              <Text fontSize="lg" mt={2}>
                With a pencil or pen mark on the paper the entire outline of the
                foot, which should be relaxed, without contracting the toes.
                Remember to repeat the process with the other foot.
              </Text>
              <Text fontSize="lg" mt={4} fontWeight="semibold">
                Step 3:
              </Text>
              <Text fontSize="lg" mt={2}>
                Take the tape measure and measure the length from the heel to
                the longest toe you have. Repeat this step with the other foot.
                The longer measurement will be the reference size in
                centimeters.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
