import React from "react";

export default function Index({ title, value, className }) {
  return (
    <div className={`flex column alignCenter ${className}`}>
      <label className="textSecondary fs-150">{title}</label>
      <h4 className="fs-300 fontBold" style={{ lineHeight: "1.2" }}>
        {value}
      </h4>
    </div>
  );
}
