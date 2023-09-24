import React from "react";
import { BsSegmentedNav, BsListTask } from "react-icons/bs";
import { CgPerformance } from "react-icons/cg";
import { useAppContext } from "~/context/appContext";
import { SettingOption } from "~/components";
import { Button, Switch, Select } from "~/KIT";
import { BiCollection, BiReset } from "react-icons/bi";
import { MdAltRoute, MdDone } from "react-icons/md";
import { motion } from "framer-motion";
import bottomPhoneNavImage from "~/assets/fakes/settings/nav_bottom_2.png";
import drawerPhoneNavImage from "~/assets/fakes/settings/nav_android_2.png";
import systemPhoneNavImage from "~/assets/fakes/settings/nav_system.png";

export default function Index() {
  const appCtx = useAppContext();
  const { general, setKey } = appCtx.preferences();
  const {
    navMode,
    navModePhone,
    highPerformance,
    hideMyCollection,
    dashboardInitialRoute, // '/dashboard/discover',
  } = general;

  const handleResetFactory = () => {
    appCtx.ModalsManager.show("confirm", {
      title: "Reset to default",
      message: "Are you sure you want to reset all settings to default?",
      variant: "warning",
      onConfirm: () => {
        // clear all local storage
        localStorage.clear();
        // reload
        window.location.reload();
      },
    });
  };

  const updateAppearanceKey = (_key, _value) => {
    setKey("general", { ...general, [_key]: _value });
  };

  const showNeedReloadToast = () => {
    appCtx.ToastManager.Toast({
      title: "Need to reload",
      message: "Please reload the page to apply the changes",
      type: "warning",
      autoClose: false,
      content: ({ closeToast }) => (
        <Button
          className="small outlined mt4 alignSelfStart"
          onClick={() => {
            closeToast();
            window.location.reload();
          }}
        >
          Reload now
        </Button>
      ),
    });
  };
  return (
    <div className="flex column p2 w100">
      <label
        className="textSecondary noWrapText ml3 mb1"
        style={{ width: "fit-content" }}
      >
        General Options
      </label>
      <SettingOption
        icon={BsListTask}
        title="Navigation mode (Desktop)"
        text="Navigation is an area of the dashboard reserved for buttons and links affording movement in the dashboard."
        className="pb4 mb1"
        option={
          <div className="flex alignCenter gap-1">
            <Button
              onClick={() => updateAppearanceKey("navMode", "left")}
              className={`small ${
                navMode === "left" ? "contained" : "outlined"
              }`}
            >
              Left
            </Button>

            <Button
              onClick={() => updateAppearanceKey("navMode", "top")}
              className={`small ${
                navMode === "top" ? "contained" : "outlined"
              }`}
            >
              Top
            </Button>

            {/* <Button
              //   onClick={() => {
              //     updateAppearanceKey("prefersTheme", "light");
              //     updateUrlBarColor(
              //       `hsl(${appearance.mainColor}deg, ${
              //         appearance.colorIntensity
              //       }%, ${
              //         brightnessLevels["light"][appearance.colorBrightness]
              //       }%)`
              //     );
              //   }}
              className={`small ${
                navMode === "system" ? "contained" : "outlined"
              }`}
            >
              Default
            </Button> */}
          </div>
        }
      />
      <SettingOption
        icon={BsSegmentedNav}
        title="Navigation mode (Phone)"
        text="Mobile navigation design is all about getting users where they want to go, with the least amount of friction possible."
        className="mt1 mb1"
        option={
          <div className="flex alignCenter gap-1">
            {/* <Button
              onClick={() => updateAppearanceKey("navModePhone", "drawer")}
              className={`small ${
                navModePhone === "drawer" ? "contained" : "outlined"
              }`}
            >
              Drawerss
            </Button> */}

            {/* <Button
              onClick={() => updateAppearanceKey("navModePhone", "bottom")}
              className={`small ${
                navModePhone === "bottom" ? "contained" : "outlined"
              }`}
            >
              Bottom
            </Button> */}

            <OptionTemplate
              title="Drawer"
              backgroundPositionY="10%"
              
              src={drawerPhoneNavImage}
              selected={navModePhone === "drawer"}
              onClick={() => updateAppearanceKey("navModePhone", "drawer")}
            />
            <OptionTemplate
              backgroundPositionY="100%"
              title="Bottom"
              src={bottomPhoneNavImage}
              selected={navModePhone === "bottom"}
              onClick={() => updateAppearanceKey("navModePhone", "bottom")}
            />
            <OptionTemplate
              backgroundPositionY="0%"
              title="System"
              src={systemPhoneNavImage}
              selected={navModePhone === "system"}
              onClick={() => updateAppearanceKey("navModePhone", "system")}
            />

            {/* <Button
              onClick={() => updateAppearanceKey("navModePhone", "system")}
              className={`small ${
                navModePhone === "system" ? "contained" : "outlined"
              }`}
            >
              System
            </Button> */}
          </div>
        }
      />
      <SettingOption
        icon={CgPerformance}
        title="High performance mode"
        text="If deactivated, all animations will be disabled and the dashboard will be rendered in a more efficient way."
        className="mt1 mb1"
        option={
          <div className="flex alignCenter gap-1">
            <Button
              onClick={() => {
                updateAppearanceKey("highPerformance", "off");
                showNeedReloadToast();
              }}
              className={`small ${
                highPerformance === "off" ? "contained" : "outlined"
              }`}
            >
              OFF
            </Button>

            <Button
              onClick={() => {
                updateAppearanceKey("highPerformance", "on");
                showNeedReloadToast();
              }}
              className={`small ${
                highPerformance === "on" ? "contained" : "outlined"
              }`}
            >
              ON
            </Button>

            <Button
              onClick={() => {
                updateAppearanceKey("highPerformance", "system");
                showNeedReloadToast();
              }}
              className={`small ${
                highPerformance === "system" ? "contained" : "outlined"
              }`}
            >
              System
            </Button>
          </div>
        }
      />
      {/* <SettingOption
        icon={BiCollection}
        title="Hide collection"
        text="Hide your collection from the explore page. (You can still access it from your dashboard)"
        className="mt1 mb1"
        option={<Switch id="hideMyCollection" checked={hideMyCollection} />}
      /> */}
      <SettingOption
        icon={MdAltRoute}
        title="Dashboard initial route"
        text="Choose the initial route of your dashboard. when you login to the dashboard you will be redirected to this route."
        className="mt1 mb1"
        option={
          <Select
            menuPlacement="top"
            parentStyle={{ minWidth: "10em" }}
            value={dashboardInitialRoute}
            options={[
              { value: "/dashboard/discover", label: "Discover" },
              { value: "/dashboard/profile/overview", label: "Profile" },
              {
                value: "/dashboard/create",
                label: "Create item",
              },
              { value: "/dashboard/activities", label: "Activites" },
            ]}
            onChange={(e) => {
              updateAppearanceKey("dashboardInitialRoute", e.value);
            }}
          />
        }
      />

      <label
        className="textSecondary noWrapText ml3 mb1 mt6"
        style={{ width: "fit-content" }}
      >
        Factory
      </label>
      <SettingOption
        icon={BiReset}
        title="Reset factory settings"
        text="Reset all settings to factory settings. all your changes like theme, language, and preferences will be reset."
        className="mt1 mb1"
        background="warningFilledBg"
        option={
          <Button onClick={handleResetFactory} className={`contained warning`}>
            Reset all
          </Button>
        }
      />
    </div>
  );
}

const OptionTemplate = ({
  title,
  src,
  onClick,
  selected,
  backgroundPositionY,
}) => {
  return (
    <div
      className={`flex column alignCenter cursorPoint relative templateWrapper ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      <motion.div
        // transition={{
        //   type: "spring",
        //   stiffness: 260,
        //   damping: 20,

        // }}
        // whileHover={{
        //   scale: 1.05,
        // }}
        // whileTap={{
        //   scale: 0.95,
        // }}

        animate={{
          scale: selected ? 1 : 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={`b b1 radius-1 templateImg bodyBg`}
        style={{
          backgroundImage: `url('${src}')`,
          height: "6em",
          width: "6em",
          backgroundPositionY,
          backgroundRepeat: "no-repeat",
        }}
      />
      {selected && (
        <div className="templateIcon flex alignCenter justifyCenter radius-50">
          <MdDone size="0.9em" />
        </div>
      )}
      <label className={`mt2 ${selected ? "text" : "textSecondary"} fs-150`}>
        {title}
      </label>
    </div>
  );
};
