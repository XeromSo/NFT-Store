import React from "react";

import {
  BiCartAlt,
  BiCookie,
  BiPurchaseTagAlt,
  BiRocket,
} from "react-icons/bi";
import { CustomLink, LinksDropDown } from "~/components";
import { Button } from "~/KIT";
export default function DropDownLinksContent({
  activeLink = "gettingStarted",
}) {
  return (
    <div className="flex column buttonAlignsLeft" style={{ minWidth: "12em" }}>
      <CustomLink className="w100" to="/helpCenter/gettingStarted">
        <Button
          className={`w100 ${
            activeLink === "gettingStarted" ? "mainColor" : ""
          }`}
          startIcon={<BiRocket />}
        >
          Getting started
        </Button>
      </CustomLink>
      <CustomLink className="w100" to="/helpCenter/creating">
        <Button
          className={`w100 ${activeLink === "creating" ? "mainColor" : ""}`}
          startIcon={<BiCookie />}
        >
          Creating
        </Button>
      </CustomLink>
      <CustomLink className="w100" to="/helpCenter/buying">
        <Button
          startIcon={<BiCartAlt />}
          className={`w100 ${activeLink === "buying" ? "mainColor" : ""}`}
        >
          Buying
        </Button>
      </CustomLink>
      <CustomLink className="w100" to="/helpCenter/selling">
        <Button
          startIcon={<BiPurchaseTagAlt />}
          className={`w100 ${activeLink === "selling" ? "mainColor" : ""}`}
        >
          Selling
        </Button>
      </CustomLink>
    </div>
  );
}
