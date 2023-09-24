import React from "react";
import { BiSearch } from "react-icons/bi";
import { TextField, Button } from "~/KIT";
import { CustomLink } from "~/components";
import { settingNavs } from "~/store/defaults";

export default function Index() {
  return (
    <div className="flex column alignCenter alignStart-sm p2 pt12 pt0-xs">
      <h4 className="fs-400 mb1 p1-sm pl2-sm dNone dFlexSm">Settings</h4>
      <TextField
        placeholder="Search.."
        style={{ width: "24em" }}
        className="mW100"
        startIcon={<BiSearch className="ml3" />}
      />

      <div className="container sm mt8 mt4-sm grid col12 w100 gap-3 gap-2-sm">
        {settingNavs.map((_sett) => {
          return (
            <CustomLink
              key={`SETTING_NAVS_${_sett.to}`}
              to={_sett.to}
              className="span-6 span-12-sm"
            >
              <Button
                className="outlined p5 flex alignStart w100"
                startIcon={_sett.icon}
              >
                <div className="ml4 flex column alignStart textAlign left">
                  <span className="fontBold fs-300 normalLineHeight">
                    {_sett.title}
                  </span>
                  <span
                    className="fs-150 fontThin mt3"
                    style={{ opacity: "0.6" }}
                  >
                    {_sett.text}
                  </span>
                </div>
              </Button>
            </CustomLink>
          );
        })}
      </div>
    </div>
  );
}
