import React from "react";
import { UnderConstruction } from "~/components";
export function meta() {
  return {
    title: "Ranking",
    description: "Ranking desc",
    keywords: "remix, javascript, react",
  };
}
export default function Ranking() {
  return (
    <div className="contained md flex column pt16 pb16">
      <UnderConstruction />
    </div>
  );
}
