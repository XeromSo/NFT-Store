import React from "react";
import HelpLayout from "../HelpLayout";
export default function Index({ links, children }) {
  return (
    <HelpLayout routeKey="selling" label="Selling" links={links}>
      {children}
    </HelpLayout>
  );
}
