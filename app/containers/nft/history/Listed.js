import React from 'react'
import { BiAddToQueue, BiPlus } from 'react-icons/bi';
import { Avatar } from '~/KIT';

export default function Listed({detail}) {
    const { address, type, value, date } = detail;
    return (
      <div className="flex alignCenter justifyBetween">
        <div className="flex alignCenter">
          <Avatar className="mainFilledBg mr3 small">
            <BiAddToQueue />
          </Avatar>
          <div className="flex column">
            <span className="textSecondary">
              <span className="fontBold text mr1">{address}</span>
              listed for
            </span>
            <time className="textSecondary fs-150" dateTime={date}>
              {date}
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
