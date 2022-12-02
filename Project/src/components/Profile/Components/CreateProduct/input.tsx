import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useColorModeValue,
  Switch,
  FormControlProps,
} from "@chakra-ui/react";
import { CreatableSelect, Select } from "chakra-react-select";
import React from "react";
import { FiImage } from "react-icons/fi";
import { RecoilState, useRecoilState } from "recoil";
import FlexPropComponent from "./FlexProp";

type inputProps = {
  label: string;
  typeInput?: string;
  placeholder?: string;
  typePrototype:
    | "input"
    | "textarea"
    | "switch"
    | "images"
    | "select"
    | "createSelect";
  compound?: boolean;
  options?: { value: string; label: string }[];
  isMulti?: boolean;
  colorScheme?: string;
  withText?: boolean;
  text?: string;
  stateAtom: RecoilState<any>;
  isRequired?: boolean;
  configFormControl?: FormControlProps;
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
  stateAtom,
  isRequired = false,
  configFormControl,
}) => {
  const configFlex = FlexPropComponent({ compound, typePrototype });
  const bgInput = useColorModeValue("alphaWhite", "gray.800");
  const [state, setState] = useRecoilState(stateAtom);

  const handleChange = (value: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [label.toLowerCase()]: value,
    }));
  };

  return (
    <Flex {...configFlex} alignItems={"end"}>
      <FormControl
        id={label.toLowerCase()}
        isRequired={isRequired}
        {...configFormControl}>
        <FormLabel fontWeight={600}>{label}</FormLabel>
        {withText && (
          <Text
            p={2}
            borderRadius="md"
            color="gray.500"
            fontSize="sm"
            fontWeight="medium"
            lineHeight="short">
            {text}
          </Text>
        )}

        {typePrototype === "input" && (
          <Input
            type={typeInput}
            placeholder={placeholder}
            bg={bgInput}
            value={state.label?.toLowerCase()}
            onChange={(e) => handleChange(e.target.value)}
          />
        )}

        {typePrototype === "textarea" && (
          <Textarea
            bg={bgInput}
            placeholder={placeholder}
            value={state.label?.toLowerCase()}
            onChange={(e) => handleChange(e.target.value)}
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
        {typePrototype === "switch" && (
          <Switch
            colorScheme={colorScheme}
            isChecked={state.label?.toLowerCase()}
            onChange={(e) => handleChange(e.target.checked)}
          />
        )}
      </FormControl>
    </Flex>
  );
};
export default InputComponent;
