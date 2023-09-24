import React from "react";
import { MdDone } from "react-icons/md";
import { Button } from "~/KIT";

// 'Orbitron', sans-serif
const fonts = [
  {
    title: "Google Material",
    font: `'Roboto', sans-serif`,
  },
  {
    title: "Apple System",
    font: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },

  // sans-serif fonts
  // {
  //   title: "Josefin Sans",
  //   font: `Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif`,
  // },
  {
    title: "Trebuchet MS",
    font: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
  },
  {
    title: "Candara,Calibri",
    font: `Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif`,
  },
  {
    title: "Gill Sans",
    font: `Gill Sans,Gill Sans MT,Calibri,sans-serif`,
  },
  {
    title: "Arial,Helvetica",
    font: `Arial,Helvetica Neue,Helvetica,sans-serif`,
  },

  //serif font
  {
    title: "Times New Roman",
    font: `TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif`,
  },

  // Monospaced
  {
    title: "Courier New Monospaced",
    font: `Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace`,
  },

  // fantasy
  {
    title: "Papyrus,fantasy",
    font: `Papyrus,fantasy`,
  },

  // script
  {
    title: "Brush Script",
    font: `Brush Script MT,cursive`,
  },
];

export default function Fonts({selectedFont, setSelectedFont}) {
  return (
    <div className="flex column popOptionListWrapper p1">
      <label className="text--sm textSecondary p p1 b bb1">SELECT FONT</label>

      <div className="flex column">
        {fonts.map((value, index) => {
          return (
            <Button
              key={`${value.title}-${index}`}
              className="opt outlined"
              onClick={setSelectedFont.bind(this, value)}
              style={{ fontFamily: value.font }}
            >
              {selectedFont === value.font && (
                <MdDone size={"1.2em"} className="tik primary" />
              )}
              {value.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
