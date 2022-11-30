import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ProductCreateAtom } from "../../../../atoms/productCreateAtom";
import {
  AgeRangeOptions,
  GenresOptions,
  Sizes,
  unitOfMeasurementOptions,
} from "../../../../utils/constant";
import GridComponent from "./grid";
import InputComponent from "./InputComponent";

const CreateProduct: React.FC = () => {
  return (
    <>
      <GridComponent typeGrid="grid" templateColumns="5fr 1fr">
        <InputComponent
          label={"Name"}
          placeholder={"Nike Air Max Excee"}
          stateAtom={ProductCreateAtom}
          compound
          isRequired
        />
        <InputComponent
          label={"Active"}
          typePrototype={"Switch"}
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
        typePrototype={"Textarea"}
        stateAtom={ProductCreateAtom}
        isRequired
      />
      <InputComponent
        label={"Brand"}
        placeholder={"Brand"}
        stateAtom={ProductCreateAtom}
        isRequired
      />

      <GridComponent>
        <InputComponent
          label={"Price"}
          placeholder={"Price"}
          stateAtom={ProductCreateAtom}
          typeInput={"number"}
          isRequired
          compound
        />
        <InputComponent
          label={"Discount"}
          placeholder={"Discount"}
          stateAtom={ProductCreateAtom}
          typeInput={"number"}
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Stock"}
          placeholder={"Stock"}
          stateAtom={ProductCreateAtom}
          typeInput={"number"}
          isRequired
          compound
        />
        <GridComponent noFormat>
          <InputComponent
            label={"Unit of Measurement"}
            compound
            placeholder={"Unit"}
            stateAtom={ProductCreateAtom}
            typePrototype={"Select"}
            options={unitOfMeasurementOptions}
          />
          <InputComponent
            label={"Size"}
            compound
            placeholder={"Size"}
            isMulti
            stateAtom={ProductCreateAtom}
            typePrototype={"Select"}
            dependence={Sizes}
          />
        </GridComponent>
      </GridComponent>

      <GridComponent>
        <InputComponent
          label={"Color"}
          placeholder={"Color"}
          stateAtom={ProductCreateAtom}
          isRequired
          compound
        />
        <InputComponent
          label={"Style"}
          placeholder={"Style"}
          stateAtom={ProductCreateAtom}
          isRequired
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Recommended Sport"}
          placeholder={"Recommended Sport"}
          stateAtom={ProductCreateAtom}
          compound
        />
        <InputComponent
          label={"Exterior Materials"}
          placeholder={"Exterior Materials"}
          stateAtom={ProductCreateAtom}
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Sole Materials"}
          placeholder={"Sole Materials"}
          stateAtom={ProductCreateAtom}
          compound
        />
        <InputComponent
          label={"Fit Type"}
          placeholder={"Fit Type"}
          stateAtom={ProductCreateAtom}
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Genres"}
          placeholder={"Genres"}
          stateAtom={ProductCreateAtom}
          compound
          typePrototype="Select"
          options={GenresOptions}
          isMulti
        />
        <InputComponent
          label={"Age Group"}
          placeholder={"Age Group"}
          stateAtom={ProductCreateAtom}
          compound
          typePrototype="Select"
          options={AgeRangeOptions}
          isMulti
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
