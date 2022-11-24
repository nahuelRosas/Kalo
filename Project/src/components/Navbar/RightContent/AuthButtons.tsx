import React from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AuthModalState } from "../../../atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { FiLogIn, FiUserPlus, FiMenu } from "react-icons/fi";
import ItemMenu from "./itemMenu";
const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);

  return (
    <>
      {useBreakpointValue({
        md: (
          <>
            <Button
              colorScheme="purple"
              variant="outline"
              size={"md"}
              onClick={() =>
                setAuthModalState({
                  isOpen: true,
                  type: "login",
                })
              }>
              Log In
            </Button>
            <Button
              colorScheme="purple"
              variant="solid"
              ml={4}
              size={"md"}
              onClick={() =>
                setAuthModalState({
                  isOpen: true,
                  type: "SignUp",
                })
              }>
              Sign Up
            </Button>
          </>
        ),
        base: (
          <Menu
            isLazy
            placement="bottom-end"
            closeOnBlur={true}
            closeOnSelect={true}>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FiMenu />}
              variant="ghost"
              isRound={true}
              colorScheme="purple"></MenuButton>
            <MenuList>
              <ItemMenu
                title="Login"
                icon={FiLogIn}
                onClick={() =>
                  setAuthModalState({
                    isOpen: true,
                    type: "login",
                  })
                }
              />
              <ItemMenu
                title="SingUp"
                icon={FiUserPlus}
                onClick={() =>
                  setAuthModalState({
                    isOpen: true,
                    type: "SignUp",
                  })
                }
              />
            </MenuList>
          </Menu>
        ),
      })}
    </>
  );
};
export default AuthButtons;
