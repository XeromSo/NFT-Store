import React from "react";

export default function Index({title, color}) {
  return (
    <div className="flex alignCenter">
      <div
        className={`${color}FilledBg mr3`}
        style={{ height: "2em", width: "1em", borderRadius: "0.2em" }}
      />
      <h4 className="fs-300" style={{ lineHeight: "1.2" }}>
        {title}
      </h4>
    </div>
  );
}
