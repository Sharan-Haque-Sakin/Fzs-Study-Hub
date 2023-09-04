import { extendTheme } from "@chakra-ui/react";

const themes = {
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Outfit",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Outfit",
      },
    },
  },

  styles: {
    global: (props) => ({
      "*": {
        margin: "0px",
        padding: "0px",
      },
      "html,body": {
        fontFamily: "Outfit",
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "#F0F0F0",
      },

      h2: {
        fontFamily: "Outfit",
      },

      ".Container": {
        maxWidth: "1040px",
        marginLeft: "auto",
        marginRight: "auto",
      },
      p: {
        fontSize: "1.2rem",
        lineHeight: "revert",
        wordSpacing: "3px",
        letterSpacing: "0.1px",
      },
    }),
  },
};

const theme = extendTheme(themes);

export default theme;
