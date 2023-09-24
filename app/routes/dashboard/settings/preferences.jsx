import { Outlet } from "@remix-run/react";
import { PreferencesNav } from "~/components";

export function meta() {
  return {
    title: "User settings preferences",
    description: "About preferences desc",
    keywords: "remix, javascript, react",
  };
}
export default function Preferences() {
  return (
    <>
      <p className="textSecondary mb4 pl4">
        Preferences are options or a setting that allow the user to configure
        the product works.
      </p>
      <div className="flex column alignStart mt1 w100 surface-1 shadow-3 radius-2 p1">
        <PreferencesNav />
        {/* <div className="p4 w100"> */}
        <Outlet />
        {/* </div> */}
      </div>
    </>
  );
}
