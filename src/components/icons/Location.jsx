import React from "react";

const Location = ({
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
      viewBox="0 0 24 25"
    >
      <path
        d="M22 11C22 15.346 15.8077 20.9022 13.1687 23.0727C12.4838 23.636 11.5162 23.636 10.8313 23.0727C8.19234 20.9022 2 15.346 2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11Z"
        stroke={color}
        stroke-width="2"
      />
      <circle cx="12" cy="11" r="3" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { Location };
