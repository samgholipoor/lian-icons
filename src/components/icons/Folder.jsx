import React from "react";

const Folder = ({
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
        d="M1 7C1 5.34315 2.34315 4 4 4H8.39023C9.10636 4 9.79887 4.25618 10.3426 4.72223L12.1574 6.27777C12.7011 6.74382 13.3936 7 14.1098 7H20C21.6569 7 23 8.34315 23 10V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V7Z"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};

export { Folder };
