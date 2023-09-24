import { nanoid } from "nanoid";
import React from "react";

export default function Index(props) {
  console.log(props);
  const { properties } = props;
  return (
    <div className="flex column gap-1 properties-holder">
      <div className="flex alignCenter justifyBetween pl4 pr4">
        <label className="textSecondary">NAME</label>
        <label className="textSecondary">VALUE</label>
      </div>
      {properties.map((property, i) => (
        <div key={nanoid()} className="flex alignCenter justifyBetween p3 pl4 pr4 radius-1 b b1">
          <span className="textSecondary">{property.name}</span>
          <span className="fontBold">{property.value}</span>
        </div>
      ))}
    </div>
  );
}
