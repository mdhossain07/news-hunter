import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Popular from "./Popular";
import Shared from "./Shared";

const Articles = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h2>Article Page</h2>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Most popular articles</Tab>
          <Tab>Most shared articles</Tab>
        </TabList>

        <TabPanel>
          <Popular />
        </TabPanel>
        <TabPanel>
          <Shared />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Articles;
