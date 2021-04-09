import React from "react";

const More = ({
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
      <circle cx="7" cy="12" r="2" transform="rotate(-90 7 12)" fill={color} />
      <circle
        cx="17"
        cy="12"
        r="2"
        transform="rotate(-90 17 12)"
        fill={color}
      />
    </svg>
  );
};

export { More };
