import React from "react";

const Backspace = ({
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
      viewBox="0 0 25 24"
      fill={fill ? "fill" : "none"}
    >
      <path
        d="M6.48778 4.26421C7.05035 3.4712 7.96234 3 8.93462 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H8.93462C7.96234 21 7.05035 20.5288 6.48778 19.7358L1.41046 12.5786C1.16461 12.232 1.16461 11.768 1.41046 11.4214L6.48778 4.26421Z"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M11 9L17 15"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 15L17 9"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Backspace };
