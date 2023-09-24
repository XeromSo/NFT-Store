import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import {
  BiCog,
  BiCollection,
  BiHome,
  BiSearchAlt,
  BiUser,
} from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { CustomLink, DashboardNav } from "~/components";
import { useAppContext } from "~/context/appContext";
import { Button } from "~/KIT";
import { profileNavs } from "~/store/defaults";
import { getOS } from "~/store/utils";

export function meta() {
  return {
    title: "Username",
    description: "Username detail",
    keywords: "remix, javascript, react",
  };
}
export default function Index() {
  const appCtx = useAppContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { navMode, navModePhone, dashboardInitialRoute } =
    appCtx.preferences().general;

  // console.log(pathname);
  useEffect(() => {
    if (pathname === "/dashboard") navigate(dashboardInitialRoute);
  }, []);
  return (
    <>
      <DashboardPhoneNav />
      {navMode === "top" && <DashboardNav />}
      <div className="userDashboardWrapper container md">
        <div className="grid col12">
          {navMode === "left" && (
            <div className="span-3 span-4-md">
              <DashboardNav />
            </div>
          )}

          <div
            className={`${
              navMode === "left" ? "span-9 span-8-md span-12-sm" : "span-12"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

function DashboardPhoneNav() {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[2];
  const { navModePhone } = useAppContext().preferences().general;
  return (
    <div
      className={`dashboardPhoneNav ${navModePhone} ${getOS()} grid col5 dNone dGridSm`}
    >
      {profileNavs.map((nav, index) => {
        return (
          <CustomLink key={nanoid()} to={nav.to} className="w100">
            <Button
              className={`${currentPath === nav.path ? "actived" : ""} w100`}
            >
              {currentPath === nav.path ? nav.active : nav.icon}
            </Button>
          </CustomLink>
        );
      })}

      {/* <CustomLink to={"/dashboard/profile/overview"} className="w100">
        <Button
          className={`${currentPath === "profile" ? "mainColor" : ""} w100`}
        >
          <BiHome />
        </Button>
      </CustomLink>
      <CustomLink to={"/dashboard/discover"} className="w100">
        <Button
          className={`${currentPath === "discover" ? "mainColor" : ""} w100`}
        >
          <BiSearchAlt />
        </Button>
      </CustomLink>
      <CustomLink to={"/dashboard/create"} className="w100">
        <Button
          className={`${currentPath === "create" ? "mainColor" : ""} w100`}
        >
          <MdAdd />
        </Button>
      </CustomLink>
      <CustomLink to={"/dashboard/storages"} className="w100">
        <Button
          className={`${currentPath === "storages" ? "mainColor" : ""} w100`}
        >
          <BiCollection />
        </Button>
      </CustomLink>
      <CustomLink to={"/dashboard/settings"} className="w100">
        <Button
          className={`${currentPath === "settings" ? "mainColor" : ""} w100`}
        >
          <BiCog />
        </Button>
      </CustomLink> */}
    </div>
  );
}
