import React from "react";

const Bookmark = ({
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
        d="M13.1408 16.5858L19.2148 20.8039C19.5464 21.0341 20 20.7968 20 20.3932V7C20 4.79086 18.2091 3 16 3H8C5.79086 3 4 4.79086 4 7V20.3932C4 20.7968 4.45364 21.0341 4.7852 20.8039L10.8592 16.5858C11.5451 16.1094 12.4549 16.1094 13.1408 16.5858Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Bookmark };
