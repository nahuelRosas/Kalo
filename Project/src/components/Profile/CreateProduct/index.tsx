import React from "react";
import { useRecoilState } from "recoil";
import { ProductCreateAtom } from "../../../atoms/ProductCreateAtom";
import {
  AgeRangeOptions,
  GenresOptions,
  Sizes,
  unitOfMeasurementOptions,
} from "../../../utils/constant";
import CreateDocument from "../Components/createDocument";
import GridComponent from "../Components/grid";
import InputComponent from "../Components/InputComponent";
const CreateProduct: React.FC = () => {
  const [value, setValue] = useRecoilState(ProductCreateAtom);

  return (
    <>
      <GridComponent typeGrid="grid" templateColumns="5fr 1fr">
        <InputComponent
          label={"Name"}
          placeholder={"Nike Air Max Excee"}
          stateAtom={ProductCreateAtom}
          compound
          isRequired
          ParentType={"CreateProduct"}
        />
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Active"}
          typePrototype={"Switch"}
          compound
          withText
          text={`
              If you want to show this product in the store, you must activate it.
            `}
          stateAtom={ProductCreateAtom}
          configFormControl={{
            display: "flex",
            alignItems: "initial",
          }}
        />
      </GridComponent>
      <InputComponent
        ParentType={"CreateProduct"}
        label={"Description"}
        placeholder={"Description"}
        typePrototype={"Textarea"}
        stateAtom={ProductCreateAtom}
        isRequired
      />
      <InputComponent
        ParentType={"CreateProduct"}
        label={"Brand"}
        placeholder={"Brand"}
        stateAtom={ProductCreateAtom}
        isRequired
      />

      <GridComponent>
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Price"}
          placeholder={"Price"}
          stateAtom={ProductCreateAtom}
          typeInput={"number"}
          isRequired
          compound
          text={`
          The price includes taxes, they are expressed in EUROS. Use (.) period to separate the decimals
          `}
          withText
        />

        <InputComponent
          ParentType={"CreateProduct"}
          label={"Discount"}
          placeholder={"Discount"}
          withText
          text={`
          The Discount is expressed in percentage. Use (.) period to separate the decimals
          `}
          stateAtom={ProductCreateAtom}
          typeInput={"number"}
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Stock"}
          placeholder={"Stock"}
          withText
          text={`
          The stock value, establishes the total value by adding all the available sizes
          `}
          stateAtom={ProductCreateAtom}
          typeInput={"number"}
          isRequired
          compound
        />
        <GridComponent noFormat>
          <InputComponent
            ParentType={"CreateProduct"}
            label={"Unit of Measurement"}
            compound
            placeholder={"Unit"}
            stateAtom={ProductCreateAtom}
            typePrototype={"Select"}
            options={unitOfMeasurementOptions}
          />
          <InputComponent
            ParentType={"CreateProduct"}
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
          ParentType={"CreateProduct"}
          label={"Genres"}
          placeholder={"Genres"}
          stateAtom={ProductCreateAtom}
          compound
          typePrototype="Select"
          options={GenresOptions}
          isMulti
        />
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Age Group"}
          placeholder={"Age Group"}
          stateAtom={ProductCreateAtom}
          compound
          typePrototype="Select"
          options={AgeRangeOptions}
          isMulti
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Color"}
          placeholder={"Color"}
          stateAtom={ProductCreateAtom}
          compound
        />
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Style"}
          placeholder={"Style"}
          stateAtom={ProductCreateAtom}
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Recommended Sport"}
          placeholder={"Recommended Sport"}
          stateAtom={ProductCreateAtom}
          compound
        />
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Exterior Materials"}
          placeholder={"Exterior Materials"}
          stateAtom={ProductCreateAtom}
          compound
        />
      </GridComponent>

      <GridComponent>
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Sole Materials"}
          placeholder={"Sole Materials"}
          stateAtom={ProductCreateAtom}
          compound
        />
        <InputComponent
          ParentType={"CreateProduct"}
          label={"Fit Type"}
          placeholder={"Fit Type"}
          stateAtom={ProductCreateAtom}
          compound
        />
      </GridComponent>

      <InputComponent
        ParentType={"CreateProduct"}
        label={"Images"}
        placeholder={"Images"}
        stateAtom={ProductCreateAtom}
        typePrototype="Images"
        withText
        text={`
        The images must be in JPG or PNG format, the maximum size of each image is 2MB, the minimum size of each image is 100x100px, the maximum number of images is 10
        `}
        isRequired
      />

      <GridComponent>
        <CreateDocument stateAtom={ProductCreateAtom} />
      </GridComponent>
    </>
  );
};

export default CreateProduct;
