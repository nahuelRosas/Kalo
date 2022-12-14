import React from "react";
import { ProductEditAtom } from "../../../atoms/ProductEditAtom";
import useProductsData from "../../../hooks/useProductsData";
import {
  AgeRangeOptions,
  GenresOptions,
  Sizes,
  unitOfMeasurementOptions,
} from "../../../utils/constant";
import GridComponent from "../Components/grid";
import InputComponent from "../Components/InputComponent";
import UpdateDocument from '../Components/updateDocument';
const CreateProduct: React.FC = () => {
  const { ProductSelected, selectProduct } = useProductsData();
  return (
    <>
      <InputComponent
        label={"Select Product"}
        placeholder={"Select Product"}
        stateAtom={ProductEditAtom}
        typePrototype="Select"
        options={ProductSelected}
        action={selectProduct}
      />
      <GridComponent typeGrid="grid" templateColumns="5fr 1fr">
        <InputComponent
          label={"Name"}
          placeholder={"Nike Air Max Excee"}
          stateAtom={ProductEditAtom}
          compound
          isRequired
        />
        <InputComponent
          label={"Active"}
          typePrototype={"Switch"}
          compound
          withText
          text={`
              If you want to show this product in the store, you must activate it.
            `}
          stateAtom={ProductEditAtom}
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
        stateAtom={ProductEditAtom}
        isRequired
      />
      <InputComponent
        label={"Brand"}
        placeholder={"Brand"}
        stateAtom={ProductEditAtom}
        isRequired
      />

      <GridComponent>
        <InputComponent
          label={"Price"}
          placeholder={"Price"}
          stateAtom={ProductEditAtom}
          typeInput={"number"}
          isRequired
          compound
          text={`
          The price includes taxes, they are expressed in EUROS. Use (.) period to separate the decimals
          `}
          withText
        />

        <InputComponent
          label={"Discount"}
          placeholder={"Discount"}
          withText
          text={`
          The Discount is expressed in percentage. Use (.) period to separate the decimals
          `}
          stateAtom={ProductEditAtom}
          typeInput={"number"}
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Stock"}
          placeholder={"Stock"}
          withText
          text={`
          The stock value, establishes the total value by adding all the available sizes
          `}
          stateAtom={ProductEditAtom}
          typeInput={"number"}
          isRequired
          compound
        />
        <GridComponent noFormat>
          <InputComponent
            label={"Unit of Measurement"}
            compound
            placeholder={"Unit"}
            stateAtom={ProductEditAtom}
            typePrototype={"Select"}
            options={unitOfMeasurementOptions}
          />
          <InputComponent
            label={"Size"}
            compound
            placeholder={"Size"}
            isMulti
            stateAtom={ProductEditAtom}
            typePrototype={"Select"}
            dependence={Sizes}
          />
        </GridComponent>
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Genres"}
          placeholder={"Genres"}
          stateAtom={ProductEditAtom}
          compound
          typePrototype="Select"
          options={GenresOptions}
          isMulti
        />
        <InputComponent
          label={"Age Group"}
          placeholder={"Age Group"}
          stateAtom={ProductEditAtom}
          compound
          typePrototype="Select"
          options={AgeRangeOptions}
          isMulti
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Color"}
          placeholder={"Color"}
          stateAtom={ProductEditAtom}
          compound
        />
        <InputComponent
          label={"Style"}
          placeholder={"Style"}
          stateAtom={ProductEditAtom}
          compound
        />
      </GridComponent>
      <GridComponent>
        <InputComponent
          label={"Recommended Sport"}
          placeholder={"Recommended Sport"}
          stateAtom={ProductEditAtom}
          compound
        />
        <InputComponent
          label={"Exterior Materials"}
          placeholder={"Exterior Materials"}
          stateAtom={ProductEditAtom}
          compound
        />
      </GridComponent>

      <GridComponent>
        <InputComponent
          label={"Sole Materials"}
          placeholder={"Sole Materials"}
          stateAtom={ProductEditAtom}
          compound
        />
        <InputComponent
          label={"Fit Type"}
          placeholder={"Fit Type"}
          stateAtom={ProductEditAtom}
          compound
        />
      </GridComponent>

      <InputComponent
        label={"Images"}
        placeholder={"Images"}
        stateAtom={ProductEditAtom}
        typePrototype="Images"
        withText
        text={`
        The images must be in JPG or PNG format, the maximum size of each image is 2MB, the minimum size of each image is 100x100px, the maximum number of images is 10
        `}
        isRequired
      />

      <GridComponent>
        <UpdateDocument stateAtom={ProductEditAtom} />
      </GridComponent>
    </>
  );
};

export default CreateProduct;
