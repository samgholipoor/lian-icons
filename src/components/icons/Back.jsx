import React from "react";

const Back = ({
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
        d="M15.9634 5L9.00021 11.9632L15.9634 18.9263"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Back };
