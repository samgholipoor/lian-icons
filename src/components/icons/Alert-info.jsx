import React from "react";

const AlertInfo = ({
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
      <circle cx="12" cy="12" r="11" stroke={color} stroke-width="2" />
      <path
        d="M12 7V12"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16V16.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { AlertInfo };
