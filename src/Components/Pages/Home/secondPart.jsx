import { Card, CardBody, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../../Comp.css";
const style = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "12rem",
  "@media (max-width:570px)": {
    flexDirection: "column",
    gap: "6rem",
  },
};
export default function SecondPart() {
  const toast = useToast();
  const click = () => {
    toast({
      title: "Message!",
      description: "This page is currently under developement!",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <div className="secondPart">
      <h2 style={{ marginBottom: "6rem", textAlign: "center" }}>
        <b>What are you looking for? </b>
      </h2>
      <Flex
        flexDirection="row"
        sx={style}
        justifyContent="center"
        alignItems="center"
        gap="12rem"
        className="thisismainFlexContainer"
      >
        <div style={{ scale: "2" }}>
          <Card>
            <CardBody onClick={click}>
              <Link to="">Writing Part</Link>{" "}
            </CardBody>
          </Card>
        </div>

        {/* <div style={{ scale: "2" }}>
          <Card>
            <CardBody>
              <Link to="/grammerpart">Grammer Part</Link>{" "}
            </CardBody>
          </Card>
        </div> */}
      </Flex>
    </div>
  );
}
