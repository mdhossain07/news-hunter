import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Popular from "./Popular";
import Shared from "./Shared";
import getPopularData from "../utils/getPopularData";
import getSharedData from "../utils/getSharedData";
import SearchBar from "./SearchBar";

const Articles = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [articles, setArticles] = useState([]);

  const handleSearch = (text) => {
    const filteredData = articles.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setArticles(filteredData);
  };

  useEffect(() => {
    if (tabIndex === 0) {
      getPopularData().then((res) => {
        setArticles(res.results);
      });
    } else if (tabIndex === 1) {
      getSharedData().then((res) => {
        setArticles(res.results);
      });
    }
  }, [tabIndex]);

  return (
    <div>
      <h2>Article Page</h2>

      <SearchBar onSearch={handleSearch} />

      <Tabs
        className="my-10"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Most popular articles</Tab>
          <Tab>Most shared articles</Tab>
        </TabList>

        <TabPanel>
          <Popular articles={articles} />
        </TabPanel>
        <TabPanel>
          <Shared articles={articles} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Articles;
