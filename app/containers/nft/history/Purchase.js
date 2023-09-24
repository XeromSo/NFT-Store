import React from "react";
import { BiLink, BiPurchaseTagAlt } from "react-icons/bi";
import { Avatar } from "~/KIT";

export default function Purchase({ detail }) {
  const { address, type, value, date } = detail;
  return (
    <div className="flex alignCenter justifyBetween">
      <div className="flex alignCenter">
        <Avatar className="infoFilledBg mr3 small">
          <BiPurchaseTagAlt />
        </Avatar>
        <div className="flex column">
          <span className="textSecondary">
            <span className="fontBold text mr1">{address}</span>
            purchase for
          </span>
          <time className="textSecondary fs-150 flex alignCenter" dateTime={date}>
            {date}{" "}
            <span className="ml1 cursorPoint">
              <BiLink />
            </span>
          </time>
        </div>
      </div>
      <div className="flex column alignEnd">
        <span className="textSecondary fs-150">Price</span>
        <span className="fontBold">{value.price}</span>
      </div>
    </div>
  );
}
