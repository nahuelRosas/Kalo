import { firestore } from "../firebase/clientApp";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { ProductsAtom } from "../atoms/productsAtom";
import { useRecoilState } from "recoil";
import { DocumentData } from "@firebase/firestore-types";
import { json } from "stream/consumers";

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

  const productsActiveReadOnly = products.products.filter((product) => product.active);

  const productsActive= productsActiveReadOnly.map((product)=>{
    return JSON.parse(JSON.stringify(product))
  })

  return { getProducts, productsActive };
};
export default useProductsData;
