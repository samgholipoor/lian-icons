import React from "react";

const Bag = ({
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
        d="M2.46356 4.44373C2.16403 4.80316 2 5.25623 2 5.7241V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V5.7241C22 5.25623 21.836 4.80316 21.5364 4.44373L19.2664 1.71963C18.8864 1.26365 18.3235 1 17.7299 1H6.27008C5.67652 1 5.11363 1.26365 4.73364 1.71963L2.46356 4.44373Z"
        stroke={color}
        stroke-width="2"
      />
      <path d="M2 5.5H22" stroke={color} stroke-width="2" />
      <path
        d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { Bag };
