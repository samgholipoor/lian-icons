import React from "react";

const Resize = ({
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
        d="M13.0874 3.64545L20.3618 3.64545L20.3618 10.9363"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="1"
        y1="-1"
        x2="9.16468"
        y2="-1"
        transform="matrix(-0.70631 0.707903 -0.70631 -0.707903 19.3853 3.09277)"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M10.9121 20.3546L3.63768 20.3546L3.63768 13.0637"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="1"
        y1="-1"
        x2="9.16468"
        y2="-1"
        transform="matrix(0.70631 -0.707903 0.70631 0.707903 4.61621 20.6697)"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { Resize };
