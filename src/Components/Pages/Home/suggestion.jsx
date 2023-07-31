import { Box, List, ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";
import "../../Comp.css";

import data from "../../../Data/Suggest.json";
import { Link } from "react-router-dom";
const Suggestions = ({ title }) => {
  return (
    <Box className="thirdPart">
      <h2 style={{ marginTop: "5rem" }}>Here are some suggetions for you:-</h2>

      <h3
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "4rem",
          marginBottom: "2rem",
        }}
      >
        {title}
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
    </Box>
  );
};

export default Suggestions;
