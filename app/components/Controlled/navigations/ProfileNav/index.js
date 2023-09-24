import { useLocation, useNavigate } from "@remix-run/react";
import React from "react";
import { BiHome, BiNotification, BiUser } from "react-icons/bi";
import { Tabs, Tab } from "~/KIT";
export default function Index() {
  //   return (
  //     <Tabs value={0}>
  //       <Tab label="Overview" value={0} />
  //       <Tab label="Owned" value={1} />
  //       <Tab label="On sale" value={2} />
  //       <Tab label="Favorited" value={3} />
  //       <Tab label="Activity" value={4} />
  //     </Tabs>
  //   );
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Tabs
      // className="mb3"
      className="overflowXAuto mW100 scrollBarVisibleNone"
      value={pathname}
      onChange={(e) => {
        navigate(e, {
          state: { scroll: false },
        });
      }}
    >
      <Tab
        label="Overview"
        // startIcon={<BiHome />}
        value="/dashboard/profile/overview"
      />
      <Tab
        label={`Owned (12)`}
        // startIcon={<BiNotification />}
        value="/dashboard/profile/owned"
      />
      <Tab
        label="Created (24)"
        // startIcon={<BiNotification />}
        value="/dashboard/profile/created"
      />
      <Tab
        label="Collections (3)"
        // startIcon={<BiNotification />}
        value="/dashboard/profile/collections"
      />
      <Tab
        label="On sale"
        // startIcon={<BiNotification />}
        value="/dashboard/profile/onsale"
      />
      <Tab
        label="Favorited"
        // startIcon={<BiNotification />}
        value="/dashboard/profile/favorites"
      />
      {/* <Tab
        label="Activity"
        // startIcon={<BiNotification />}
        value="/dashboard/profile/activity"
      /> */}
    </Tabs>
  );
}
