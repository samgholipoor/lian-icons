import React from "react";

const Star = ({
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
        d="M11.3079 2.65797C11.5645 2.0432 12.4355 2.0432 12.6921 2.65797L14.8937 7.93186C14.9962 8.17755 15.2214 8.35045 15.4852 8.38616L21.2876 9.17148C21.9378 9.25948 22.1695 10.081 21.6612 10.4958L17.1809 14.1518C16.9594 14.3326 16.86 14.6235 16.9244 14.902L18.3568 21.0919C18.5119 21.762 17.7583 22.27 17.1953 21.8748L12.4309 18.5309C12.1723 18.3494 11.8277 18.3494 11.5691 18.5309L6.8047 21.8749C6.24167 22.27 5.48807 21.7621 5.64315 21.0919L7.07545 14.902C7.1399 14.6235 7.04042 14.3326 6.81895 14.1518L2.3388 10.4958C1.83048 10.081 2.06222 9.25948 2.7124 9.17149L8.51479 8.38616C8.77862 8.35045 9.00375 8.17755 9.10631 7.93186L11.3079 2.65797Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="3.3292"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Star };