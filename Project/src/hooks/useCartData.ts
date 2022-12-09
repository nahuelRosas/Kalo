import { useToast } from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import { useRecoilState } from "recoil";
import { CartAtom } from "../atoms/cartAtom";
import { CartDrawerAtom } from "../atoms/cartDrawerAtom";
import FormatPrice from "../components/Products/Price/formatPrice";

const errors = {
  noSize: "No size selected. Please select a size before adding to cart",
  noStock: "No stock available. Please select a different size or product",
};

const useCartData = () => {
  const [State, SetState] = useRecoilState<CartAtom>(CartAtom);
  const [drawerState, setDrawerState] = useRecoilState(CartDrawerAtom);
  const toast = useToast();

  const toggleDrawer = () => {
    setDrawerState({ isOpen: !drawerState.isOpen, type: "cart" });
  };

  const changeDrawer = (type: "cart" | "checkout" | "precheckout") => {
    setDrawerState({ isOpen: true, type });
  };

  const Length =
    State.cart.map((item) => item.quantity).reduce((a, b) => a + b, 0) || 0;

  const TotalPrice = FormatPrice({
    value: State.cart.map((item) => item.price).reduce((a, b) => a + b, 0),
  });
  const addOrIncrementProduct = (
    product: DocumentData,
    size: { value: string; label: string } | undefined,
    withOutToast: boolean = false
  ) => {
    const newCart = [...State.cart];
    const foundIndex = State.cart.findIndex(
      (x) => x.id === product.id && x.size.value === size?.value
    );

    try {
      if (size === undefined) {
        throw new Error(errors.noSize);
      }

      if (product.stock < State.cart[foundIndex]?.quantity + 1) {
        throw new Error(errors.noStock);
      }

      if (foundIndex >= 0) {
        newCart[foundIndex] = {
          ...State.cart[foundIndex],
          quantity: State.cart[foundIndex].quantity + 1,
          price: State.cart[foundIndex].price + product.price,
        };
        SetState({ ...State, cart: newCart });
      } else {
        SetState({
          ...State,
          cart: [
            ...State.cart,
            {
              id: product.id,
              product,
              price: product.price,
              quantity: 1,
              size: size,
            },
          ],
        });
      }
      if (withOutToast) return;
      toast({
        title: "Product added to cart",
        description: "We've added the product to your cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      if (withOutToast) return;
      toast({
        title: "Error adding product to cart",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const decrementProduct = (
    product: DocumentData,
    size: { value: string; label: string } | undefined,
    withOutToast: boolean = false
  ) => {
    const newCart = [...State.cart];
    const foundIndex = State.cart.findIndex(
      (x) => x.id === product.id && x.size.value === size?.value
    );

    try {
      if (size === undefined) {
        throw new Error(errors.noSize);
      }

      if (State.cart[foundIndex].quantity <= 1) {
        deleteProduct(product, size);
        return;
      }

      if (foundIndex >= 0) {
        newCart[foundIndex] = {
          ...State.cart[foundIndex],
          quantity: State.cart[foundIndex].quantity - 1,
          price: State.cart[foundIndex].price - product.price,
        };
        SetState({ ...State, cart: newCart });
      } else {
        SetState({
          ...State,
          cart: [
            ...State.cart,
            {
              id: product.id,
              product,
              price: product.price,
              quantity: 1,
              size: size,
            },
          ],
        });
      }
      if (withOutToast) return;
      toast({
        title: "Product removed from cart",
        description: "We've removed the product from your cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      if (withOutToast) return;
      toast({
        title: "Error removing product from cart",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const deleteProduct = (
    product: DocumentData,
    size: { value: string; label: string } | undefined,
    withOutToast: boolean = false
  ) => {
    const newCart = [...State.cart];
    const foundIndex = State.cart.findIndex(
      (x) => x.id === product.id && x.size.value === size?.value
    );

    try {
      if (size === undefined) {
        throw new Error(errors.noSize);
      }
      if (foundIndex >= 0) {
        newCart.splice(foundIndex, 1);
        SetState({ ...State, cart: newCart });
      }
      if (withOutToast) return;
      toast({
        title: "Product removed from cart",
        description: "We've removed the product from your cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      if (withOutToast) return;
      toast({
        title: "Error removing product from cart",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const clearCart = () => {
    SetState({ ...State, cart: [] });
  };

  const SetURL = (url: string) => {
    SetState({ ...State, urlCheckOut: url });
  };

  return {
    Cart: State.cart,
    Length,
    toggleDrawer,
    changeDrawer,
    isOpen: drawerState.isOpen,
    type: drawerState.type,
    TotalPrice,
    addOrIncrementProduct,
    decrementProduct,
    deleteProduct,
    clearCart,
    SetURL,
    urlCheckOut: State.urlCheckOut,
  };
};

export default useCartData;
