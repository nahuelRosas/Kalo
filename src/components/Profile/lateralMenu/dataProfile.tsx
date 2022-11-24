import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import AvatarComponent from "./Avatar";

type dataProfileProps = {
  user?: User | null;
};

const DataProfile: React.FC<dataProfileProps> = ({ user }) => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bg={useColorModeValue("gray.50", "gray.900")}
      p={4}
      mb={4}>
      <AvatarComponent photoURL={user?.photoURL} />
      <Text fontSize="2xl" fontWeight="bold">
        {user?.displayName}
      </Text>
      <Text
        fontSize="sm"
        color={useColorModeValue("gray.600", "gray.400")}
        p={2}>
        {user?.email}
      </Text>
    </Flex>
  );
};

export default DataProfile;
