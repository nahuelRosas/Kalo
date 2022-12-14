import {
  Flex,
  FormControl,
  FormControlProps,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { ActionMeta } from "chakra-react-select";
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
  withOutPreview?: boolean;
  title?: string;
  subElementState?: string;
  action?: (newValue: any, actionMeta: ActionMeta<any>) => void;
  ParentType: string;
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
  withOutPreview,
  subElementState,
  action,
  title,
  ParentType,
}) => {
  const configFlex = FlexPropComponent({ compound, typePrototype });
  const Title = title ? title : label;
  return (
    <Flex {...configFlex}>
      <FormControl
        id={label.toLowerCase().split(" ").join("")}
        isRequired={isRequired}
        {...configFormControl}>
        <Flex direction="column">
          <FormLabel fontWeight={600}>{Title}</FormLabel>
          <TypeInput
            typePrototype={typePrototype}
            subElementState={subElementState}
            stateAtom={stateAtom}
            label={label}
            options={options}
            action={action}
            placeholder={placeholder}
            isMulti={isMulti}
            typeInput={typeInput}
            dependence={dependence}
            withOutPreview={withOutPreview}
            ParentType={ParentType}
          />
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
        </Flex>
      </FormControl>
    </Flex>
  );
};
export default InputComponent;
