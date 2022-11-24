import React from "react";
import Index from "../../components/Profile";
import { useRouter } from "next/router";
import { itemMenuTitle } from "../../utils/constant";

const ItemMenu: React.FC = () => {
  const router = useRouter();
  const { itemMenuAdmin } = router.query;

  return (
    <Index type={itemMenuTitle[itemMenuAdmin as keyof typeof itemMenuTitle]} />
  );
};

export default ItemMenu;
