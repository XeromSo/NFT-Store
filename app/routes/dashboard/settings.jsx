import { Link, Outlet, useLocation } from "@remix-run/react";
import { nanoid } from "nanoid";
import { CustomLink, LinksDropDown, SettingsNav } from "~/components";
import { Button } from "~/KIT";
import { useAppContext } from "~/context/appContext";
import { settingNavs } from "~/store/defaults";

export function meta() {
  return {
    title: "UserDashboard Settings",
    description: "Settings desc",
    keywords: "remix, javascript, react",
  };
}

export default function Settings() {
  const { pathname } = useLocation();
  const appCtx = useAppContext();
  const { navMode } = appCtx.preferences().general;
  return (
    <div
      className={`flex column pt4 pb4 ${
        navMode === "top" ? "container xs" : ""
      }`}
    >
      {/* <div className="flex column p1-sm"> */}
      {/* <h1 className="fs-500 mb1 pl2-sm">Settings</h1> */}
      {pathname !== "/dashboard/settings" && (
        <div className="flex alignCenter p1 pl4 mb1">
          <CustomLink to="/dashboard/settings">
            <h4 className="fs-400">Settings</h4>
          </CustomLink>
          <h5 className="mr2 ml2">-</h5>
          <LinksDropDown
            label={pathname.split("/")[3]}
            content={<SettingLinkList activeLink={pathname.split("/")[3]} />}
          />
        </div>
      )}

      {/* <SettingsNav /> */}
      {/* </div> */}
      <Outlet />
    </div>
  );
}

function SettingLinkList({ activeLink = "" }) {
  return (
    <div className="flex column buttonAlignsLeft">
      {settingNavs.map((nav, index) => {
        return (
          <CustomLink key={nanoid()} to={nav.to} className="w100">
            <Button
              className={`w100 ${activeLink === nav.path ? "mainColor" : ""}`}
            >
              {nav.title}
            </Button>
          </CustomLink>
        );
      })}
      {/* <CustomLink className="w100" to="/dashboard/settings/account">
        <Button
          className={`w100 ${activeLink === "account" ? "mainColor" : ""}`}
        >
          Account
        </Button>
      </CustomLink>
      <CustomLink
        className="w100"
        to="/dashboard/settings/preferences/appearance"
      >
        <Button
          className={`w100 ${activeLink === "preferences" ? "mainColor" : ""}`}
        >
          Preferences
        </Button>
      </CustomLink> */}
    </div>
  );
}
