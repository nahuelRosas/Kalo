import { useToast } from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import { useRecoilState } from "recoil";
import { CartAtom } from "../atoms/cartAtom";
import { CartDrawerAtom } from "../atoms/cartDrawerAtom";
import FormatPrice from "../components/Products/Price/formatPrice";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import useUserData from "./useUserData";
import { firestore } from "../firebase/clientApp";

const errors = {
  noSize: "No size selected. Please select a size before adding to cart",
  noStock: "No stock available. Please select a different size or product",
};

const useCartData = () => {
  const [State, SetState] = useRecoilState<CartAtom>(CartAtom);
  const [drawerState, setDrawerState] = useRecoilState(CartDrawerAtom);
  const toast = useToast();
  const { UID, userData } = useUserData();
  const Ref = collection(firestore, `customers/${UID}/checkout_sessions`);

  const toggleDrawer = () => {
    setDrawerState({ isOpen: !drawerState.isOpen, type: "cart" });
  };

  const closeDrawer = () => {
    setDrawerState({ ...drawerState, isOpen: false });
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
    const IndexSubType = product.subType.findIndex(
      (x: { size: { value: string | undefined } }) =>
        x.size.value === size?.value
    );

    try {
      if (size === undefined) {
        throw new Error(errors.noSize);
      }

      if (
        product.subType[IndexSubType].stock <
        State.cart[foundIndex]?.quantity + 1
      ) {
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
    if (State.cart.length === 0 && State.urlCheckOut === "") return;
    SetState({ ...State, cart: [], urlCheckOut: "" });
  };

  const SetURL = (url: string) => {
    SetState({
      ...State,
      cartAfterPay: State.cart,
      urlCheckOut: url,
    });
  };
  const getCheckOutSession = async () => {
    SetState({
      ...State,
      urlCheckOut: "",
    });
    try {
      const { id } = await addDoc(Ref, {
        mode: "payment",
        success_url: `${window.location.origin}/success/${UID}`,
        cancel_url: `${window.location.origin}/error/${UID}`,
        collect_shipping_address: true,
        customer_email: userData.email,
        line_items: State.cart.map((item) => ({
          price: item.product.priceId,
          quantity: item.quantity,
        })),
      });
      onSnapshot(
        doc(firestore, `customers/${UID}/checkout_sessions`, id),
        (doc) => {
          const Document = doc.data();
          const url = Document?.url;
          if (url) {
            SetURL(url);
          }
        }
      );
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
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
    getCheckOutSession,
    urlCheckOut: State.urlCheckOut,
    closeDrawer,
  };
};

export default useCartData;
