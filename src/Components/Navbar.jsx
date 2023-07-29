import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  useColorMode,
  LightMode,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "../imgs/Logo.png";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const Nav = [
    { name: "Home", path: "/" },
    // { name: "Writing-Part", path: "/writingpart" },
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
  const firstFlex = {
    flexDirection: "row",
  };
  return (
    <Box
      as="nav"
      padding="24px"
      h="fit-content"
      backgroundColor={colorMode === "dark" ? "gray.700" : "white"}
    >
      <Flex
        sx={firstFlex}
        justifyContent="space-between"
        className="navFirstFlex"
      >
        <img src={Logo} alt="logo" style={{ width: "4rem" }} />
        <HStack gap="1.2rem">
          {Nav.map((item, key) => {
            return (
              <NavLink to={`${item.path}`} style={NavStyle} key={key}>
                {item.name}
              </NavLink>
            );
          })}
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
          <IconButton
            onClick={toggleColorMode}
            colorScheme={colorMode === "dark" ? "orange" : "purple"}
          >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
}
