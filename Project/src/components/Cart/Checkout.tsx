import { Button, DrawerBody, DrawerFooter, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import useCartData from "../../hooks/useCartData";
import { useRouter } from "next/router";

const CheckOutDrawer: React.FC = () => {
  const { changeDrawer, urlCheckOut } = useCartData();

  const router = useRouter();

  useEffect(() => {
    if (urlCheckOut) {
      router.push(urlCheckOut);
    }
  }, [router, urlCheckOut]);

  return (
    <>
      <DrawerBody
        display={"flex"}
        mt={"13rem"}
        flexDirection={"column"}
        alignItems={"center"}>
        <Text mb={"1rem"} fontSize={"2xl"}>
          Thank you for your purchase
        </Text>
      </DrawerBody>
      <DrawerFooter>
        <Button
          colorScheme={"purple"}
          variant="outline"
          mr={3}
          onClick={() => {
            changeDrawer("cart");
          }}>
          Cancel
        </Button>
      </DrawerFooter>
    </>
  );
};

export default CheckOutDrawer;
