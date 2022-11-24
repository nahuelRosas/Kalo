import { Button, Flex, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import GridComponent from "./grid";
import InputComponent from "./input";

const CreateProduct: React.FC = () => {
  return (
    <>
      <InputComponent
        label={"Name"}
        placeholder={"Nike Air Max Excee"}
        typePrototype={"input"}
      />
      <InputComponent
        label={"Description"}
        placeholder={"Description"}
        typePrototype={"textarea"}
      />
      <GridComponent>
        <InputComponent
          label={"Brand"}
          typePrototype={"input"}
          placeholder={"Brand"}
          compound
        />
        <InputComponent
          label={"Category"}
          typePrototype={"select"}
          placeholder={"Select Category"}
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Price"}
          typePrototype={"input"}
          typeInput={"number"}
          placeholder={"Price"}
          compound
        />
        <InputComponent
          label={"Discount"}
          typePrototype={"input"}
          typeInput={"number"}
          placeholder={"Discount"}
          compound
        />
      </GridComponent>
      <InputComponent
        label={"Features"}
        typePrototype={"select"}
        placeholder={"Select Features"}
        options={[
          { value: "1", label: "Feature 1" },
          { value: "2", label: "Feature 2" },
          { value: "3", label: "Feature 3" },
        ]}
        isMulti
      />

      <VStack
        justify="space-between"
        align="center"
        px={6}
        py={4}
        bg={useColorModeValue("gray.50", "gray.700")}
        borderBottomWidth="1px">
        <InputComponent label={"Images"} typePrototype={"images"} />
      </VStack>
      <Flex
        justify="space-between"
        align="center"
        px={6}
        py={4}
        bg={useColorModeValue("gray.50", "gray.700")}
        borderBottomWidth="1px">
        <Button type="submit" colorScheme="purple" mr={3}>
          Create
        </Button>
      </Flex>
    </>
  );
};

export default CreateProduct;
