import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type titleMenuProps = {
  title: string;
};

const TitleMenu: React.FC<titleMenuProps> = ({ title }) => {
  const color = useColorModeValue("gray.600", "gray.400");

  return (
    <Text fontSize="lg" fontWeight="bold" color={color} mt={2}>
      {title}
    </Text>
  );
};
export default TitleMenu;
