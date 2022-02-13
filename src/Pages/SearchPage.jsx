import React, { useState } from "react";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import AlbumBrowser from "../Components/AlbumBrowser/AlbumBrowser";
import SearchBar from "../Components/SearchBar/SearchBar";
import SearchResults from "../Components/SearchResults/SearchResults";
import "react-tabs/style/react-tabs.css";

const SearchPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [term, setTerm] = useState("");
  const handleSetTerm = (term) => {
    setTerm(term);
  };
  const [selectedArtist, setSelectedArtist] = useState("");
  const handleSetSelectedArtist = (artistId) => {
    setSelectedArtist(artistId);
    setSelectedTab(1);
  };
  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <SearchBar term={term} setTerm={handleSetTerm} />
      <Tabs onSelect={handleTabSelect} selectedIndex={selectedTab}>
        <TabList>
          <Tab>artist</Tab>
          <Tab>releases</Tab>
        </TabList>
        <TabPanel>
          {!!term && (
            <SearchResults
              term={term}
              setSelectedArtist={handleSetSelectedArtist}
            />
          )}
        </TabPanel>
        <TabPanel>
          {!!selectedArtist && <AlbumBrowser selectedArtist={selectedArtist} />}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SearchPage;
