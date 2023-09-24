import React, { useEffect, useState } from "react";
import { BiSearch, BiX } from "react-icons/bi";
import { SearchContent } from "~/components";
import { Button, Tab, Tabs, TextField } from "~/KIT";
import {
  FAKE_COLLECTION,
  FAKE_NFTS,
  FAKE_POPULAR_SEARCH,
  FAKE_USERS,
} from "~/store/defaults";

export default function SearchModal({
  search,
  setSearch,
  closeModal,
  modalId,
  navigate,
}) {
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    setSearchState(search);
  }, [search]);

  return (
    <div className="flex column p2">
      <div className={`p1 dialog-drag-to-close-${modalId}`}>
        <TextField
          endIcon={
            searchState.length > 0 ? (
              <Button className="m1 icon" onClick={() => setSearchState("")}>
                <BiX size="1.5em" />
              </Button>
            ) : (
              ""
            )
          }
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
          placeholder="Search collections, users, nfts and more.."
          startIcon={<BiSearch className="ml2" size="1.6em" />}
        />
      </div>

      {searchState.length > 0 ? (
        <div className="flex column mt2">
          <SearchContent
            navigateTo={navigate}
            searchValue={searchState}
            onNavigate={() => {
              closeModal();
              setSearch(searchState);
            }}
          />
        </div>
      ) : (
        <div className="flex column mt2">
          <label className="textSecondary mb1 fs-150 pl2">Popular search</label>
          <div className="flex wrap gap-1 gap-1-xs">
            {FAKE_POPULAR_SEARCH.map((item, index) => (
              <Button
                onClick={() => setSearchState(item)}
                key={`${item}_${index}`}
                className="small b b1"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
