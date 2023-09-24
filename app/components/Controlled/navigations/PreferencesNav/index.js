import { useLocation, useNavigate } from "@remix-run/react";
import { Button, Tab, Tabs } from "~/KIT";
import { CustomLink } from "~/components";
import { BiColorFill, BiNotification, BiSlider } from "react-icons/bi";
export default function Index() {
  const { pathname } = useLocation();
  return (
    <div className="flex alignCenter w100 b bb1 p1 mb2 overflowXAuto scrollBarVisibleNone">
      <CustomLink to="/dashboard/settings/preferences/general">
        <Button
          startIcon={<BiSlider />}
          className={`w100 ${
            pathname.split("/")[4] === "general" ? "mainColor" : ""
          }`}
        >
          General
        </Button>
      </CustomLink>
      <CustomLink to="/dashboard/settings/preferences/appearance">
        <Button
          startIcon={<BiColorFill />}
          className={`w100 ${
            pathname.split("/")[4] === "appearance" ? "mainColor" : ""
          }`}
        >
          Appearance
        </Button>
      </CustomLink>
      <CustomLink to="/dashboard/settings/preferences/sounds">
        <Button
          startIcon={<BiNotification />}
          className={`w100 ${
            pathname.split("/")[4] === "sounds" ? "mainColor" : ""
          }`}

          // className={pathname.split("/")[3] === "sounds" ? "contained" : ""}
        >
          Sounds
        </Button>
      </CustomLink>
    </div>
  );

  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // return (
  //   <Tabs
  //   className="mb3 small"
  //   activeClassName="justColor"
  //     value={pathname}
  //     onChange={(e) => {
  //       navigate(e);
  //     }}
  //   >
  //     {/* {settingsNav.map((item, index) => {
  //       return (
  //         <Tab value={item.path} label={item.title} startIcon={item.icon} />
  //       );
  //     })} */}
  //     <Tab
  //       label="Appearance"
  //       startIcon={<BiColorFill />}
  //       value="/dashboard/settings/preferences/appearance"
  //     />
  //     <Tab
  //       label="Sounds"
  //       startIcon={<BiNotification />}
  //       value="/dashboard/settings/preferences/sounds"
  //     />
  //   </Tabs>
  // );
}
