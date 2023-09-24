import React from "react";
import { Button, Radio } from "~/KIT";
import storySvg from "~/assets/undraw/story.svg";
import nftSvg from "~/assets/undraw/nft.svg";
import collectionSvg from "~/assets/undraw/collection.svg";
import { HiBadgeCheck } from "react-icons/hi";
import { useNavigate } from "@remix-run/react";
export default function Index() {
  const [selectedOption, setSelectedOption] = React.useState("nft");
  const navigate = useNavigate();
  return (
    <div
      className="flex column alignCenter justifyCenter alignStart-sm justifyStart-sm p3"
      style={{ minHeight: "75vh" }}
    >
      <div className="flex column alignStart w100">
        <h4 className="fs-500">Create</h4>
        <p className="textSecondary">
          You can create a story, a collection or an NFT.
        </p>
        <div className="grid col3 col1-sm alignCenter gap-2 mt5 w100">
          <CreateOption
            isSelected={selectedOption === "nft"}
            onSelect={() => setSelectedOption("nft")}
            src={nftSvg}
            label="NFT item"
            text="Create an NFT item and share it with community."
          />
          <CreateOption
            isSelected={selectedOption === "collection"}
            onSelect={() => setSelectedOption("collection")}
            src={collectionSvg}
            label="Collection"
            text="Create a collection and add NFT items to it."
          />
          <CreateOption
            isSelected={selectedOption === "story"}
            src={storySvg}
            onSelect={() => setSelectedOption("story")}
            label="Story"
            text="Create a story that will be shared with the followers."
          />
        </div>

        <div className="flex justifyEnd w100 mt6">
          <Button
            onClick={() => {
              if (selectedOption)
                navigate(`/dashboard/create/${selectedOption}`);
            }}
            className="contained"
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}

const CreateOption = ({
  src,
  label,
  text,
  isSelected = false,
  onSelect = () => {},
}) => {
  return (
    <div
      className={`b b1 p5 radius-2 flex column alignStart relative create-option ${
        isSelected ? "selectedOp" : ""
      }`}
      onClick={onSelect}
    >
      {isSelected && (
        <div className="absolute" style={{ top: "0.5em", right: "0.5em" }}>
          <HiBadgeCheck className="mainColor" size="1.8em" />
        </div>
      )}
      <img src={src} style={{ height: "8em" }} />
      <span className="mt5 mb1 fs-300">{label}</span>
      <p className="textSecondary fs-150" style={{ maxWidth: "32ch" }}>
        {text}
      </p>
    </div>
  );
};
