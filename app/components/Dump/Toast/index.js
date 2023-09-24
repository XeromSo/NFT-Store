import React from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { RiCheckboxCircleFill, RiCloseCircleFill, RiErrorWarningFill, RiInformationFill } from "react-icons/ri";
const icons = {
  default: null,
  success: RiCheckboxCircleFill,
  error: RiCloseCircleFill,
  warning: RiErrorWarningFill,
  info: RiInformationFill,
};
export default function Index({ title, message, type, children }) {
  // console.log(type)
  const Icon = icons[type] || "span";
  return (
    <div className="flex alignStart p1 pl0">
      {(type && type !== "default") && <Icon className={`mr2 ${type}`} size="1.4em" />}
      <div className="flex column">
        <h6 className="fs-200 fontBold">{title}</h6>
        <p className="fs-150 textSecondary mt1">{message}</p>
        {children}
      </div>
    </div>
  );
}
