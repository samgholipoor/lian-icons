import React from "react";

const Cut = ({
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
      <circle cx="6" cy="6" r="3" stroke={color} stroke-width="2" />
      <path
        d="M8.15137 8.30408L21 21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.15137 15.6506L11.5326 12.3095"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.8457 9.03564L20.9319 3.0218"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="6" cy="18" r="3" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { Cut };
