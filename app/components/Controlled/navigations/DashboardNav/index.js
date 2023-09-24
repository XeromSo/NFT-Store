import { useLocation } from "@remix-run/react";
import React, { useEffect } from "react";
import { CustomLink } from "~/components";
import { Button } from "~/KIT";
import {
  BiChevronDown,
  BiCog,
  BiCollection,
  BiDetail,
  BiHeart,
  BiHive,
  BiHome,
  BiNotification,
  BiSearch,
  BiSearchAlt,
  BiUser,
} from "react-icons/bi";
import { profileNavs, settingNavs } from "~/store/defaults";
import { useAppContext } from "~/context/appContext";
import useScrollPosition from "~/hooks/useScrollPosition";
import { nanoid } from "nanoid";
import Tippy from "@tippyjs/react";
import { MdOutlineSettings, MdSettings } from "react-icons/md";

export default function Index() {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[2];
  const { navMode } = useAppContext().preferences().general;
  const scrollPosition = useScrollPosition();

  // console.log(getOS())

  return (
    <div
      className={`dashboard-nav dNoneSm ${navMode} ${
        navMode === "top" ? `${scrollPosition > 32 ? "scrolled" : ""}` : ""
      }`}
    >
      <div
        className={`${
          navMode === "top"
            ? "flex alignCenter justifyCenter container md"
            : "flex column"
        }`}
      >
        {profileNavs.map((item) => {
          if (item.path === "settings" && navMode === "top") return null;

          return (
            <CustomLink key={nanoid()} to={`/dashboard/${item.to}`}>
              <Button
                startIcon={currentPath === item.path ? item.active : item.icon}
                className={
                  currentPath === item.path ? "mainColor" : "textSecondary"
                }
              >
                {item.title}
                {/* <div className="alignSelfEnd justifySelfEnd">
            End icc
              </div> */}
              </Button>
            </CustomLink>
          );
        })}

        {navMode === "top" && (
          <Tippy
            interactive
            arrow={false}
            placement="bottom-start"
            content={<SettingNavs className="buttonAlignsLeft" />}
          >
            <span>
              <CustomLink to="/dashboard/settings">
                <Button
                  className={
                    currentPath === "settings" ? "mainColor" : "textSecondary"
                  }
                  startIcon={
                    currentPath === "settings" ? (
                      <MdSettings />
                    ) : (
                      <MdOutlineSettings />
                    )
                  }
                  endIcon={<BiChevronDown />}
                >
                  Setting
                </Button>
              </CustomLink>
            </span>
          </Tippy>
        )}
        {currentPath === "settings" && navMode === "left" && (
          <SettingNavs className="pl8" />
        )}
      </div>
    </div>
  );
}

const SettingNavs = ({ className = "" }) => {
  const currentPath = useLocation().pathname.split("/")[3];

  return (
    <div className={`flex column ${className}`}>
      {/* <CustomLink to={`/dashboard/settings/profile`} className="w100">
        <Button
          startIcon={<BiUser />}
          className={`w100 ${
            currentPath === "profile" ? "mainColor" : ""
          }`}
        >
          Profile
        </Button>
      </CustomLink> */}
      {settingNavs.map((item) => {
        return (
          <CustomLink
            key={nanoid()}
            to={`/dashboard/settings/${item.to}`}
            className="w100"
          >
            <Button
              // startIcon={currentPath === item.path ? item.active : item.icon}
              className={`w100 ${currentPath === item.path ? "mainColor" : ""}`}
            >
              {item.title}
            </Button>
          </CustomLink>
        );
      })}
      {/* <CustomLink to={`/dashboard/settings/account`} className="w100">
        <Button
          startIcon={<BiUser />}
          className={`w100 ${currentPath === "account" ? "mainColor" : ""}`}
        >
          Account
        </Button>
      </CustomLink>
      <CustomLink
        to={`/dashboard/settings/preferences/appearance`}
        className="w100"
      >
        <Button
          startIcon={<BiNotification />}
          className={`w100 ${currentPath === "preferences" ? "mainColor" : ""}`}
        >
          Preferences
        </Button>
      </CustomLink>
      <CustomLink to={`/dashboard/settings/notifications`} className="w100">
        <Button
          startIcon={<BiNotification />}
          className={`w100 ${
            currentPath === "notifications" ? "mainColor" : ""
          }`}
        >
          Notifications
        </Button>
      </CustomLink> */}
    </div>
  );
};

{
  /* <CustomLink to="/dashboard/profile">
        <Button
          className={pathname.split("/")[2] === "profile" ? "contained" : ""}
        >
          Profile
        </Button>
      </CustomLink>
      <CustomLink to="/dashboard/favorites">
        <Button
          className={pathname.split("/")[2] === "favorites" ? "contained" : ""}
        >
          Favorites
        </Button>
      </CustomLink>
      <CustomLink to="/dashboard/collections">
        <Button
          className={pathname.split("/")[2] === "collections" ? "contained" : ""}
        >
          Collections
        </Button>
      </CustomLink>
      <CustomLink to="/dashboard/settings/profile">
        <Button
          className={pathname.split("/")[2] === "settings" ? "contained" : ""}
        >
          Settings
        </Button>
      </CustomLink> */
}
