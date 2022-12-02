import {
  Flex,
  FormControl,
  FormControlProps,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RecoilState } from "recoil";
import FlexPropComponent from "./FlexProp";
import TypeInput from "./typeInput";

type inputProps = {
  label: string;
  typeInput?: string;
  placeholder?: string;
  typePrototype?:
    | "Textarea"
    | "CreatableSelect"
    | "Select"
    | "Switch"
    | "Images";

  compound?: boolean;
  options?: { value: string; label: string }[];
  isMulti?: boolean;
  withText?: boolean;
  text?: string;
  stateAtom: RecoilState<any>;
  isRequired?: boolean;
  configFormControl?: FormControlProps;
  subTypeFrom?: "none" | "metaData" | "features";
  dependence?: object;
};

const InputComponent: React.FC<inputProps> = ({
  label,
  typeInput = "text",
  placeholder = "",
  typePrototype,
  compound = false,
  options,
  isMulti = false,
  withText = false,
  text = "",
  stateAtom,
  isRequired = false,
  configFormControl,
  dependence,
}) => {
  const configFlex = FlexPropComponent({ compound, typePrototype });

  return (
    <Flex {...configFlex} alignItems={"end"}>
      <FormControl
        id={label.toLowerCase().split(" ").join("")}
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
        <TypeInput
          typePrototype={typePrototype}
          stateAtom={stateAtom}
          label={label}
          options={options}
          placeholder={placeholder}
          isMulti={isMulti}
          typeInput={typeInput}
          dependence={dependence}
        />
      </FormControl>
    </Flex>
  );
};
export default InputComponent;
