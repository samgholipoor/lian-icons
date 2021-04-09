import React from "react";

const Export = ({
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
      viewBox="0 0 24 25"
    >
      <path
        d="M16.8892 6.55481L11.7292 1.36036L6.56932 6.55481"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="1"
        y1="-1"
        x2="12"
        y2="-1"
        transform="matrix(0 1 1 0 12.7285 2.34991)"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3 13V18C3 20.7614 5.23858 23 8 23H15C17.7614 23 20 20.7614 20 18V13"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Export };
