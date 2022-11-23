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

const LateralMenu: React.FC = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      py={4}
      px={6}
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth={1}
      borderColor={useColorModeValue("gray.200", "gray.700")}>
      <TitleMenu title="General" />
      <ItemMenu title="Profile" icon={FiUser} href="/profile" />
      <ItemMenu title="Settings" icon={FiSettings} href="/settings" />
      <ItemMenu title="Orders" icon={FiCheckSquare} href="/orders" />
      <ItemMenu title="Payments" icon={FiCreditCard} href="/payments" />
      <ItemMenu title="Wishlist" icon={FiHeart} href="/wishlist" />
      <TitleMenu title="Admin" />
      <ItemMenu title="Products" icon={FiPackage} href="/products" />
      <ItemMenu
        title="Create Product"
        icon={FiFilePlus}
        href="/create-product"
      />
      <ItemMenu title="Update Product" icon={FiEdit} href="/update-product" />
      <ItemMenu title="Categories" icon={FiGrid} href="/categories" />
      <ItemMenu title="Orders" icon={FiCheckSquare} href="/orders" />
      <ItemMenu title="Users" icon={FiUsers} href="/users" />
    </Box>
  );
};
export default LateralMenu;
