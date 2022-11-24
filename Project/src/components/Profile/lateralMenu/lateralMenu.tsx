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
        href="/profile"
        state={currentComponent === "Profile"}
      />
      <ItemMenu
        title="Settings"
        icon={FiSettings}
        href="/settings"
        state={currentComponent === "Settings"}
      />
      <ItemMenu
        title="Orders"
        icon={FiCheckSquare}
        href="/orders"
        state={currentComponent === "Orders"}
      />
      <ItemMenu
        title="Payments"
        icon={FiCreditCard}
        href="/payments"
        state={currentComponent === "Payments"}
      />
      <ItemMenu
        title="Wishlist"
        icon={FiHeart}
        href="/wishlist"
        state={currentComponent === "Wishlist"}
      />
      <TitleMenu title="Admin" />
      <ItemMenu
        title="Products"
        icon={FiPackage}
        href="/admin/products"
        state={currentComponent === "Products"}
      />
      <ItemMenu
        title="Create Product"
        icon={FiFilePlus}
        href="/admin/createProduct"
        state={currentComponent === "Create Product"}
      />
      <ItemMenu
        title="Edit Product"
        icon={FiEdit}
        href="/admin/editProduct"
        state={currentComponent === "Edit Product"}
      />
      <ItemMenu
        title="Categories"
        icon={FiGrid}
        href="/admin/categories"
        state={currentComponent === "Categories"}
      />
      <ItemMenu
        title="Orders"
        icon={FiCheckSquare}
        href="/admin/orders"
        state={currentComponent === "Orders"}
      />
      <ItemMenu
        title="Users"
        icon={FiUsers}
        href="/admin/users"
        state={currentComponent === "Users"}
      />
    </Box>
  );
};
export default LateralMenu;
