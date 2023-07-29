import { Box, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      w="100%"
      bgColor={colorMode === "dark" ? "gray.700" : "gray.800"}
      height="17rem"
      as="div"
      className="Footer"
      // position="fixed"
      left="0"
      bottom="0"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <h2
          style={{
            fontWeight: "normal",
            color: "white",
            fontSize: "1.5rem",
            paddingTop: "4rem",
          }}
        >
          © Sharan Haque Sakin
        </h2>
        <h3 style={{ color: "white" }}>
          Made by{" "}
          <span>
            <a
              style={{ color: "aqua" }}
              href="https://github.com/Sharan-Haque-Sakin"
            >
              @sharanhaquesakin
            </a>
          </span>
        </h3>
      </Flex>
    </Box>
  );
};

export default Footer;
