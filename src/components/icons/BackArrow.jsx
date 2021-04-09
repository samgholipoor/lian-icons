import React from "react";

const BackArrow = ({
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
      viewBox="0 0 24 24"
      fill={fill ? "fill" : "none"}
    >
      <path
        d="M9.71729 5L3.00021 12L9.71729 19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="1"
        y1="-1"
        x2="16.7331"
        y2="-1"
        transform="matrix(1 0 0 -1 3.26709 11.0317)"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { BackArrow };