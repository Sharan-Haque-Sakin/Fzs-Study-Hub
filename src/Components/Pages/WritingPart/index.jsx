import {
  Box,
  Heading,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  TabIndicator,
  Flex,
} from "@chakra-ui/react";
import dataFirst from "../../../Data/EnglishFirst.json";

import dataSecond from "../../../Data/EnglishFirst.json";
import FirstPaper from "./FirstPaper";
export default function WritingPart() {
  return (
    <Box clasName="writtingPartContainer">
      <Flex flexDir="row" justifyContent="center">
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>First Paper</Tab>
            <Tab>Second Paper</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <FirstPaper />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
