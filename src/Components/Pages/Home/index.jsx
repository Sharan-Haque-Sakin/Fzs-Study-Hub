import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import "./../../Comp.css";
import finish from "../../../imgs/finish-line.png";
import SecondPart from "./secondPart";
import Suggestions from "./suggestion";
let style = {
  "@media (max-width:570px)": {
    px: "0px",
  },
};

export default function Home() {
  return (
    <Box className="homeContainer">
      <Box sx={style} as="main" py="3rem" px="4rem">
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <h2
            style={{
              fontWeight: "Bold",
              textAlign: "center",
            }}
            className="topHeader"
          >
            Finish YOUR English Syllabus!
          </h2>
          <img src={finish} alt="Finish Image" style={{ width: "13rem" }} />
        </Flex>

        <SecondPart />
        <Suggestions title="English 1st Paper" />
      </Box>
    </Box>
  );
}
