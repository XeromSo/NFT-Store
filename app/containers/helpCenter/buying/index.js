import React from "react";
import HelpLayout from "../HelpLayout";
export default function Index({ links, children }) {
  return (
    <HelpLayout routeKey="buying" label="Buying" links={links}>
      {children}
    </HelpLayout>
  );
}
