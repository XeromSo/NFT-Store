import React from "react";
import { BiTransfer } from "react-icons/bi";
import { Avatar } from "~/KIT";
export default function Transfer({ detail }) {
  const { address, type, value, date } = detail;
  return (
    <div className="flex alignCenter justifyBetween">
      <div className="flex alignCenter">
        <Avatar className="warningFilledBg mr3 small">
          <BiTransfer />
        </Avatar>
        <div className="flex column">
          <span className="textSecondary">
            <span className="fontBold text mr1">{address}</span>
            transfered to
            <span className="fontBold text ml1">{value.toAddress}</span>
          </span>
          <time className="textSecondary fs-150" dateTime={date}>
            {date}
          </time>
        </div>
      </div>
    </div>
  );
}
