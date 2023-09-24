import React from "react";
import { BiPlus } from "react-icons/bi";
import { Avatar } from "~/KIT";
export default function Mint({ detail }) {
  const { address, type, value, date } = detail;
  return (
    <div className="flex alignCenter justifyBetween">
      <div className="flex alignCenter">
        <Avatar className="successFilledBg mr3 small">
          <BiPlus />
        </Avatar>
        <div className="flex column">
          <span className="textSecondary">
            <span className="fontBold text mr1">{address}</span>
            minted
          </span>
          <time className="textSecondary fs-150" dateTime={date}>
            {date}
          </time>
        </div>
      </div>
    </div>
  );
}
