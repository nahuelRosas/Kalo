import React from "react";
import { useRouter } from "next/router";
import ProductDetail from "../../components/Products/ProductDetail/ProductDetail";
import { DocumentData } from "@firebase/firestore-types";
import useProductsData from "../../hooks/useProductsData";

type ProductDetailsProps = {
  product: DocumentData;
};

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  const { productsActive } = useProductsData();

  return (
    <div>
      {productsActive.map((product: DocumentData, index: number) => {
        if (product.id === id) {
          return <ProductDetail key={index} id={id} product={product} />;
        }
      })}
    </div>
  );
};
export default ProductDetails;
