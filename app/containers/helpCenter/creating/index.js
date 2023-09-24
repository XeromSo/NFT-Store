import React from "react";
import HelpLayout from "../HelpLayout";
export default function Index({ links, children }) {
  return (
    <HelpLayout routeKey="creating" label="Creating" links={links}>
      {children}
    </HelpLayout>
  );
}
