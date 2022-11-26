import { Button, Flex, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { ProductCreateAtom } from "../../../../atoms/productCreateAtom";
import GridComponent from "./grid";
import InputComponent from "./input";

const CreateProduct: React.FC = () => {
  return (
    <>
      <GridComponent typeGrid="grid" templateColumns="5fr 1fr">
        <InputComponent
          label={"Name"}
          placeholder={"Nike Air Max Excee"}
          typePrototype={"input"}
          stateAtom={ProductCreateAtom}
          compound
          isRequired
        />
        <InputComponent
          label={"Active"}
          typePrototype={"switch"}
          compound
          stateAtom={ProductCreateAtom}
          configFormControl={{
            display: "flex",
            alignItems: "initial",
          }}
        />
      </GridComponent>

      <InputComponent
        label={"Description"}
        placeholder={"Description"}
        typePrototype={"textarea"}
        stateAtom={ProductCreateAtom}
        isRequired
      />
      <InputComponent
        label={"Brand"}
        typePrototype={"input"}
        placeholder={"Brand"}
        stateAtom={ProductCreateAtom}
        isRequired
      />
      <GridComponent>
        <InputComponent
          subTypeFrom={"metadata"}
          label={"Price"}
          typePrototype={"input"}
          placeholder={"Price"}
          stateAtom={ProductCreateAtom}
          isRequired
        />
        <InputComponent
          label={"Discount"}
          typePrototype={"input"}
          placeholder={"Discount"}
          stateAtom={ProductCreateAtom}
        />
      </GridComponent>

      {/* <GridComponent>
        <InputComponent
          label={"Brand"}
          typePrototype={"input"}
          placeholder={"Brand"}
          compound
          stateAtom={ProductCreateAtom}
        />
        <InputComponent
          label={"Category"}
          typePrototype={"select"}
          placeholder={"Select Category"}
          compound
          stateAtom={ProductCreateAtom}
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Price"}
          typePrototype={"input"}
          typeInput={"number"}
          placeholder={"Price"}
          compound
          stateAtom={ProductCreateAtom}
        />
        <InputComponent
          label={"Discount"}
          typePrototype={"input"}
          typeInput={"number"}
          placeholder={"Discount"}
          compound
          stateAtom={ProductCreateAtom}
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
        stateAtom={ProductCreateAtom}
      /> */}

      {/* <VStack
        justify="space-between"
        align="center"
        px={6}
        py={4}
        bg={useColorModeValue("gray.50", "gray.700")}
        borderBottomWidth="1px">
        <InputComponent
          label={"Images"}
          typePrototype={"images"}
          stateAtom={ProductCreateAtom}
        />
      </VStack> */}
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
