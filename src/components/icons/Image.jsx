import React from "react";

const Image = ({
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
        d="M1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6Z"
        stroke={color}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M1 19L14.7351 9.68806C15.3578 9.26587 16.1648 9.22887 16.8236 9.59232L23 13"
        stroke={color}
        stroke-width="2"
      />
      <circle cx="6" cy="9" r="1" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { Image };
