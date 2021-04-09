import React from "react";

const Comment = ({
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
      viewBox="0 0 26 24"
    >
      <path
        d="M7.00098 2C3.68727 2 1.00098 4.68629 1.00098 8V12C1.00098 12.2403 1.01511 12.4774 1.04259 12.7104C1.01489 12.802 1 12.8993 1 13V21.8258C1 22.6801 2.00212 23.141 2.65079 22.585L7.43827 18.4815C7.80075 18.1708 8.26243 18 8.73985 18H19.001C22.3147 18 25.001 15.3137 25.001 12V8C25.001 4.68629 22.3147 2 19.001 2H7.00098Z"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};

export { Comment };
