import Tippy from "@tippyjs/react";
import { CustomInputNumber, SettingOption } from "~/components";
import { useAppContext } from "~/context/appContext";
import useToggle from "~/hooks/useToggle";
import { Button, Slider } from "~/KIT";
import React, { useEffect, useState } from "react";
import { BiFont, BiFontFamily, BiFontSize } from "react-icons/bi";
import { CgFontSpacing } from "react-icons/cg";
import { MdOutlineFormatBold } from "react-icons/md";
import { changeCssRootValue } from "~/store/utils";
import { useEffectOnce } from "usehooks-ts";
import Fonts from "./fonts";
import Themes from "./themes";

export default function Index() {
  const [fontPanel, toggleFontPanel] = useToggle(false);
  const [letterSpacing, setLetterSpacing] = useState(1);
  const [fontSize, setFontSize] = useState(1);
  const [fontWeight, setFontWeight] = useState(1);
  const appCtx = useAppContext();
  const { appearance, setKey } = appCtx.preferences();
  const onFontSizeChange = (_v) => {
    setFontSize(_v);
  };
  const onFontWeightChange = (_v) => {
    setFontWeight(_v);
  };
  const fontSizeSliderMarks = {
    // 0.6: <BiFont size={"1em"} />,
    // 0.8: <BiFont size={'1em'}/>,
    0.8: <BiFont size={16} />,
    0.9: <BiFont size={18} />,
    1.0: <BiFont size={20} />,
    // 1.1: <BiFont size={'1.875em'}/>,
    1.1: <BiFont size={22} />,
    // 1.2: <BiFont size={'2em'}/>,
    1.2: <BiFont size={24} />,
  };
  const fontWeightSliderMarks = {
    1: <span style={{ fontWeight: "100" }}>A</span>,
    2: <span style={{ fontWeight: "500" }}>A</span>,
    3: <span style={{ fontWeight: "900" }}>A</span>,
  };
  const updateAppearanceKey = (_key, _value) => {
    setKey("appearance", { ...appearance, [_key]: _value });
  };

  // useEffect(() => {
  //   // setFontSize(appearance.fontSize);
  //   // setFontWeight(appearance.fontWeight);
  // }, [appearance]);

  useEffectOnce(() => {
    setLetterSpacing(appearance.letterSpacing);
    // console.log('Triggered only once, on mount', { data })
  });
  return (
    <div className="flex column p2 w100">
      {/* <div className="flex alignCenter paragraph"> */}
        <label
          className="textSecondary noWrapText ml3 mb1"
          style={{ width: "fit-content" }}
        >
          Colors and scheme
        </label>
        {/* <div className="b bb1 ml2 w100" /> */}
      {/* </div> */}
      <Themes />

      {/* <div className="flex alignCenter mt4 paragraph b bb1 pb1"> */}
        <label
          className="textSecondary noWrapText ml3 mt8 mb1"
          style={{ width: "fit-content" }}
        >
          Fonts and size
        </label>
        {/* <div className="b bb1 ml2 w100" /> */}
      {/* </div> */}
      <SettingOption
        icon={BiFontSize}
        title="Font Size"
        text="The font-size property sets the size of the font."
        className="pb4 mb1"
        option={
          <div className="flex alignCenter">
            {/* <span>{preference.root['text-base-size']}</span> */}
            <Slider
              marks={fontSizeSliderMarks}
              value={appearance.fontSize}
              style={{ minWidth: "14em" }}
              className="ml2 mb5 withTransformMarks"
              min={0.8}
              step={0.1}
              max={1.2}
              onChange={(e) => {
                updateAppearanceKey("fontSize", e);
                changeCssRootValue("--text-base-size", `${e}em`);
              }}
            />
          </div>
        }
      />
      <SettingOption
        className="mb1 mt1"
        title="Font Family"
        icon={BiFontFamily}
        text="The font-family property specifies the font for an element."
        option={
          <Tippy
            // appendTo={() => document.querySelector('#root')}
            interactive
            visible={fontPanel}
            onClickOutside={toggleFontPanel}
            placement="right-end"
            content={
              <Fonts
                selectedFont={appearance.fontFamily}
                setSelectedFont={(_f) => {
                  updateAppearanceKey("fontFamily", _f.font);
                  changeCssRootValue("--font-family", _f.font);
                }}
              />
            }
          >
            <Button className="small outlined" onClick={toggleFontPanel}>
              {/* {selectedFont.title} */}
              {appearance.fontFamily.split(",")[0]}
              {/* Selected font */}
            </Button>
          </Tippy>
        }
      />
      <SettingOption
        className="mt1 mb1"
        title="Font Weight"
        icon={MdOutlineFormatBold}
        text="The font-weight property sets how thick or thin characters in text should be displayed."
        option={
          <div className="flex alignCenter gap-1">
            <Button
              onClick={() => {
                updateAppearanceKey("fontWeight", 100);
                changeCssRootValue("--font-weight", 100);
              }}
              className={`small ${
                appearance.fontWeight === 100 ? "contained" : "outlined"
              }`}
              style={{ fontWeight: "100" }}
            >
              Thin
            </Button>
            <Button
              onClick={() => {
                updateAppearanceKey("fontWeight", 500);
                changeCssRootValue("--font-weight", 500);
              }}
              className={`small ${
                appearance.fontWeight === 500 ? "contained" : "outlined"
              }`}
              style={{ fontWeight: "500" }}
            >
              Normal
            </Button>
            <Button
              onClick={() => {
                updateAppearanceKey("fontWeight", 900);
                changeCssRootValue("--font-weight", 900);
              }}
              className={`small ${
                appearance.fontWeight === 900 ? "contained" : "outlined"
              }`}
              style={{ fontWeight: "900" }}
            >
              Bold
            </Button>
          </div>
        }
      />
      <SettingOption
        className="mt1"
        title="Letter-spacing"
        icon={CgFontSpacing}
        text="The letter-spacing property increases or decreases the space between characters in a text."
        option={
          <CustomInputNumber
            value={letterSpacing}
            step={0.005}
            // 0.035
            min={0.005}
            max={0.08}
            onChange={(e) => {
              // console.log(appearance.letterSpacing)
              // console.log(e)
              setLetterSpacing(e);
              changeCssRootValue("--letter-spacing", `${e}em`);

              setTimeout(() => {
                updateAppearanceKey("letterSpacing", e);
              }, 500);
            }}
          />
        }
      />
    </div>
  );
}
