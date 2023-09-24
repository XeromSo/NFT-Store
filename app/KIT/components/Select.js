import React from "react";
import Select from "react-select";

// interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
//   label?: string;
//   className?: string;
//   loading?: boolean;
//   startIcon?: JSX.Element;
//   endIcon?: JSX.Element;
//   isMulti?: boolean;
//   variant?: "outlined" | "filled" | "plain";
//   // options: Array<{ value: string | number | object; label: string }>;
//   options:
//     | OptionsOrGroups<string | number, GroupBase<string | number>>
//     | undefined;
//   onChange?: (
//     value: string | string[] | number | number[] | object | object[]
//   ) => void;
//   value?: string | string[] | number | number[] | object | object[];
// }

const MySelect = ({
  // children,
  startIcon = undefined,
  isMulti = false,
  onChange,
  value = undefined,
  options,
  label,
  variant = "outlined",
  className,
  placeholder = "Select...",
  parentStyle = {},
  emptyOptions = () => "No options.",
  // ...selectProps
}) =>
  // ref
  {
    return (
      <div
        className={`select-wrapper ${variant} ${className}`}
        style={parentStyle}
      >
        <label>{label}</label>
        <div className="select-parent flex alignCenter">
          {startIcon && <div className="flex pl3">{startIcon}</div>}
          <Select
            // ref={ref}
            options={options}
            noOptionsMessage={emptyOptions}
              // menuIsOpen={true}
            placeholder={placeholder}
            classNamePrefix="nft-select"
            onChange={(e) => {
              if (isMulti) return onChange(e.map((_e) => _e.value));
              onChange(e);
            }}
            value={options?.find((obj) => obj.value === value)}
            className="nft-select-base"
            // components={{ Option: IconOption, SingleValue: CustomSingleValue }}
            // options={options}
            isMulti={isMulti}
            // {...selectProps}
          />
        </div>
      </div>
    );
  };
// MySelect.defaultProps = {
//   variant: "outlined",
//   className: "",
// };
export default MySelect;
