import React from "react";

export default function HelpCenterContent({ data }) {
  console.log(data)
  const { title, content } = data;
  return <div className="flex column pt4">
    <h4 style={{lineHeight: '1.2'}} className="mb3">{title}</h4>
    <p>{content}</p>
    </div>;
}
