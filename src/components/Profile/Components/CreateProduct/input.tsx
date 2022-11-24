import {
  Flex,
  FlexProps,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useColorModeValue
} from "@chakra-ui/react";
import { CreatableSelect, Select } from "chakra-react-select";
import React from "react";
import { FiImage } from "react-icons/fi";

type inputProps = {
  label: string;
  typeInput?: string;
  placeholder?: string;
  typePrototype: string;
  compound?: boolean;
  options?: { value: string; label: string }[];
  isMulti?: boolean;
  colorScheme?: string;
  withText?: boolean;
  text?: string;
};

const InputComponent: React.FC<inputProps> = ({
  label,
  typeInput = "text",
  placeholder = "",
  typePrototype,
  compound = false,
  options,
  isMulti = false,
  colorScheme = "purple",
  withText = false,
  text = "",
}) => {
  const bg = useColorModeValue("gray.50", "gray.700");
  const bgInput = useColorModeValue("alphaWhite", "gray.800");

  let configFlex: FlexProps = {};

  if (!compound) {
    configFlex = {
      ...configFlex,
      justify: "space-between",
      px: 6,
      py: 4,
      align: "center",
      bg: { bg },
      borderBottomWidth: "1px",
      width: "100%",
    };
  }
  if (typePrototype === "images" && !compound)
    configFlex = {
      width: "100%",
    };
  if (typePrototype === "select" || typePrototype === "createSelect") {
    configFlex = {
      ...configFlex,
      zIndex: 1000,
    };
  }

  return (
    <Flex {...configFlex}>
      <FormControl id={label.toLowerCase()} isRequired>
        <FormLabel>{label}</FormLabel>
        <Text
          bg={bg}
          display={withText ? "block" : "none"}
          p={2}
          borderRadius="md"
          color="gray.500"
          fontSize="sm"
          fontWeight="medium"
          lineHeight="short">
          {text}
        </Text>
        {typePrototype === "input" && (
          <Input type={typeInput} placeholder={placeholder} bg={bgInput} />
        )}
        {typePrototype === "textarea" && (
          <Textarea
            bg={bgInput}
            placeholder={placeholder}
            display={typePrototype === "textarea" ? "block" : "none"}
          />
        )}
        {typePrototype === "createSelect" && (
          <CreatableSelect
            isMulti={isMulti}
            colorScheme={colorScheme}
            placeholder={placeholder}
            options={options}
          />
        )}
        {typePrototype === "select" && (
          <Select
            isMulti={isMulti}
            colorScheme={colorScheme}
            placeholder={placeholder}
            options={options}
          />
        )}
        {typePrototype === "images" && (
          <InputGroup
            size="md"
            bg={bgInput}
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
              placeholder={placeholder || "Upload image"}
              multiple
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
        )}
      </FormControl>
    </Flex>
  );
};
export default InputComponent;
