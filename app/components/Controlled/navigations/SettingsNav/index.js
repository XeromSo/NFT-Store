import { useLocation, useNavigate,  } from "@remix-run/react";
import { BiNotification, BiUser } from "react-icons/bi";
import { CustomLink } from "~/components";
import { Button, Tab, Tabs } from "~/KIT";

const settingsNav = [
  {
    title: "Profile",
    icon: <BiUser />,
    path: "/dashboard/settings/profile",
  },
  {
    title: "Preferences",
    icon: <BiNotification />,
    path: "/dashboard/settings/preferences/appearance",
  },
];
export default function Index() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Tabs
    // className="mb3"
      value={pathname}
      onChange={(e) => {
        navigate(e);
      }}
    >
      {/* {settingsNav.map((item, index) => {
        return (
          <Tab value={item.path} label={item.title} startIcon={item.icon} />
        );
      })} */}
      <Tab
        label="Profile"
        startIcon={<BiUser />}
        value="/dashboard/settings/profile"
      />
      <Tab
        label="Preferences"
        startIcon={<BiNotification />}
        value="/dashboard/settings/preferences/appearance"
      />
      <Tab />
    </Tabs>
  );
}

{
  /* <div className="surface-1 shadow-3 radius-1 p1 flex alignCenter">
      <CustomLink to="/dashboard/settings/profile">
        <Button
          className={pathname.split("/")[3] === "profile" ? "contained" : ""}
        >
          Profile
        </Button>
      </CustomLink>
      <CustomLink to="/dashboard/settings/preferences/appearance">
        <Button
          className={
            pathname.split("/")[3] === "preferences" ? "contained" : ""
          }
        >
          Preferences
        </Button>
      </CustomLink>
    </div> */
}
