import { Box } from "@chakra-ui/react";
import "./Suggest.css";
export default function Suggest({ heading }) {
  return (
    <Box className="Suggest">
      <h2>{heading}</h2>
    </Box>
  );
}
