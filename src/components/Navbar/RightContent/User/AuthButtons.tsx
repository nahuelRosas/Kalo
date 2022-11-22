import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { AuthModalState } from "../../../../atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { FiLogIn } from "react-icons/fi";
import { HiUserAdd } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";



const AuthButtons: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const text = useColorModeValue("Dark", "Light");

  return (
    <>
          <Menu
            isLazy
            placement="bottom-end"
            closeOnBlur={true}
            closeOnSelect={true}>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaUser />}
              variant="ghost"
              isRound={true}
              colorScheme="purple"></MenuButton>
            <MenuList>
              <MenuItem
                onClick={() =>
                  setAuthModalState({
                    isOpen: true,
                    type: "login",
                  })
                }
                icon={<FiLogIn size={20} />}>
                Log In
              </MenuItem>
              <MenuItem
                onClick={() =>
                  setAuthModalState({
                    isOpen: true,
                    type: "SignUp",
                  })
                }
                icon={<HiUserAdd size={20} />}>
                Sign Up
              </MenuItem>
              <MenuItem
            onClick={toggleColorMode}
            width="100%"
            aria-label="colorMode">
            {text === "Dark" ? (
              <BsMoonFill size={20} />
            ) : (
              <BsSunFill size={20} />
            )}
            <Text ml="2">{text}</Text>
          </MenuItem>
            </MenuList>
          </Menu>
    </>
  );
};
export default AuthButtons;
