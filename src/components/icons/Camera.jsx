import React from "react";

const Camera = ({
  className,
  width = "24",
  height = "24",
  color = "#14142B",
  fill = false,
  ...props
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      {...props}
      fill={fill ? "fill" : "none"}
      viewBox="0 0 24 24"
    >
      <path
        d="M2 9.25694C2 7.45818 3.45818 6 5.25694 6V6C6.34591 6 7.36283 5.45576 7.96688 4.54969L8 4.5C8.62474 3.56288 9.6765 3 10.8028 3H13.1972C14.3235 3 15.3753 3.56288 16 4.5L16.0331 4.54969C16.6372 5.45576 17.6541 6 18.7431 6V6C20.5418 6 22 7.45818 22 9.25694V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V9.25694Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="12"
        cy="13"
        r="4"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Camera };
