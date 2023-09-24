import React from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { BiAdjust } from "react-icons/bi";
import { MdDone, MdOutlineWbSunny } from "react-icons/md";
import { TiBrush } from "react-icons/ti";
import { SettingOption } from "~/components";
import { Button, Slider } from "~/KIT";
import { useAppContext } from "~/context/appContext";
import {
  detectColorScheme,
  changeCssRootValue,
  updateUrlBarColor,
} from "~/store/utils";
// import { HslColorPicker } from "react-colorful";
import useDebounce from "~/hooks/useDebounce";
import { brightnessLevels } from "~/store/defaults";
import lightImage from "~/assets/fakes/liiight.png";
import darkImage from "~/assets/fakes/daaaark.png";
import systemImage from "~/assets/fakes/system.jpg";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";

const Color = ({ selected, value, onClick }) => {
  return (
    <div
      className="cursorPoint flex alignCenter justifyCenter"
      onClick={onClick}
      style={{
        backgroundColor: `hsl(${value}deg, 100%, 60%)`,
        borderRadius: "20em",
        height: "1.8em",
        width: "1.8em",
      }}
    >
      {selected ? <MdDone style={{ color: "#000" }} /> : ""}
    </div>
  );
};
const ThemeTemplate = ({ title, src, onClick, selected }) => {
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
        className={`b b1 radius-1 templateImg`}
        style={{
          backgroundImage: `url('${src}')`,
          height: '4em',
          width: '7em',
          // backgroundPositionY: '-40%'
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
export default function Themes() {
  const appCtx = useAppContext();
  const { appearance, setKey } = appCtx.preferences();

  const updateAppearanceKey = (_key, _value) => {
    if (_key === "prefersTheme") {
      if (_value === "system") {
        detectColorScheme().then((_theme) => {
          appCtx.updateTheme(_theme);
          updateUrlBarColor(
            `hsl(${appearance.mainColor}deg, ${appearance.colorIntensity}%, ${
              brightnessLevels[_theme][appearance.colorBrightness]
            }%)`
          );
        });
      } else {
        setTimeout(() => {
          appCtx.updateTheme(_value);
        }, 50);
      }
    }

    setKey("appearance", { ...appearance, [_key]: _value });
  };
  const debouncedAppearanceOnChange = useDebounce(updateAppearanceKey, 50);

  // brightnessLevels[appearance.theme][e]
  return (
    <div className="flex column">
      <SettingOption
        title="Theme"
        className="mb1"
        icon={TiBrush}
        text={
          <div className="flex column">
            <span>Change your theme or set on system option</span>
            <span> to automatically change with os.</span>
          </div>
        }
        option={
          <div className="flex alignCenter gap-2">
            <ThemeTemplate
              title="System"
              src={systemImage}
              selected={appearance.prefersTheme === "system"}
              onClick={() => {
                updateAppearanceKey("prefersTheme", "system");
              }}
            />
            <ThemeTemplate
              title="Light"
              src={lightImage}
              selected={appearance.prefersTheme === "light"}
              onClick={() => {
                updateAppearanceKey("prefersTheme", "light");
                updateUrlBarColor(
                  `hsl(${appearance.mainColor}deg, ${
                    appearance.colorIntensity
                  }%, ${
                    brightnessLevels["light"][appearance.colorBrightness]
                  }%)`
                );
              }}
            />
            <ThemeTemplate
              title="Dark"
              src={darkImage}
              selected={appearance.prefersTheme === "dark"}
              onClick={() => {
                updateAppearanceKey("prefersTheme", "dark");
                updateUrlBarColor(
                  `hsl(${appearance.mainColor}deg, ${
                    appearance.colorIntensity
                  }%, ${brightnessLevels["dark"][appearance.colorBrightness]}%)`
                );
              }}
            />

            {/* <div className="flex column alignCenter">
              <div
                className="b b1 radius-1"
                style={{
                  height: "5em",
                  width: "8em",
                  backgroundImage: `url('${lightImage}')`,
                  backgroundSize: "cover",
                }}
              />
              <label className="mt2 textSecondary fs-150">Light</label>
            </div>
            <div className="flex column alignCenter">
              <div
                className="b b1 radius-1"
                style={{
                  height: "5em",
                  width: "8em",
                  backgroundImage: `url('${darkImage}')`,
                  backgroundSize: "cover",
                  // backgroundPositionY: '-40%'
                }}
              />
              <label className="mt2 textSecondary fs-150">Dark</label>
            </div> */}

            {/* <Button
              onClick={() => {
                updateAppearanceKey("prefersTheme", "dark");
                updateUrlBarColor(
                  `hsl(${appearance.mainColor}deg, ${
                    appearance.colorIntensity
                  }%, ${brightnessLevels["dark"][appearance.colorBrightness]}%)`
                );
              }}
              className={`small ${
                appearance.prefersTheme === "dark" ? "contained" : "outlined"
              }`}
            >
              Dark
            </Button>
            <Button
              onClick={() => {
                updateAppearanceKey("prefersTheme", "light");
                updateUrlBarColor(
                  `hsl(${appearance.mainColor}deg, ${
                    appearance.colorIntensity
                  }%, ${
                    brightnessLevels["light"][appearance.colorBrightness]
                  }%)`
                );
              }}
              className={`small ${
                appearance.prefersTheme === "light" ? "contained" : "outlined"
              }`}
            >
              Light
            </Button>
            <Button
              onClick={() => updateAppearanceKey("prefersTheme", "system")}
              className={`small ${
                appearance.prefersTheme === "system" ? "contained" : "outlined"
              }`}
            >
              System
            </Button> */}
          </div>
        }
      />

      <SettingOption
        className="mt1 mb1"
        title="Color intensity"
        text={
          <div className="flex column">
            <span>A highly intense color is bright and a low-intensity</span>
            <span> color is more neutral or muted.</span>
          </div>
        }
        icon={BiAdjust}
        option={
          <Slider
            marks={{
              0: 0,
              25: 25,
              50: 50,
              75: 75,
              100: 100,
            }}
            value={appearance.colorIntensity}
            style={{ minWidth: "14em" }}
            className="ml2 mb4"
            min={0}
            step={5}
            max={100}
            onChange={(e) => {
              changeCssRootValue("--main-bg-color-s", `${e}%`);
              updateAppearanceKey("colorIntensity", e);
              updateUrlBarColor(
                `hsl(${appearance.mainColor}deg, ${e}%, ${
                  brightnessLevels[appearance.theme][appearance.colorBrightness]
                }%)`
              );
            }}
          />
        }
      />
      {/* <HslColorPicker value={{ h: 60, s: 0, l: 100 }} /> */}
      {appearance.colorIntensity > 0 ? (
        <SettingOption
          className="mt1 mb1"
          title="Main color"
          icon={AiOutlineBgColors}
          text="Change main color"
          option={
            <div
              className="flex wrap alignCenter justifyEnd justifyStart-sm gap-1"
              style={{ maxWidth: "100%", width: "36em" }}
            >
              {[
                10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
                150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270,
                280, 290, 300, 310, 320, 330, 340,
              ].map((_val) => {
                return (
                  <Color
                    key={_val}
                    selected={appearance.mainColor === _val}
                    onClick={() => {
                      updateAppearanceKey("mainColor", _val);
                      changeCssRootValue("--main-bg-color-h", `${_val}deg`);
                      updateUrlBarColor(
                        `hsl(${_val}deg, ${appearance.colorIntensity}%, ${
                          brightnessLevels[appearance.theme][
                            appearance.colorBrightness
                          ]
                        }%)`
                      );
                    }}
                    value={_val}
                  />
                );
              })}
            </div>
          }
          // option={
          //   <HslColorPicker
          //     value={{ h: 190, s: 50, l: 64 }}
          //     onChange={(e) => {
          //       updateAppearanceKey("mainColor", e.h);
          //       changeCssRootValue("--main-bg-color-h", e.h);

          //       // --main-bg-color-h
          //     }}
          //     className="react-colorful-bottom-bar"
          //   />
          // }
          // option={
          //   <div className="flex alignCenter gap-1">
          //     <Color value={0} />
          //     <Color value={30} />
          //     <Color value={60} />
          //     <Color value={90} />
          //     <Color value={190} />
          //     <Color value={240} />
          //     <Color value={300} />
          //     <Color value={360} />
          //   </div>
          // }
        />
      ) : (
        ""
      )}

      <SettingOption
        className="mt1 mb1"
        title="Brightness level"
        icon={MdOutlineWbSunny}
        text={"Adjust the brightness of the built-in display."}
        option={
          <Slider
            min={1}
            step={1}
            max={4}
            marks={{
              1: 1,
              2: 2,
              3: 3,
              4: 4,
            }}
            value={appearance.colorBrightness}
            style={{ minWidth: "14em" }}
            className="ml2 mb4"
            onChange={(e) => {
              console.log(appearance.colorBrightness, e);

              updateAppearanceKey("colorBrightness", e);
              changeCssRootValue(
                "--main-bg-color-l",
                `${brightnessLevels[appearance.theme][e]}%`
              );
              updateUrlBarColor(
                `hsl(${appearance.mainColor}deg, ${
                  appearance.colorIntensity
                }%, ${brightnessLevels[appearance.theme][e]}%)`
              );
              // setTimeout(()=>{
              //   if (e >= 45) {
              //     if (appearance.theme === "dark") appCtx.updateTheme('light');
              //   } else {
              //     if (appearance.theme === "light") appCtx.updateTheme('dark');
              //   }
              // }, 50)
            }}
          />
        }
      />

      {/* <TiBrush size={"1.4em"} className="mr2" />
      <div className="flex column">
        <h6 className="paragraph">Theme</h6>
        <div className="flex alignCenter mb4"></div>
      </div> */}
    </div>
  );
}

{
  /* <Slider
            marks={{
              0: 0,
              25: 25,
              50: 50,
              75: 75,
              100: 100,
            }}
            value={appearance.colorBrightness}
            style={{ minWidth: "14em" }}
            className="ml2"
            min={0}
            step={5}
            max={100}
            onUpdateValue={(e) => {
              updateAppearanceKey("colorBrightness", e);
              changeCssRootValue("--main-bg-color-l", `${e}%`);
              setTimeout(()=>{
                if (e >= 45) {
                  if (appearance.theme === "dark") appCtx.updateTheme('light');
                } else {
                  if (appearance.theme === "light") appCtx.updateTheme('dark');
                }
              }, 50)
            }}
          /> */
}
