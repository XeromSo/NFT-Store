import React from "react";
import { Button, Avatar } from "~/KIT";
import Highlighter from "react-highlight-words";

const SearchResNft = ({ nft, searchWords, onClick }) => {
  return (
    <Button
      className="w100 p1 radius-1 b b1 flex alignCenter justifyBetween"
      onClick={() => onClick(nft.id)}
    >
      {/* <div className="flex alignCenter justifyBetween p1 w100"> */}
        <div className="flexGrow1 flex alignCenter">
          <Avatar src={nft.image} className="small rounded" />
          <div className="flex column alignStart ml2">
            <span className="fs-200 fontBold" style={{lineHeight: '1.2'}}>
              <Highlighter
                highlightClassName="textHighLight"
                searchWords={searchWords}
                autoEscape={true}
                textToHighlight={nft.title}
              />
            </span>
            <span className="textSecondary fs-100 mt1">
              Created: {nft.creator}
            </span>
          </div>
        </div>
        <div className="flex column alignEnd pr1">
          <div className="flex alignCenter">
            <span className="fs-100">{nft.currentBid}</span>
            <span className="fs-100 textSecondary ml1">Bid</span>
          </div>
          <div className="flex alignCenter mt1">
            <span className="fs-100">{nft.likes}</span>
            <span className="fs-100 textSecondary ml1">Like</span>
          </div>
        </div>
      {/* </div> */}
    </Button>
  );
};

export default SearchResNft;
