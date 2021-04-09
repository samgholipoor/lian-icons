import React from "react";

const Play = ({
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
        d="M5 5.65537C5 4.48811 6.27454 3.76814 7.27427 4.37066L17.8017 10.7153C18.7693 11.2985 18.7693 12.7015 17.8017 13.2847L7.27427 19.6293C6.27454 20.2319 5 19.5119 5 18.3446V5.65537Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Play };
