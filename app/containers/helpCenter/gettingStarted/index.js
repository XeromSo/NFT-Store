import React from "react";
import HelpLayout from "../HelpLayout";
export default function Index({ links, children }) {
  return (
    <HelpLayout routeKey="gettingStarted" label="Getting started" links={links}>
      {children}
    </HelpLayout>
  );
}
