import React from "react";
import Slider from "rc-slider";

// interface MySliderProps extends React.ForwardRefExoticComponent<"input"> {
//   label?: string;
//   className?: string;
//   loading?: boolean;
//   dots?: boolean;
//   min?: number;
//   max?: number;
//   step?: number;
//   value?: number;
//   onChange?: (value: number | number[]) => void;
//   marks?: { [key: string | number]: any };
// }

const MySlider = ({
  step = 1,
  min = 0,
  max = 100,
  label = "",
  className = "",
  onChange,
  marks,
  dots = false,
  value = undefined,
  ...sliderProps
}) =>
  // ref
  {
    //   const Component = withToolTip ? createSliderWithTooltip(Slider) : Slider;
    const Component = Slider;
    return (
      <div className={`slider-wrapper ${className}`}>
        <label>{label}</label>
        <div className="slider-parent flex alignCenter">
          <Component
            onChange={onChange}
            value={value}
            step={step}
            marks={marks}
            min={min}
            max={max}
            dots={dots}
            //   style={style}
            {...sliderProps}
            //   typeof={undefined}
            //   onChange={withDebounce ? debouncedOnChange : onUpdateValue}
          />
        </div>
      </div>
    );
  };
// MySlider.defaultProps = {
//   className: "",
//   label: "",
//   loading: false,
//   dots: false,
//   min: 0,
//   max: 100,
//   step: 1,
//   value: 0,
//   onChange: (_e: number | number[]) => {},
//   marks: {},
// };
export default MySlider;
