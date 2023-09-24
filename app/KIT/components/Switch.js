import React from "react";

// interface SwitchProps extends React.ComponentPropsWithoutRef<"input"> {
//   label?: string;
//   className?: string;
//   id: string;
//   vertical?: boolean;
// }

const Switch = React.forwardRef(
  ({ label, id,vertical, className,...props }, ref) => (
    <label htmlFor={id} className={`gui-switch ${vertical ? '-vertical' : ''} ${className}`}>
      {label}
      <input type="checkbox" role="switch" id={id} ref={ref} {...props} />
    </label>
  )
);

export default Switch;
