import React from "react";

const ThumbsDown = ({
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
        d="M1 10C1 11.6569 2.34315 13 4 13H5.17687C5.97912 13 6.70374 13.4794 7.01753 14.2177L10.3831 22.1368C10.6056 22.6602 11.1192 23 11.6879 23V23C13.3847 23 14.7015 21.5198 14.5041 19.8346L14.1337 16.6746C14.0293 15.7831 14.7259 15 15.6235 15H20.289C22.199 15 23.6226 13.2389 23.2224 11.3714L21.5082 3.37141C21.2118 1.9882 19.9894 1 18.5748 1H4C2.34315 1 1 2.34315 1 4V10Z"
        stroke={color}
        stroke-width="2"
      />
      <path d="M7 14V1" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { ThumbsDown };
