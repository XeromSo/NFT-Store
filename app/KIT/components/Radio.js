import React from "react";

// interface SwitchProps extends React.ComponentPropsWithoutRef<"input"> {
//   label?: string;
//   className?: string;
//   id: string;
//   vertical?: boolean;
// }

const Radio = React.forwardRef(
  (
    { label, id, className = "", variant = "bounce", style = {}, ...props },
    ref
  ) => (
    <label
      htmlFor={id}
      className={`sxt-radio ${className} ${!label ? "withoutLabel" : ""}`}
      style={style}
    >
      <input type="radio" role="radio" id={id} ref={ref} {...props} />

      <span>{label}</span>
    </label>
  )
);

export default Radio;
