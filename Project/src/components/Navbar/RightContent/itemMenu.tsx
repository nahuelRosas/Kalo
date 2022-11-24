import {
  MenuItem,
  Icon,
  useColorModeValue,
  As,
  MenuItemProps,
} from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
import Link from "next/link";

type itemMenuProps = {
  icon?: As<any> | undefined;
  title?: string;
  href?: string;
  ItemMenuProp?: MenuItemProps;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ChangeIcon?: boolean;
};

const ItemMenu: React.FC<itemMenuProps> = ({
  title,
  icon,
  href,
  ItemMenuProp,
  children,
  onClick,
  ChangeIcon,
}) => {
  const color = useColorModeValue("purple.600", "purple.400") as
    | "purple.600"
    | "purple.400";

  ItemMenuProp = {
    ...ItemMenuProp,
    onClick: onClick ? onClick : undefined,
    as: href ? Link : undefined,
  };  

  return (
    <MenuItem
      {...ItemMenuProp}
      alignItems={"center"}
      {...(href ? { href: href, passHref: true } : {})}>
      <Icon
        as={icon}
        display={!ChangeIcon ? "unset" : "none"}
        color={color}
        mr={2}
      />
      {children}
      {title}
    </MenuItem>
  );
};
export default ItemMenu;
