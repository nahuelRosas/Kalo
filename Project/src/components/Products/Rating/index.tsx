import {
  Flex,
  HStack,
  Icon,
  StackProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";

type indexProps = {
  defaultValue?: number;
  size: "sm" | "md" | "lg";
  max?: number;
  rootProps?: StackProps;
  value: number;
};

const Rating: React.FC<indexProps> = ({
  defaultValue = 0,
  max = 5,
  size = "md",
  rootProps,
  value,
}) => {
  const color = useColorModeValue("gray.200", "gray.600");
  const activeColor = useColorModeValue("purple.500", "purple.200");
  return (
    <Flex alignItems="center" justifyContent="flex-start" fontSize={size}>
      <HStack spacing="0.5" {...rootProps}>
        {Array.from({ length: max })
          .map((_, index) => index + 1)
          .map((index) => (
            <Icon
              key={index}
              as={FaStar}
              fontSize={size}
              color={index <= defaultValue ? activeColor : color}
            />
          ))}
      </HStack>
      <Text
        ml={size === "sm" ? "0.5rem" : size === "md" ? "1rem" : "1.5rem"}
        fontSize="sm"
        color={useColorModeValue("gray.600", "gray.400")}>
        {value} reviews
      </Text>
    </Flex>
  );
};
export default Rating;
