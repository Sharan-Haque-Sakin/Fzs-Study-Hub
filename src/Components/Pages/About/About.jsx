import { Flex, Heading, Text } from "@chakra-ui/react";

const style = {
  fontSize: "2rem",
  "@media (max-width:500px)": {
    fontSize: "1rem",
  },
};

export default function About() {
  return (
    <>
      <Heading textAlign="center" my="3rem">
        About
      </Heading>
      <Text sx={style}>
        Hey folks! This is a website for everyone studying at Faridpur Zilla
        School. I've found that students are sometimes struggling hard to get
        the writing part items in guide or internet. So I made this website as a
        Solution of the problem! Hope you will be helped with it! Have a great
        day!
      </Text>
      <Flex flexDir="row" justifyContent="flex-end" width="100%">
        <Text sx={style}>
          <i>-Sharan Haque Sakin</i>
        </Text>
      </Flex>
    </>
  );
}
