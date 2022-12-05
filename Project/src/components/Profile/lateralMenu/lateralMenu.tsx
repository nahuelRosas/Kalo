import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import {
  FiCheckSquare,
  FiCreditCard,
  FiEdit,
  FiFilePlus,
  FiGrid,
  FiHeart,
  FiPackage,
  FiSettings,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import ItemMenu from "./itemMenu";
import TitleMenu from "./titleMenu";
type LateralMenuProps = {
  currentComponent: string;
};

const LateralMenu: React.FC<LateralMenuProps> = ({ currentComponent }) => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      py={4}
      px={6}
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth={1}
      borderColor={useColorModeValue("gray.200", "gray.700")}>
      <TitleMenu title="General" />
      <ItemMenu
        title="Profile"
        icon={FiUser}
        href="/configuration/profile"
        state={currentComponent === "Profile"}
      />
      {/* <ItemMenu
        title="Settings"
        icon={FiSettings}
        href="/configuration/settings"
        state={currentComponent === "Settings"}
      />
      <ItemMenu
        title="Orders"
        icon={FiCheckSquare}
        href="/configuration/orders"
        state={currentComponent === "Orders"}
      />
      <ItemMenu
        title="Payments"
        icon={FiCreditCard}
        href="/configuration/payments"
        state={currentComponent === "Payments"}
      />
      <ItemMenu
        title="Wishlist"
        icon={FiHeart}
        href="/configuration/wishlist"
        state={currentComponent === "Wishlist"}
      /> */}
      <TitleMenu title="Admin" />
      <ItemMenu
        title="Products"
        icon={FiPackage}
        href="/configuration/admin/Admproducts"
        state={currentComponent === "ADMIN — Products"}
      />
      <ItemMenu
        title="Create Product"
        icon={FiFilePlus}
        href="/configuration/admin/AdmcreateProduct"
        state={currentComponent === "ADMIN — Create Product"}
      />
      {/* <ItemMenu
        title="Edit Product"
        icon={FiEdit}
        href="/configuration/admin/AdmeditProduct"
        state={currentComponent === "ADMIN — Edit Product"}
      />
      <ItemMenu
        title="Categories"
        icon={FiGrid}
        href="/configuration/admin/Admcategories"
        state={currentComponent === "ADMIN — Categories"}
      />
      <ItemMenu
        title="Orders"
        icon={FiCheckSquare}
        href="/configuration/admin/Admorders"
        state={currentComponent === "ADMIN — Orders"}
      />
      <ItemMenu
        title="Users"
        icon={FiUsers}
        href="/configuration/admin/Admusers"
        state={currentComponent === "ADMIN — Users"}
      /> */}
    </Box>
  );
};
export default LateralMenu;
