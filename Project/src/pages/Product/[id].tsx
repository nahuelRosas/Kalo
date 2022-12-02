import React from "react";
import { useRouter } from "next/router";
import ProductDetailComponent from "../../components/Products/ProductDetail/ProductDetail";

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ProductDetailComponent id={id} product={{}} />
    </div>
  );
};
export default ProductDetail;