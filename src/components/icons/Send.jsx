import React from "react";

const Send = ({
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
      viewBox="0 0 25 25"
    >
      <path
        d="M2.22693 12.827C1.39918 12.5087 1.36474 11.3503 2.1721 10.9833L20.907 2.46743C21.7482 2.08508 22.6135 2.95043 22.2312 3.7916L13.7153 22.5265C13.3483 23.3339 12.19 23.2994 11.8716 22.4717L9.35208 15.9209C9.2505 15.6568 9.0418 15.4481 8.77771 15.3466L2.22693 12.827Z"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};

export { Send };
