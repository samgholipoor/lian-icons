import React from "react";

const Wifi = ({
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
      viewBox="0 0 25 24"
    >
      <path
        d="M1 8.6863C2.48574 7.20056 4.24956 6.02201 6.19077 5.21793C8.13198 4.41385 10.2126 4 12.3137 4C14.4149 4 16.4954 4.41385 18.4366 5.21793C20.3779 6.022 22.1417 7.20055 23.6274 8.68629"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4.53516 12.2218C5.5566 11.2004 6.76923 10.3901 8.10381 9.83733C9.43839 9.28452 10.8688 9 12.3133 9C13.7579 9 15.1883 9.28452 16.5228 9.83732C17.8574 10.3901 19.0701 11.2004 20.0915 12.2218"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M8.07129 15.7574C8.62844 15.2002 9.28988 14.7583 10.0178 14.4567C10.7458 14.1552 11.526 14 12.3139 14C13.1019 14 13.8821 14.1552 14.61 14.4567C15.338 14.7583 15.9994 15.2002 16.5566 15.7574"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <circle cx="12.3135" cy="19.5" r="0.5" stroke={color} />
    </svg>
  );
};

export { Wifi };