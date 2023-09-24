import { Outlet } from "@remix-run/react";
import React from "react";
import { ProfileNav } from "~/components";
import DashboardProfile from "~/containers/dashboard/profile";

export default function Home() {
  return (
    <div className="flex column p2-sm">
      <DashboardProfile />
      <div className="flex justifyCenter mt8">
        <ProfileNav />
      </div>
      <Outlet />
    </div>
  );
}
