import React from "react";

const Card = ({
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
      <rect
        x="2"
        y="5"
        width="20"
        height="15"
        rx="2"
        stroke={color}
        stroke-width="2"
      />
      <path d="M1 10H23" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { Card };
