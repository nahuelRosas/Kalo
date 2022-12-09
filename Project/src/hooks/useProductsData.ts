import { DocumentData } from "@firebase/firestore-types";
import { collection, getDocs } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { ProductsAtom } from "../atoms/productsAtom";
import { firestore } from "../firebase/clientApp";
import { useToast } from "@chakra-ui/react";
const useProductsData = () => {
  const [products, setProducts] = useRecoilState(ProductsAtom);
  const toast = useToast();

  const getProducts = async () => {
    if (products.isLoadead) return;
    try {
      await getDocs(collection(firestore, "ArrayProducts")).then(
        async (querySnapshot) => {
          if (querySnapshot.docs.length === 0)
            throw new Error("ERROR 500: No found products in Firestore");
          const ArrayProducts = querySnapshot.docs[0].data();
          const ArrayProductsProducts = ArrayProducts.products;
          const ArrayProductsProductsActive = ArrayProductsProducts.filter(
            (product: DocumentData) => product.active
          );
          setProducts({
            products: ArrayProductsProducts,
            productsActive: ArrayProductsProductsActive,
            isLoadead: true,
          });
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

  const productsActive = products.productsActive;
  const productsAll = products.products;
  const findProduct = (id: string) => {
    const product = products.products.find((product) => product.id === id);
    return product;
  };

  return { getProducts, productsActive, productsAll, findProduct };
};
export default useProductsData;
