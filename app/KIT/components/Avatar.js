import React from "react";

// interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
//   //   fooBar?: string; // my custom prop
//   loading?: boolean;
//   startIcon?: JSX.Element;
// }

const Avatar = React.forwardRef(
  (
    {
      variant = "circle",
      size = "",
      src,
      component,
      children,
      style,
      badge,
      className = "",
      badgePosition = "bottom-right",
      ...avatarProps
    },
    ref
  ) => {
    const Component = component || "div";
    const styles = {
      backgroundImage: `url(${src})`,
      ...style,
    };
    return (
      <Component
        ref={ref}
        className={`nft-avatar-base ${variant} ${size} ${
          src ? "nft-avatar-img" : ""
        } ${className}`}
        {...avatarProps}
        style={src ? styles : style}
      >
        {!src && children}

        {badge && (
          <div className={`nft-avatar-badge ${badgePosition}`}>{badge}</div>
        )}
      </Component>
    );
  }
);

export default Avatar;
