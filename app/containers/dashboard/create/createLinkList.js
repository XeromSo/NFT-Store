import { CustomLink } from "~/components";
import { Button } from "~/KIT";

export default function CreateLinkList({ activeLink = "nft" }) {
  return (
    <div className="flex column buttonAlignsLeft">
      <CustomLink className="w100" to="/dashboard/create/nft">
        <Button className={`w100 ${activeLink === "nft" ? "mainColor" : ""}`}>
          NFT
        </Button>
      </CustomLink>
      <CustomLink className="w100" to="/dashboard/create/collection">
        <Button
          className={`w100 ${activeLink === "collection" ? "mainColor" : ""}`}
        >
          Collection
        </Button>
      </CustomLink>
      <CustomLink className="w100" to="/dashboard/create/story">
        <Button className={`w100 ${activeLink === "story" ? "mainColor" : ""}`}>
          Story
        </Button>
      </CustomLink>
    </div>
  );
}
