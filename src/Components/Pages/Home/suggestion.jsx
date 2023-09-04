import { Box, List, ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";
import "../../Comp.css";

import data from "../../../Data/Suggest.json";
import { Link } from "react-router-dom";
const Suggestions = () => {
  return (
    <Box className="thirdPart">
      <h3
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "4rem",
          marginBottom: "2rem",
        }}
      >
        Second Paper
      </h3>
      <UnorderedList>
        {data.EnglishSecondPaper.Paragraphs.map((item, key) => {
          return (
            <ListItem>
              <Link
                style={{ color: "#3182ce", fontSize: "1.5rem" }}
                to={item.path}
              >
                {item.name}
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
      <h3
        style={{
          fontSize: "1.5rem",
          marginLeft: "1rem",
          fontWeight: "bold",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        Compositions
      </h3>
      <UnorderedList>
        {data.EnglishSecondPaper.Compositons.map((items, key) => {
          return (
            <ListItem>
              <Link
                style={{ color: "#3182ce", fontSize: "1.5rem" }}
                to={items.path}
              >
                {items.name}
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default Suggestions;
