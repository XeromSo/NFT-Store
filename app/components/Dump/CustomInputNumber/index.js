import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { TextField, Button } from "~/KIT";
import useLongPress from "~/hooks/useLongPress";
export default function Index({
  disabled = false,
  maxWidth = "10em",
  plusTitle = "",
  minusTitle = "",
  value,
  step = 1,
  max,
  min,
  onChange,
  ...rest
}) {
  // step={0.005}
  //           // 0.035
  //           min={0.005}
  //           max={0.08}
  const decreaseValue = () => {
    // console.log(value, min, typeof min)
    if (min >= value) {
      return false;
    }
    onChange(Number(value) - step);
  };
  const increaseValue = () => {
    console.log(value, typeof value, step, typeof step);
    if (max <= value) {
      return false;
    }
    onChange(Number(value) + step);
  };
  const decreaseLongPress = useLongPress(decreaseValue, 100);
  const increaseLongPress = useLongPress(increaseValue, 100);
  // console.log('min: ',min,typeof min, ', value: ', value, typeof value,', max: ', max,typeof max,)
  // console.log(value > max)
  return (
    <TextField
      {...rest}
      className="customNumberInput"
      value={value}
      inputClassName="textAlign center"
      step={step}
      max={max}
      min={min}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      size="small"
      type="number"
      style={{ maxWidth, textAlign: "center" }}
      startIcon={
        <Button
          type="button"
          title={minusTitle}
          disabled={disabled}
          // disabled={min ? min >= value : false}
          className="outlined icon m1"
          onClick={decreaseValue}
          {...decreaseLongPress}
        >
          <MdRemove />
        </Button>
      }
      endIcon={
        <Button
          type="button"
          title={plusTitle}
          disabled={disabled}
          // disabled={max ? max <= value : false}
          className="outlined icon m1"
          onClick={increaseValue}
          {...increaseLongPress}
        >
          <MdAdd />
        </Button>
      }
    />
  );
}
