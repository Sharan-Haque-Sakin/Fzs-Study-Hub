import { HamburgerIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import "./Comp.css";
import { useRef, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  LightMode,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  CloseButton,
  Spacer,
} from "@chakra-ui/react";

import Logo from "../imgs/Logo.png";
const NavItems = [
  { name: "Home", path: "/" },
  { name: "Writing-Part", path: "/writingpart" },
  { name: "About", path: "/about" },
];
export const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const Nav = [
    { name: "Home", path: "/" },
    { name: "Writing-Part", path: "/writingpart" },
    // { name: "Grammer-Part", path: "/grammerpart" },
    { name: "About", path: "/about" },
  ];
  let j = colorMode === "dark" ? "#c4c4c4" : "black";
  const NavStyle = ({ isActive }) => {
    return {
      color: isActive ? "#8F01FF" : j,
      fontSize: "1.3rem",
    };
  };

  const [isActive, setIsActive] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();
  return (
    <Box
      bgColor={colorMode === "dark" ? "gray.700" : "white"}
      padding="1rem"
      h="fit-content"
    >
      <Flex justifyContent="space-between" w="100%">
        <img src={Logo} alt="logo" style={{ width: "4rem", margin: "auto" }} />
        <Spacer />
        <IconButton onClick={onOpen} ref={btnRef}>
          <HamburgerIcon />
        </IconButton>
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent>
          <CloseButton onClick={onClose} />
          <DrawerHeader borderBottomWidth="1px">FZS Study Hub</DrawerHeader>
          <DrawerBody>
            <HStack gap="1.2rem" flexDir="column">
              <IconButton
                onClick={toggleColorMode}
                colorScheme={colorMode === "dark" ? "orange" : "purple"}
              >
                {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </IconButton>
              <LightMode>
                {/* <InputGroup w="14rem">
                  <Input
                    variant="filled"
                    backgroundColor="gray.100"
                    placeholder="Search"
                  />
                  <IconButton colorScheme="blue" marginLeft="1rem">
                    <SearchIcon />
                  </IconButton>
                </InputGroup> */}
              </LightMode>
              {Nav.map((item, key) => {
                return (
                  <NavLink
                    onClick={onClose}
                    to={`${item.path}`}
                    style={NavStyle}
                    key={key}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
