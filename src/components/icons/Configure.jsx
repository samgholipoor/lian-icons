import React from "react";

const Configure = ({
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
        d="M3 17H13"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M10 7H20"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <circle cx="17" cy="17" r="3" stroke={color} stroke-width="2" />
      <circle cx="6" cy="7" r="3" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { Configure };
