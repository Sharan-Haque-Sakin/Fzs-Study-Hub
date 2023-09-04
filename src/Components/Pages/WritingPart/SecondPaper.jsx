import { ListItem, UnorderedList } from "@chakra-ui/react";
import data from "./../../../Data/SecondCurrent.json";
import { Link } from "react-router-dom";
export default function SecondPart() {
  return (
    <>
      <UnorderedList>
        {data.Available.Paragraphs.map((items, key) => {
          return (
            <>
              <ListItem key={key} color="blue.500" fontSize="1.2rem">
                <Link to={items.path}>{items.name}</Link>
              </ListItem>
            </>
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
        {data.Available.Compositons.map((items, key) => {
          return (
            <ListItem key={key}>
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
      <h2 style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        More are coming soon... Stay tuned!
      </h2>
    </>
  );
}
