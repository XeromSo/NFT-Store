import React from "react";
import chooseSvg from "~/assets/undraw/helpCenterChoose.svg";
import { Button } from "~/KIT";
import { CustomLink } from "~/components";

export default function HelpCenterChooseSvg() {
  return (
    <div
      style={{ minHeight: "50vh" }}
      className="flex column alignCenter justifyCenter textAlign center"
    >
      <img
        src={chooseSvg}
        className="w100"
        style={{ maxWidth: "12em", filter: "grayscale(1) opacity(0.5)" }}
      />
      <h3 className="mt5 fs-400">Choose a topic to get started</h3>
      <p className="textSecondary mb4">
        If you can't find what you're looking for, contact us.
      </p>
      <CustomLink to="/">
        <Button className="outlined">Contact Us</Button>
      </CustomLink>
    </div>
  );
}
