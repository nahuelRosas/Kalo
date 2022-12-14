import { useToast } from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import { useRecoilState } from "recoil";
import FormatPrice from "../components/Products/Price/formatPrice";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import useUserData from "./useUserData";
import { firestore } from "../firebase/clientApp";
import { WishlistAtom } from "../atoms/wishlistAtom";
import { WishlistDrawerAtom } from "../atoms/wishListDrawerAtom";

const errors = {
    noSize: "No size selected. Please select a size before adding to cart",
    noStock: "No stock available. Please select a different size or product",
};

const useWishlistData = () => {
    const [State, SetState] = useRecoilState<WishlistAtom>(WishlistAtom);
    const [drawerState, setDrawerState] = useRecoilState(WishlistDrawerAtom);
    const toast = useToast();
    const { UID, userData } = useUserData();
    const Ref = collection(firestore, `customers/${UID}/checkout_sessions`);

    const toggleDrawer = () => {
        setDrawerState({ isOpen: !drawerState.isOpen, type: "wishList" });
    };

    const closeDrawer = () => {
        setDrawerState({ ...drawerState, isOpen: false });
    };

    const changeDrawer = (type: "wishList" | "checkout") => {
        setDrawerState({ isOpen: true, type });
    };

    const Length =
        State.wishlist.length/* map((item) => item.quantity).reduce((a, b) => a + b, 0) || 0; */

    const TotalPrice = FormatPrice({
        value: State.wishlist.map((item) => item.price).reduce((a, b) => a + b, 0),
    });

    const addProduct = (
        product: DocumentData,
        size: { value: string; label: string } | undefined,
        withOutToast: boolean = false
    ) => {
        const newWishlist = [...State.wishlist];
        const foundIndex = State.wishlist.findIndex(
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
              State.wishlist[foundIndex]?.quantity + 1
            ) {
              throw new Error(errors.noStock);
            }

            if (foundIndex >= 0) {
                newWishlist[foundIndex] = {
                    ...State.wishlist[foundIndex],
                    quantity: State.wishlist[foundIndex].quantity + 1,
                    price: State.wishlist[foundIndex].price,
                };
                SetState({ ...State, wishlist: newWishlist });
            } else {
                SetState({
                    ...State,
                    wishlist: [
                        ...State.wishlist,
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
                title: "Product added to wishlist",
                description: "We've added the product to your wishlist",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
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

    const decrementProduct = (
        product: DocumentData,
        size: { value: string; label: string } | undefined,
        withOutToast: boolean = false
    ) => {
        const newCart = [...State.wishlist];
        const foundIndex = State.wishlist.findIndex(
            (x) => x.id === product.id && x.size.value === size?.value
        );

        try {
            if (size === undefined) {
                throw new Error(errors.noSize);
            }

            if (State.wishlist[foundIndex].quantity <= 1) {
                deleteProduct(product, size);
                return;
            }

            if (foundIndex >= 0) {
                newCart[foundIndex] = {
                    ...State.wishlist[foundIndex],
                    quantity: State.wishlist[foundIndex].quantity - 1,
                    price: State.wishlist[foundIndex].price - product.price,
                };
                SetState({ ...State, wishlist: newCart });
            } else {
                SetState({
                    ...State,
                    wishlist: [
                        ...State.wishlist,
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

    const clearWishlist = () => {
        if (State.wishlist.length === 0 /* && State.urlCheckOut === "" */) return;
        SetState({ ...State, wishlist: []/* , urlCheckOut: ""  */ });
    };

    const SetURL = (url: string) => {
        SetState({
            ...State,
            //   cartAfterPay: State.wishlist,
            //   urlCheckOut: url,
        });
    };
    const getCheckOutSession = async () => {
        SetState({
            ...State,
            //   urlCheckOut: "",
        });
        try {
            const { id } = await addDoc(Ref, {
                mode: "payment",
                success_url: `${window.location.origin}/success/${UID}`,
                cancel_url: `${window.location.origin}/error/${UID}`,
                collect_shipping_address: true,
                customer_email: userData.email,
                line_items: State.wishlist.map((item) => ({
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
        Wishlist: State.wishlist,
        Length,
        toggleDrawer,
        changeDrawer,
        isOpen: drawerState.isOpen,
        type: drawerState.type,
        TotalPrice,
        addProduct,
        decrementProduct,
        deleteProduct,
        clearWishlist,
        SetURL,
        getCheckOutSession,
        // urlCheckOut: State.urlCheckOut,
        closeDrawer,
    };
};

export default useWishlistData;
