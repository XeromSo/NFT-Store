import React from "react";
import Button from "./Button";

const Tab = React.forwardRef(
  (
    {
      isActive = false,
      className = "",
      label,
      activeClassName = "contained",
      icon,
      value,
      ...rest
    },
    ref
  ) => (
    <Button
      className={`s3-tab-wrapper ${className} ${
        isActive ? `active-tab ${activeClassName}` : ""
      }`}
      {...rest}
    >
      {/* {icon && <div className="flex alignCenter">{icon}</div>} */}
      {label}
    </Button>
  )
);

export default Tab;
