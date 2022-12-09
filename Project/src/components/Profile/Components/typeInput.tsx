import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { CreatableSelect, Select } from "chakra-react-select";
import React from "react";
import { FiImage } from "react-icons/fi";
import { RecoilState } from "recoil";
import handleChange from "./handleChange";
import OptionsDependence from "./optionsDependence";
import PreviewImage from "./previewImage";

type typeInputProps = {
  typePrototype?:
    | "Textarea"
    | "CreatableSelect"
    | "Select"
    | "Switch"
    | "Images";
  placeholder?: string;
  typeInput?: string;
  isMulti?: boolean;
  options?: { value: string; label: string }[];
  stateAtom: RecoilState<any>;
  label: string;
  dependence?: any;
  withOutPreview?: boolean;
  subElementState?: string;
};

const TypeInput: React.FC<typeInputProps> = ({
  typePrototype,
  placeholder,
  typeInput = "text",
  isMulti = false,
  options,
  stateAtom,
  label = "None",
  dependence,
  withOutPreview,
  subElementState = "none",
}) => {
  const bgInput = useColorModeValue("alphaWhite", "gray.800");
  const type =
    typePrototype === "Switch"
      ? "boolean"
      : typeInput === "number"
      ? "number"
      : typePrototype === "Images"
      ? "images"
      : subElementState !== "none"
      ? "subElement"
      : "string";

  const BgVStack = useColorModeValue("gray.50", "gray.700");
  const { value, onChange } = handleChange({
    stateAtom,
    label,
    type,
  });

  const StateName: string =
    subElementState?.toString().toLocaleLowerCase() || "";

  const colorScheme = "purple";
  const option = dependence
    ? OptionsDependence({ stateAtom, options: dependence })
    : options || [];
  if (typePrototype === "Textarea")
    return (
      <Textarea
        bg={bgInput}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );

  if (typePrototype === "CreatableSelect")
    return (
      <CreatableSelect
        onChange={onChange}
        isMulti={isMulti}
        colorScheme={colorScheme}
        placeholder={placeholder}
        options={option}
        defaultValue={value}
        styles={{
          control: (provided) => ({
            ...provided,
            zIndex: 999,
          }),
        }}
      />
    );

  if (typePrototype === "Select")
    return (
      <Select
        onChange={onChange}
        isMulti={isMulti}
        colorScheme={colorScheme}
        placeholder={placeholder}
        options={option}
        defaultValue={value}
        styles={{
          control: (provided) => ({
            ...provided,
            zIndex: 999,
          }),
        }}
      />
    );

  if (typePrototype === "Images")
    return (
      <>
        <VStack
          justify="space-between"
          align="center"
          px={0}
          py={0}
          bg={BgVStack}>
          <InputGroup
            size="md"
            bg={BgVStack}
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
              style={{ zIndex: 1 }}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </InputGroup>
          {withOutPreview ? null : (
            <PreviewImage
              stateAtom={stateAtom as RecoilState<{ images: string[] }>}
              onChange={onChange}
            />
          )}
        </VStack>
      </>
    );
  if (typePrototype === "Switch")
    return (
      <Switch colorScheme={colorScheme} value={value} onChange={onChange} />
    );
  if (subElementState !== "none")
    return (
      <Input
        type={typeInput}
        placeholder={placeholder}
        onChange={(e) => {
          onChange({ target: { value: e.target.value, name: StateName } });
        }}
        value={value === null || value === undefined ? "" : value[StateName]}
        bg={bgInput}
      />
    );

  return (
    <Input
      type={typeInput}
      placeholder={placeholder}
      onChange={onChange}
      value={value === null || value === undefined ? "" : value}
      bg={bgInput}
    />
  );
};

export default TypeInput;
