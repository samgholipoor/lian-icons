import React from "react";

const Microphone = ({
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
      <rect
        x="9"
        y="1"
        width="6"
        height="14"
        rx="3"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M5 9.5V12C5 15.866 8.13401 19 12 19V19C15.866 19 19 15.866 19 12V9.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 19V23"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M16 24C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22V24ZM8 22C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24V22ZM16 22H8V24H16V22Z"
        fill={color}
      />
    </svg>
  );
};

export { Microphone };
