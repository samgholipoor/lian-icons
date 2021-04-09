import React from "react";

const MoreVert = ({
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
      <circle cx="12" cy="7" r="2" fill={color} />
      <circle cx="12" cy="17" r="2" fill={color} />
    </svg>
  );
};

export { MoreVert };
