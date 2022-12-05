import {
  Button,
  Center,
  Grid,
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
  useToast,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiImage } from "react-icons/fi";
import { RecoilState } from "recoil";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/clientApp";
import useUserData from "../../../hooks/useUserData";

type EditPhotoProfileProps = {
  isOpen: boolean;
  onClose: () => void;
};
const EditPhotoProfile: React.FC<EditPhotoProfileProps> = ({
  isOpen,
  onClose,
}) => {
  const { getUserData, userData } = useUserData();
  const toast = useToast();
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const bg = useColorModeValue("white", "gray.800");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setFile(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (!file || isLoading) {
      setIsDisabled(true);
      return;
    }
    setIsDisabled(false);
  }, [file, isLoading]);

  const updateDocument = async () => {
    setIsLoading(true);
    const userRef = doc(firestore, "customers", userData.uid);
    await updateDoc(userRef, {
      photoURL: file,
    })
      .then(() => {
        toast({
          title: "Profile updated.",
          description: "Your profile has been updated.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onClose();
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
        getUserData();
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Avatar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {file ? (
              <Center h="auto" bg={bg} border="2px solid #e2e8f0">
                <Image
                  src={file as string}
                  alt="Picture of the author"
                  width={1500}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </Center>
            ) : null}

            <InputGroup
              mt={4}
              size="md"
              bg={useColorModeValue("alphaWhite", "gray.800")}
              borderRadius="md"
              color="gray.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="short">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiImage} color="gray.300" />
              </InputLeftElement>
              <Input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleFileChange}
                sx={{
                  "::file-selector-button": {
                    height: 10,
                    width: "auto",
                    padding: 0,
                    mr: 4,
                    background: "none",
                    border: "none",
                    fontWeight: "bold",
                  },
                }}
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Button colorScheme="purple" variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="purple"
                variant="solid"
                mr={3}
                onClick={updateDocument}
                isDisabled={isDisabled}>
                Save
              </Button>
            </Grid>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default EditPhotoProfile;
