import React from 'react'
import { BiX } from 'react-icons/bi';
import { Avatar } from '~/KIT';
export default function Unlist({detail}) {
    const { address, type, value, date } = detail;
    return (
      <div className="flex alignCenter justifyBetween">
        <div className="flex alignCenter">
          <Avatar className="errorFilledBg mr3 small">
            <BiX />
          </Avatar>
          <div className="flex column">
            <span className="textSecondary">
              <span className="fontBold text mr1">{address}</span>
              unlisted
            </span>
            <time className="textSecondary fs-150" dateTime={date}>
              {date}
            </time>
          </div>
        </div>
      </div>
    );
}
