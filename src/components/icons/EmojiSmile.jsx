import React from "react";

const EmojiSmile = ({
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
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7716 16.2654V16.2654C15.0075 15.8858 14.6377 15.5 14.1908 15.5H12L9.80922 15.5C9.3623 15.5 8.9925 15.8858 9.22836 16.2654V16.2654C9.37913 16.508 9.6001 16.7285 9.87868 16.9142C10.1573 17.0999 10.488 17.2472 10.8519 17.3478C11.2159 17.4483 11.606 17.5 12 17.5C12.394 17.5 12.7841 17.4483 13.1481 17.3478C13.512 17.2472 13.8427 17.0999 14.1213 16.9142C14.3999 16.7285 14.6209 16.508 14.7716 16.2654Z"
        stroke={color}
        stroke-width="2"
      />
      <circle cx="8" cy="10" r="1" stroke={color} stroke-width="2" />
      <circle cx="16" cy="10" r="1" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { EmojiSmile };
