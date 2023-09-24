import React from "react";
import Stories from "./stories";
import TrendNfts from "./trends";
import MostWatched from "./mostWatched";
import Collections from "./collections";
import {FAKE_COLLECTION, FAKE_STORIES, FAKE_NFTS} from "~/store/defaults";
export default function Index() {
  return (
    <div className="flex column discoverWrapper pb5">
      <div className="overflowCover bodyBg dNoneSm" />
      <div className="discoverContentWrapper">
        <div className="p3 flex alignCenter justifyBetween w100 mb1">
          <h3 className="fontBold fs-500">Discover</h3>
          {/* <Button className="icon">
            <BiSearch />
          </Button> */}
        </div>
        <Stories list={FAKE_STORIES} />

        <TrendNfts list={FAKE_NFTS} />

        <MostWatched list={FAKE_NFTS} />

        <Collections list={FAKE_COLLECTION} />
      </div>
    </div>
  );
}
