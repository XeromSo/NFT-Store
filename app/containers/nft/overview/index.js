import React from "react";
import Bid from "../Bid";
import { Button } from "~/KIT";
import { nanoid } from "nanoid";

export default function Index({ bids, description }) {
  return (
    <>
      <h5 className="w100">Description</h5>
      <p className="w100 mt2 textSecondary">{description}</p>

      <h5 className="w100 mt6">Latest bids</h5>
      <div className="flex column gap-2 p4 radius-2 b b1 w100 mt2">
        {bids.map((bid, i) => (
          <Bid bid={bid} key={nanoid()} />
        ))}
        <Button className=" mt4">See All</Button>
      </div>
    </>
  );
}
