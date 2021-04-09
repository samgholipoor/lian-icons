import React from "react";

const Home = ({
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
        d="M2 9.88014C2 8.92659 2.45332 8.02983 3.22115 7.46442L12 1L20.7788 7.46443C21.5467 8.02983 22 8.92659 22 9.88014V20.5C22 21.8807 20.8807 23 19.5 23H16C15.4477 23 15 22.5523 15 22V16C15 15.7239 14.7761 15.5 14.5 15.5H9.5C9.22386 15.5 9 15.7239 9 16V22C9 22.5523 8.55228 23 8 23H4.5C3.11929 23 2 21.8807 2 20.5V9.88014Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Home };
