import React from "react";

const MenuRight = ({
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
        d="M4 7H20"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M8 17H20"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { MenuRight };
