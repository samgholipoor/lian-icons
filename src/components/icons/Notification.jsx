import React from "react";

const Notification = ({
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
        d="M20.3333 9.01449C20.3333 7.15413 19.5607 5.36997 18.1855 4.0545C16.8102 2.73902 14.9449 2 13 2C11.0551 2 9.18982 2.73902 7.81455 4.0545C6.43928 5.36997 5.66667 7.15413 5.66667 9.01449C5.66667 14.9484 3.21304 17.809 1.86406 18.9333C1.6615 19.1021 1.79337 19.5362 2.05706 19.5362H8.52214C8.6391 19.5362 8.74073 19.6154 8.77521 19.7271C8.99911 20.4529 9.99866 23 13 23C16.0013 23 17.0009 20.4529 17.2248 19.7271C17.2593 19.6154 17.3609 19.5362 17.4779 19.5362H23.9429C24.2066 19.5362 24.3385 19.1021 24.1359 18.9333C22.787 17.809 20.3333 14.9484 20.3333 9.01449Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Notification };
