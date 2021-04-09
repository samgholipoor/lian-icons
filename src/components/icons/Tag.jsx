import React from "react";

const Tag = ({
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
      viewBox="0 0 25 25"
    >
      <path
        d="M11.2227 1.27421C12.0594 1.24074 12.8719 1.55844 13.464 2.15049L22.1627 10.8492C23.3343 12.0208 23.3343 13.9203 22.1627 15.0919L15.0917 22.163C13.9201 23.3345 12.0206 23.3345 10.849 22.163L2.15026 13.4642C1.5582 12.8721 1.24051 12.0596 1.27398 11.223L1.61973 2.57919C1.64056 2.0583 2.05807 1.6408 2.57896 1.61996L11.2227 1.27421Z"
        stroke={color}
        stroke-width="2"
      />
      <circle cx="8.14062" cy="7.5564" r="1" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { Tag };
