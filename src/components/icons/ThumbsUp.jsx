import React from "react";

const ThumbsUp = ({
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
        d="M1 14C1 12.3431 2.34315 11 4 11H5.17687C5.97912 11 6.70374 10.5206 7.01753 9.78228L10.3831 1.86318C10.6056 1.33981 11.1192 1 11.6879 1V1C13.3847 1 14.7015 2.48022 14.5041 4.16543L14.1337 7.32541C14.0293 8.21693 14.7259 9 15.6235 9H20.289C22.199 9 23.6226 10.7611 23.2224 12.6286L21.5082 20.6286C21.2118 22.0118 19.9894 23 18.5748 23H4C2.34315 23 1 21.6569 1 20V14Z"
        stroke={color}
        stroke-width="2"
      />
      <path d="M7 10V23" stroke={color} stroke-width="2" />
    </svg>
  );
};

export { ThumbsUp };
