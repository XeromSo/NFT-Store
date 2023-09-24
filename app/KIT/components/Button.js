import React from "react";

// interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
//   //   fooBar?: string; // my custom prop
//   loading?: boolean;
//   startIcon?: JSX.Element;
// }

const Button = React.forwardRef(
  ({ children, startIcon, className = "", endIcon, ...buttonProps }, ref) => (
    <button
      className={`nft-button-base ${className}`}
      {...buttonProps}
      ref={ref}
    >
      {startIcon && <div className="flex">{startIcon}</div>}
      {children}
      {endIcon && <div className="flex">{endIcon}</div>}
    </button>
  )
);

export default Button;
