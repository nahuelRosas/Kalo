import { useToast } from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import { doc, updateDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { WishlistAtom } from "../atoms/wishlistAtom";
import { WishlistDrawerAtom } from "../atoms/wishListDrawerAtom";
import FormatPrice from "../components/Products/Price/formatPrice";
import { firestore } from "../firebase/clientApp";
import useUserData from "./useUserData";
const errors = {
  noSize: "No size selected. Please select a size before adding to cart",
  noStock: "No stock available. Please select a different size or product",
};

const useWishlistData = () => {
  const [State, SetState] = useRecoilState<WishlistAtom>(WishlistAtom);
  const [drawerState, setDrawerState] = useRecoilState(WishlistDrawerAtom);
  const toast = useToast();
  const { UID, userData } = useUserData();
  const toggleDrawer = () => {
    setDrawerState({ isOpen: !drawerState.isOpen, type: "wishList" });
  };

  const closeDrawer = () => {
    setDrawerState({ ...drawerState, isOpen: false });
  };

  const changeDrawer = (type: "wishList" | "checkout") => {
    setDrawerState({ isOpen: true, type });
  };

  const Length = State.wishlist.length || 0;

  const setWishlist = (wishlist: any) => {
    SetState({ wishlist: wishlist });
  };

  const TotalPrice = FormatPrice({
    value: State.wishlist
      ?.map((item) => item.product.price)
      .reduce((a, b) => a + b, 0),
  });

  const addProduct = (
    product: DocumentData,
    size: { value: string; label: string } | undefined,
    withOutToast: boolean = false
  ) => {
    const foundIndex = State.wishlist.findIndex(
      (x) => x.id === product.id && x.size.value === size?.value
    );

    if (foundIndex >= 0) {
      return;
    }

    try {
      if (size === undefined) {
        throw new Error(errors.noSize);
      }
      SetState({
        ...State,
        wishlist: [
          ...State.wishlist,
          {
            id: product.id,
            product,
            size: size,
          },
        ],
      });
      if (userData) {
        updateDoc(doc(firestore, "customers", UID), {
          wishlist: [
            ...State.wishlist,
            {
              id: product.id,
              product,
              size: size,
            },
          ],
        });
      }
      if (withOutToast) return;
      toast({
        title: "Product added to wishlist",
        description: "We've added the product to your wishlist",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      if (withOutToast) return;
      toast({
        title: "Error adding product to wishlist",
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
    const newWishlist = [...State.wishlist];
    const foundIndex = State.wishlist.findIndex(
      (x) => x.id === product.id && x.size.value === size?.value
    );

    try {
      if (size === undefined) {
        throw new Error(errors.noSize);
      }
      if (foundIndex >= 0) {
        newWishlist.splice(foundIndex, 1);
        SetState({ ...State, wishlist: newWishlist });
      }

      if (userData) {
        updateDoc(doc(firestore, "customers", UID), {
          wishlist: newWishlist,
        });
      }
      if (withOutToast) return;
      toast({
        title: "Product removed from wishlist",
        description: "We've removed the product from your wishlist",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      if (withOutToast) return;
      toast({
        title: "Error removing product from wishlist",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const clearWishlist = (withOutToast?: boolean) => {
    if (State.wishlist.length === 0) return;
    SetState({ ...State, wishlist: [] });
    if (userData && !withOutToast) {
      updateDoc(doc(firestore, "customers", UID), {
        wishlist: [],
      });
    }
    if (withOutToast) return;
    toast({
      title: "Wishlist cleared",
      description: "We've cleared your wishlist",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return {
    Wishlist: State.wishlist,
    Length,
    toggleDrawer,
    changeDrawer,
    isOpen: drawerState.isOpen,
    type: drawerState.type,
    TotalPrice,
    addProduct,
    deleteProduct,
    clearWishlist,
    closeDrawer,
    setWishlist,
  };
};

export default useWishlistData;
