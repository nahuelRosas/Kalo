import React from "react";
import NextLink from "next/link";
import { IconButton } from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";

const WishButton: React.FC = () => {
  return (
    <NextLink href="/wishlist" passHref>
      <IconButton
        aria-label="Favorite"
        icon={<MdFavorite />}
        variant="ghost"
        isRound={true}
        colorScheme="purple"
      />
    </NextLink>
  );
};
export default WishButton;
