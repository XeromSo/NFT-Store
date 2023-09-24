import React from "react";

// interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
//   label?: string;
//   className?: string;
//   loading?: boolean;
//   startIcon?: JSX.Element;
//   endIcon?: JSX.Element;
//   variant?: "outlined" | "filled" | "plain";
// }

const TextField = React.forwardRef(
  (
    {
      children,
      startIcon,
      endIcon,
      label,
      variant,
      className='',
      textArea = false,
      style = {},
      inputStyle = {},
      inputParentStyle = {},
      inputClassName = "",
      ...inputProps
    },
    ref
  ) => (
    <div className={`input-wrapper ${variant} ${className}`} style={style}>
      {label && <label>{label}</label>}
      <div className="input-parent flex alignCenter" style={inputParentStyle}>
        {startIcon && (
          <div
            // style={{
            //   marginTop: "0.16em",
            //   marginBottom: "0.24em",
            // }}
            className="flex"
          >
            {startIcon}
          </div>
        )}

        {textArea ? (
          <textarea
            ref={ref}
            className={inputClassName}
            style={inputStyle}
            {...inputProps}
          />
        ) : (
          <input
            className={inputClassName}
            style={inputStyle}
            {...inputProps}
            ref={ref}
          />
        )}
        {endIcon && (
          <div
            // style={{
            //   marginTop: "0.16em",
            //   marginBottom: "0.24em",
            // }}
            className="flex"
          >
            {endIcon}
          </div>
        )}
      </div>
    </div>
  )
);

// TextField.defaultProps = {
//   variant: "outlined",
//   className: "",
// };
export default TextField;
