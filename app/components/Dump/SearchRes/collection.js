import React from "react";
import Highlighter from "react-highlight-words";
import { Avatar, Button } from "~/KIT";

export default function Collection({ collection, onClick, searchWords }) {
  const { id, title, creator, cover, floorPrice, totalVolume } = collection;
  return (
    <Button
      onClick={() => onClick(id)}
      className="flex alignCenter justifyBetween p1 radius-1 b b1"
    >
      <div className="flex alignCenter">
        <Avatar src={cover} className="small rounded" />
        <div className="flex column alignStart ml2">
          <span className="fs-200 fontBold ellipsisText" style={{ lineHeight: "1.2", maxWidth: '28ch' }}>
            <Highlighter
              highlightClassName="textHighLight"
              searchWords={searchWords}
              autoEscape={true}
              textToHighlight={title}
            />
          </span>
          <span className="textSecondary fs-150 mt1">Creator: {creator}</span>
        </div>
      </div>

      <div className="flex column alignEnd pr1">
        <span className="fontBold fs-150">{totalVolume}</span>
        <span className="textSecondary fs-150">
          Floor: <span className="fontBold text">{floorPrice}</span>
        </span>
      </div>
    </Button>
  );
}
