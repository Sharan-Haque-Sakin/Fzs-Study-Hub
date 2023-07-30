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
              <ListItem color="blue.500" fontSize="1.2rem">
                <Link to={items.path}>{items.name}</Link>
              </ListItem>
            </>
          );
        })}
      </UnorderedList>
      <h2 style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        More are coming soon... Stay tuned!
      </h2>
    </>
  );
}
