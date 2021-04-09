import React from "react";

const View = ({
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
        d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z"
        stroke={color}
        stroke-width="2"
      />
      <circle cx="11.6797" cy="12" r="3" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { View };
