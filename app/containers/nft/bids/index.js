import React from "react";
import Bid from "../Bid";
import { Button } from "~/KIT";
import { nanoid } from "nanoid";

export default function Index({ bids }) {
  return (
    <>
      <div className="mt6 flex column gap-2 p4 radius-2 b b1 w100 mt2">
        {bids.map((bid, i) => (
          <Bid key={nanoid()} bid={bid} />
        ))}
        <Button className=" mt4">Load More</Button>
      </div>
    </>
  );
}
