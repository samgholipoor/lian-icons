import React from "react";

const Map = ({
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
        d="M1 5L8 1L16 5L23 1V19L16 23L8 19L1 23V5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M16 5V22.5" stroke={color} stroke-width="2" />
      <path d="M8 1.5V19" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { Map };
