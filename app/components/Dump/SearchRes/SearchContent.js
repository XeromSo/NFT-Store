import SearchResNft from "./nft";
import SearchResCollection from "./collection";
import SearchResUser from "./user";
import { Tab, Tabs } from "~/KIT";
import { FAKE_COLLECTION, FAKE_NFTS, FAKE_USERS } from "~/store/defaults";
import { useState } from "react";

const SearchContent = ({ searchValue, navigateTo, onNavigate }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabContents = [All, Nfts, Collections, Users];
  const TabContent = tabContents[tabIndex] || "span";

  return (
    <>
      <Tabs value={tabIndex} onChange={setTabIndex} className="small">
        <Tab label="All" value={0} />
        <Tab label="NFTs" value={1} />
        <Tab label="Collections" value={2} />
        <Tab label="Users" value={3} />
      </Tabs>
      <TabContent
        onNavigate={onNavigate}
        navigateTo={navigateTo}
        searchValue={searchValue}
      />
    </>
  );
};

const All = ({ searchValue, navigateTo, onNavigate }) => {
  return (
    <>
      <Nfts
        searchValue={searchValue}
        navigateTo={navigateTo}
        onNavigate={onNavigate}
      />
      <Collections
        searchValue={searchValue}
        navigateTo={navigateTo}
        onNavigate={onNavigate}
      />
      <Users
        searchValue={searchValue}
        navigateTo={navigateTo}
        onNavigate={onNavigate}
      />
    </>
  );
};
const Nfts = ({ searchValue, navigateTo, onNavigate }) => {
  const res = FAKE_NFTS.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (res.length === 0) return null;

  return (
    <>
      <label className="fs-150 textSecondary mt3 pl2 mb1">NFTs</label>
      <div className="flex column gap-1">
        {res.map((item, index) => (
          <SearchResNft
            key={`NFT_${item.id}`}
            onClick={(_id) => {
              if (onNavigate) onNavigate();
              navigateTo(`/nft/${_id}`);
            }}
            nft={item}
            searchWords={searchValue.split(" ")}
          />
        ))}
      </div>
    </>
  );
};
const Collections = ({ searchValue, navigateTo, onNavigate }) => {
  const res = FAKE_COLLECTION.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (res.length === 0) return null;
  return (
    <>
      <label className="fs-150 textSecondary mt3 pl2 mb1">Collections</label>
      <div className="flex column gap-1">
        {res.map((item, index) => (
          <SearchResCollection
            key={`COLLECTION_${item.id}`}
            onClick={(_id) => {
              if (onNavigate) onNavigate();
              navigateTo(`/collection/${_id}`);
            }}
            collection={item}
            searchWords={searchValue.split(" ")}
          />
        ))}
      </div>
    </>
  );
};
const Users = ({ searchValue, navigateTo, onNavigate }) => {
  const res = FAKE_USERS.filter((item) =>
    item.creator.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (res.length === 0) return null;
  return (
    <>
      <label className="fs-150 textSecondary mt3 pl2 mb1">Users</label>
      <div className="grid col4 col3-xs col2-xxs gap-2">
        {res.map((item, index) => (
          <SearchResUser
            key={`USER_${item.id}`}
            onClick={(_id) => {
              if (onNavigate) onNavigate();
              navigateTo(`/user/${_id}`);
            }}
            user={item}
            searchWords={searchValue.split(" ")}
          />
        ))}
      </div>
    </>
  );
};

export default SearchContent;
