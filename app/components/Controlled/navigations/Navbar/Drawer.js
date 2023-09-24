import React, { useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Avatar, Button, Switch } from "~/KIT";
import { Logo } from "~/components";
import {
  BiCartAlt,
  BiCog,
  BiCookie,
  BiGlobeAlt,
  BiHelpCircle,
  BiHome,
  BiPurchaseTagAlt,
  BiRocket,
  BiSearch,
  BiSitemap,
  BiUser,
  BiWorld,
} from "react-icons/bi";
import { useAppContext } from "~/context/appContext";
import { getOS } from "~/store/utils";
import { profileNavs } from "~/store/defaults";
import { nanoid } from "nanoid";
export default function DrawerContent({ closeModal, goToPage, modalId }) {
  //   const drawerRef = useRef(null);
  //   const dragHandlerRef = useRef(null);

  const appCtx = useAppContext();
  const { general, appearance } = appCtx.preferences();
  const { theme } = appearance;

  const onNavigate = (_path) => {
    // console.log("huuuu");
    goToPage(_path);
    closeModal();
  };

  //   useEffect(() => {
  //     if (drawerRef.current) {
  //       gsap.registerPlugin(Draggable);

  //       Draggable.create(drawerRef.current, {
  //         type: "y",

  //         onPress: function () {
  //           console.log("clicked");
  //         },
  //         trigger: dragHandlerRef.current,
  //       });
  //     }
  //   }, []);

  const passDeviceCheck = () => {
    const os = getOS();
    return os === "Windows" || os === "Android" || os === "Linux";
  };

  console.log(
    general.navModePhone,
    general.navModePhone === "system" && passDeviceCheck()
  );
  return (
    <div className="flex column w100">
      <div
        className={`flex alignCenter justifyBetween p3 relative dialog-drag-to-close-${modalId}`}
      >
        {/* <div className="absolute dragHandler inset-0" ref={dragHandlerRef} /> */}
        <div className="flex alignCenter">
          <Logo />
        </div>
        <Button className="icon" onClick={closeModal}>
          <MdKeyboardArrowDown size="1.8em" />
        </Button>
      </div>

      <div className="buttonAlignsLeft flex column">
        {
          // must be login
          (general.navModePhone === "drawer" ||
            (general.navModePhone === "system" && passDeviceCheck())) && (
            <>
              <label className="textSecondary p5 pb2">Dashboard</label>
              {profileNavs.map((nav, index) => {
                return (
                  <Button
                    key={nanoid()}
                    startIcon={nav.icon}
                    onClick={() => onNavigate(`/dashboard/${nav.to}`)}
                  >
                    {nav.title}
                  </Button>
                );
              })}
            </>
          )
        }

        <label className="textSecondary p5 pb2">Main Pages</label>
        <Button startIcon={<BiHome />} onClick={() => onNavigate("/")}>
          Home
        </Button>
        <Button
          startIcon={<BiGlobeAlt />}
          onClick={() => onNavigate("/explore")}
        >
          Explore
        </Button>
        <label className="textSecondary p5 pb2">Resources</label>
        <Button startIcon={<BiWorld />} onClick={() => onNavigate("/blogs")}>
          Blogs
        </Button>
        <Button
          startIcon={<BiSitemap />}
          onClick={() => onNavigate("/ranking")}
        >
          Ranking
        </Button>
        <Button
          startIcon={<BiHelpCircle />}
          onClick={() => onNavigate("/helpCenter")}
        >
          Help Center
        </Button>

        {/* <label className="textSecondary p5 pb2">Help Center</label>
        <Button
          startIcon={<BiRocket />}
          onClick={() => onNavigate("/helpCenter/gettingStarted")}
        >
          Getting Started
        </Button>
        <Button
          startIcon={<BiCookie />}
          onClick={() => onNavigate("/helpCenter/creating")}
        >
          Creating
        </Button>
        <Button
          startIcon={<BiCartAlt />}
          onClick={() => onNavigate("/helpCenter/buying")}
        >
          Buying
        </Button>
        <Button
          startIcon={<BiPurchaseTagAlt />}
          onClick={() => onNavigate("/helpCenter/selling")}
        >
          Selling
        </Button> */}
      </div>

      <div className="mt8 p2 flex column w100">
        <Button
          className="flex alignCenter justifyBetween p0 w100"
          onClick={() => onNavigate(general.dashboardInitialRoute)}
        >
          <div className="flex alignCenter">
            <Avatar
              className="mr2 mainFilledBg rounded"
              style={{ height: "2.25em", width: "2.25em" }}
            >
              <BiUser />
            </Avatar>
            <div className="flex column alignStart">
              <h6 className="fs-300 fontBold">John Asgar zade</h6>
              <p className="textSecondary">4123...75asd</p>
            </div>
          </div>
        </Button>
        <div className="grid col2 gap-1 mt2">
          <Button
            className="outlined "
            startIcon={<BiCog />}
            onClick={() =>
              onNavigate("/dashboard/settings/preferences/appearance")
            }
          >
            Setting
          </Button>
          <div className="flex alignCenter justifyStart pl5">
            <label className={theme === "dark" ? "textSecondary" : "fontBold"}>
              Light
            </label>
            <Switch
              checked={theme === "dark"}
              onChange={() => {
                appCtx.updateTheme(theme === "dark" ? "light" : "dark");
              }}
              className="ml3 mr3"
              // label="Dark Mode"
              id="toggleTheme"
            />
            <label className={theme === "dark" ? "fontBold" : "textSecondary"}>
              Dark
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
