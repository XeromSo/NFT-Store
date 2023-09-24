import React from "react";

// interface SwitchProps extends React.ComponentPropsWithoutRef<"input"> {
//   label?: string;
//   className?: string;
//   id: string;
//   vertical?: boolean;
// }

const Checkbox = React.forwardRef(
  ({ label, id, className = "", variant = "bounce", ...props }, ref) => (
    <label htmlFor={id} className={`sxt-checkbox ${variant} ${className}`}>
      <input type="checkbox" role="checkbox" id={id} ref={ref} {...props} />

      {variant === "bounce" ? (
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      ) : (
        <svg viewBox="0 0 21 21">
          <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
        </svg>
      )}

      {label}
    </label>
  )
);

export default Checkbox;
