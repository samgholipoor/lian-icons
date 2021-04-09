import React from "react";

const Paste = ({
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
        d="M7 3H6C4.34315 3 3 4.34315 3 6V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V6C21 4.34315 19.6569 3 18 3H17"
        stroke={color}
        stroke-width="2"
      />
      <rect
        x="7"
        y="1"
        width="10"
        height="5"
        rx="2"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};

export { Paste };
