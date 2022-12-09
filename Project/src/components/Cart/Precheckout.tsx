import {
  Button,
  DrawerBody,
  DrawerFooter,
  Flex,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { RecoilState, useRecoilState } from "recoil";
import { UserAtom } from "../../atoms/userDataAtom";
import useCartData from "../../hooks/useCartData";
import InputComponent from "../Profile/Components/InputComponent";

type User = {
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    state: string;
    line1: string;
    postal_code: string;
    country: string;
  };
};

const Precheckout: React.FC = () => {
  const [value, setValue] = useRecoilState<User>(UserAtom as RecoilState<any>);

  const { changeDrawer } = useCartData();
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      value.name !== "" &&
      value.email !== "" &&
      value.phone !== "" &&
      value.address.city !== "" &&
      value.address.state !== "" &&
      value.address.line1 !== "" &&
      value.address.postal_code !== "" &&
      value.address.country !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [value]);

  return (
    <>
      <DrawerBody h="100%">
        <Flex h="100%" direction="column" justifyContent="space-between">
          <InputComponent
            label="address"
            placeholder="City"
            isRequired
            title="City"
            compound
            subElementState="city"
            stateAtom={UserAtom}
          />
          <InputComponent
            label="address"
            placeholder="State"
            title="State"
            isRequired
            compound
            subElementState="state"
            stateAtom={UserAtom}
          />
          <InputComponent
            label="address"
            placeholder="Country"
            isRequired
            compound
            title="Country"
            subElementState="country"
            stateAtom={UserAtom}
          />
          <InputComponent
            isRequired
            label="address"
            compound
            placeholder="Postal Code"
            title="Postal Code"
            subElementState="postal_code"
            stateAtom={UserAtom}
          />
          <InputComponent
            label="address"
            placeholder="Line 1"
            isRequired
            compound
            title="Line 1"
            subElementState="line1"
            stateAtom={UserAtom}
          />
          <InputComponent
            compound
            label="address"
            placeholder="Line 2"
            title="Line 2"
            subElementState="line2"
            stateAtom={UserAtom}
          />

          <InputComponent
            isRequired
            label="Phone Number"
            placeholder="Phone Number"
            compound
            stateAtom={UserAtom}
          />
          <InputComponent
            isRequired
            label="Email"
            placeholder="Email"
            compound
            stateAtom={UserAtom}
          />
        </Flex>

        <DrawerFooter>
          <Button
            colorScheme={"purple"}
            variant="outline"
            onClick={() => changeDrawer("cart")}
            mr={3}>
            Back
          </Button>
          <Button
            colorScheme={"purple"}
            variant="outline"
            mr={3}
            isDisabled={isDisabled}
            onClick={() => changeDrawer("checkout")}
            type="submit">
            Continue
          </Button>
        </DrawerFooter>
      </DrawerBody>
    </>
  );
};

export default Precheckout;
