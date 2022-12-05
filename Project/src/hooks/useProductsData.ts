import { DocumentData } from "@firebase/firestore-types";
import { collection, getDocs } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { ProductsAtom } from "../atoms/productsAtom";
import { firestore } from "../firebase/clientApp";

const useProductsData = () => {
  const [products, setProducts] = useRecoilState(ProductsAtom);

  const getProducts = async () => {
    if (products.isLoadead) return;
    await getDocs(collection(firestore, "products")).then(
      async (querySnapshot) => {
        const products: DocumentData[] = [];
        for await (const doc of querySnapshot.docs) {
          const product = doc.data();
          product.id = doc.id;
          const priceDoc = await getDocs(collection(doc.ref, "prices"));
          const prices = priceDoc.docs.map((price) => price.data());
          product.prices = prices;
          products.push(product);
        }
        setProducts({ products, isLoadead: true });
      }
    );
  };

  const AllProducts = products.products;
  const productsActive = products.products.filter((product) => product.active);

  return { getProducts, productsActive, AllProducts };
};
export default useProductsData;
