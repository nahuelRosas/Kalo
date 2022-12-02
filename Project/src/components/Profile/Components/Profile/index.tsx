import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import React, { SetStateAction, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";

type indexProps = { user?: User | null };

const Profile: React.FC<indexProps> = ({ user }) => {
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phoneNumber || "");
  const [avatar, setAvatar] = useState(user?.photoURL);
  const [avatarPreview, setAvatarPreview] = useState(user?.photoURL);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const toast = useToast();
  const {
    isOpen: isOpenAvatar,
    onOpen: onOpenAvatar,
    onClose: onCloseAvatar,
  } = useDisclosure();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();

  const updateProfileDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(
          reader.result as SetStateAction<string | null | undefined>
        );
        setAvatar(reader.result as SetStateAction<string | null | undefined>);
      }
    };

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSubmit = async () => {
    if (password !== passwordConfirmation) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const _user = {
        name,
        email,
        phone,
        password,
        avatar,
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      as="form"
      //   onSubmit={handleSubmit}
      w="full"
      mt={8}
      ml={6}
      maxW="full"
      mx="auto"
      bg={useColorModeValue("white", "gray.700")}
      overflow="hidden">
      <VStack align="stretch" spacing={0}>
        <Box w={{ base: "100%", md: "100%" }}>
          <VStack align="stretch" spacing={0}>
            {" "}
            <Box p={6}>
              <Flex
                justify="center"
                align="center"
                direction="column"
                py={12}
                px={6}
                bg={useColorModeValue("gray.50", "gray.900")}>
                <Avatar
                  size="2xl"
                  src={avatarPreview as string | undefined}
                  mb={4}
                  pos="relative"
                />
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="sm"
                  onClick={onOpenAvatar}>
                  Change Avatar
                </Button>
                <Modal isOpen={isOpenAvatar} onClose={onCloseAvatar}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Change Photo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl id="image">
                        <FormLabel>Image</FormLabel>
                        <InputGroup
                          size="md"
                          bg={useColorModeValue("alphaWhite", "gray.800")}
                          borderRadius="md"
                          color="gray.500"
                          fontSize="sm"
                          fontWeight="medium"
                          lineHeight="short">
                          <InputLeftElement pointerEvents="none">
                            <Icon as={RiImageAddLine} color="gray.300" />
                          </InputLeftElement>
                          <Input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={updateProfileDataChange}
                            sx={{
                              "::file-selector-button": {
                                height: 10,
                                padding: 0,
                                mr: 4,
                                background: "none",
                                border: "none",
                                fontWeight: "bold",
                              },
                            }}
                          />
                        </InputGroup>
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                        <Button
                          colorScheme="teal"
                          variant="ghost"
                          onClick={() => {
                            onCloseAvatar();
                            setAvatar(user?.photoURL);
                            setAvatarPreview(user?.photoURL);
                          }}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="teal"
                          variant="solid"
                          mr={3}
                          onClick={onCloseAvatar}>
                          Save
                        </Button>
                      </Grid>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
              <Grid
                mt={6}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(1, 1fr)",
                }}
                gap={6}>
                <GridItem colSpan={1}>
                  <FormControl id="name">
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="name"
                      value={
                        name as string | number | readonly string[] | undefined
                      }
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="email"
                      value={
                        email as string | number | readonly string[] | undefined
                      }
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl id="phone">
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.900")}
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone"
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <Flex
                justify="center"
                align="center"
                direction="column"
                py={12}
                px={6}
                bg={useColorModeValue("white", "gray.700")}>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="lg"
                  onClick={onOpenConfirm}>
                  Update Profile
                </Button>
              </Flex>
              <Modal isOpen={isOpenConfirm} onClose={onCloseConfirm}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Confirm</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                      />
                    </FormControl>
                    <FormControl mt={4} id="password_confirmation" isRequired>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input
                        type="password"
                        name="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                        placeholder="Enter your password confirmation"
                      />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="teal"
                      variant="ghost"
                      onClick={() => {
                        onCloseConfirm();
                      }}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="teal"
                      variant="solid"
                      ml={3}
                      loadingText="Updating"
                      onClick={() => {
                        handleSubmit();
                        onCloseConfirm();
                      }}>
                      Save
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};
export default Profile;
