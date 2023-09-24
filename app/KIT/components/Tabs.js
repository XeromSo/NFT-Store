import React from "react";

const Tabs = React.forwardRef(
  (
    {
      value,
      onChange,
      orientation = "horizontal",
      fullWidth = false,
      centered = false,
      className = "",
      children,
      activeClassName = "contained",
    },
    ref
  ) => {
    return (
      <div className={`s3-tabs-wrapper ${orientation} ${className}`}>
        {Object.keys(children).map((_child) => {
          const child = children[_child];
          // console.log(child);
          return React.cloneElement(child, {
            key: _child,
            value,
            // onChange,
            // fullWidth,
            // centered,
            activeClassName,
            isActive: value === child.props.value,
            onClick: (e) => {
              onChange(child.props.value);
              child.props.onClick && child.props.onClick(e);
            },
          });
        })}
      </div>
    );
  }
);

export default Tabs;
