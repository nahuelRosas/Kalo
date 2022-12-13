import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Spinner,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { UserAtom } from "../../../atoms/userDataAtom";
import useUserData from "../../../hooks/useUserData";
import EditPhotoProfile from "../../Modal/EditProfile/EditPhotoProfile";
import GridComponent from "../Components/grid";
import InputComponent from "../Components/InputComponent";
import UpdateDocumentProfile from "../Components/UpdateDocumentProfile";
const EditProfile: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  const { userData } = useUserData();
  if (!userData) {
    return (
      <Center h="100vh" bg={bg}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <>
      <Box w={{ base: "100%", md: "100%" }}>
        <VStack align="stretch" spacing={0}>
          <Box p={6}>
            <Flex
              justify="center"
              align="center"
              direction="column"
              py={12}
              px={6}
              mb={6}
              bg={bg}>
              <Avatar
                size="2xl"
                src={userData?.photoURL}
                mb={4}
                pos="relative"
              />
              <EditPhotoProfile isOpen={isOpen} onClose={onClose} />
              <Button
                colorScheme="purple"
                variant="solid"
                size="sm"
                onClick={onOpen}>
                Change Avatar
              </Button>
            </Flex>

            <InputComponent
              label="Display Name"
              placeholder="Name"
              stateAtom={UserAtom}
            />

            <GridComponent>
              <InputComponent
                label="Phone Number"
                placeholder="Phone Number"
                compound
                stateAtom={UserAtom}
              />
              <InputComponent
                label="Email"
                placeholder="Email"
                compound
                stateAtom={UserAtom}
              />
              <InputComponent
                label="address"
                placeholder="City"
                title="City"
                subElementState="city"
                compound
                stateAtom={UserAtom}
              />
              <InputComponent
                label="address"
                placeholder="State"
                title="State"
                subElementState="state"
                compound
                stateAtom={UserAtom}
              />
              <InputComponent
                label="address"
                placeholder="Country"
                title="Country"
                subElementState="country"
                compound
                stateAtom={UserAtom}
              />
              <InputComponent
                label="address"
                placeholder="Postal Code"
                title="Postal Code"
                subElementState="postal_code"
                compound
                stateAtom={UserAtom}
              />
            </GridComponent>

            <InputComponent
              label="address"
              placeholder="Line 1"
              title="Line 1"
              subElementState="line1"
              stateAtom={UserAtom}
            />
            <InputComponent
              label="address"
              placeholder="Line 2"
              title="Line 2"
              subElementState="line2"
              stateAtom={UserAtom}
            />
            <Flex justify="center" align="center" direction="column" mt={5}>
              <UpdateDocumentProfile w="30%" />
            </Flex>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default EditProfile;
