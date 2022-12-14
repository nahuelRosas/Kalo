import React, { ReactNode, useRef } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Input,
  IconButton,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { copyright, kalo } from "../../utils/constant";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("purple.100", "purple.100")}
      rounded={"full"}
      color={useColorModeValue("gray.900", "gray.900")}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("purple.200", "purple.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const toast = useToast();
  const formRef: any = useRef();

  const sendEmail = (event: any) => {
    event.preventDefault();
    if(
      event.target.email.value === "" ||
      event.target.email.value === null ||
      event.target.email.value === undefined
    ) {
      toast({
        title: "Something is wrong 😅",
        description: "We need your email",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      return;
    }
    emailjs.sendForm(
      "service_7cmqx88",
      "template_8c5hxde",
      event.target,
      "740Cjql2V5CM06Ab-"
    ).then((result) => {
      console.log(result.text);
      toast({
        title: "Check your email!❤️ ",
        description: "You are now suscribed to Kalo Newsletter!",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }, (error) => {
      console.log(error.text);
      toast({
        title: "There migh be a problem 🧐",
        description: "We need your email",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    });
    event.target.reset();
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"/aboutUs"}>About Us</Link>
              <Link href={"/contactUs"}>Contact Us</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"/helpCenter"}>Help Center</Link>
              <Link href={"/refundPolicy"}>Refund Policy</Link>
              <Link href={"/size"}>How to measure your size?</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"/cookiesPolicy"}>Cookies Policy</Link>
              <Link href={"/privacyPolicy"}>Privacy Policy</Link>
              <Link href={"/termsOfService"}>Terms of Service</Link>
              <Link href={"/returnPolicy"}>Return Policy</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Subscribe to our newsletter</ListHeader>
              <Stack direction={"row"}>
                <form onSubmit={sendEmail} ref={formRef}>
                  <Flex direction={"row"}>
                    <Input
                      name="email"
                      placeholder={"Your email address"}
                      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                      border={0}
                      _focus={{
                        bg: "whiteAlpha.300",
                      }}
                    />
                    <IconButton
                      bg={useColorModeValue("purple.400", "purple.300")}
                      color={useColorModeValue("white.500", "white.300")}
                      _hover={{
                        bg: "green.600",
                      }}
                      aria-label="Subscribe"
                      icon={<BiMailSend />}
                      type="submit"
                    />
                  </Flex>
                </form>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-around" }}
            align={{ md: "center" }}
          >
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.700", "gray.200")}
              textAlign="center"
            >
              {copyright} &copy; {new Date().getFullYear()} {kalo}
            </Text>
            <Stack direction={"row"} spacing={6} justify={"center"}>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com"}
              >
                <FiInstagram />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com"}
              >
                <FiFacebook />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"https://www.youtube.com"}>
                <FiYoutube />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
