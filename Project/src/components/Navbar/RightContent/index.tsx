import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import { User } from "firebase/auth";
import UserMenu from "./UserMenu";
type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex>{!user ? <AuthButtons /> : <UserMenu user={user} />}</Flex>
    </>
  );
};
export default RightContent;
