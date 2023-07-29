import data from "../../../Data/EnglishFirst.json";
import {
  Box,
  Heading,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  TabIndicator,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
export default function FirstPaper() {
  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>Paragraphs</Tab>
          <Tab>Emails</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <UnorderedList>
              {data.EnglishFirstPaper["Informal Letters"].map((item, k) => {
                return (
                  <>
                    <ListItem fontSize="1.2rem">{item}</ListItem>
                  </>
                );
              })}
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
