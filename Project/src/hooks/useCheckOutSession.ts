import { useToast } from "@chakra-ui/react";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import useCartData from "./useCartData";
import useUserData from "./useUserData";

const useCheckOutSession = () => {
  const { UID } = useUserData();
  const { Cart, SetURL } = useCartData();
  const Ref = collection(firestore, `customers/${UID}/checkout_sessions`);
  const toast = useToast();

  const getCheckOutSession = async () => {
    try {
      const { id } = await addDoc(Ref, {
        mode: "payment",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        collect_shipping_address: true,
        line_items: Cart.map((item) => ({
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
    getCheckOutSession, 
  };
};

export default useCheckOutSession;
