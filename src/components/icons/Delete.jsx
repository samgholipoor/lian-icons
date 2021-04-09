import React from "react";

const Delete = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 4L2.80999 20.1998C2.91643 22.3286 4.6735 24 6.805 24H17.195C19.3265 24 21.0836 22.3286 21.19 20.1997L22 4H2ZM4.1025 6L4.80749 20.0999C4.86071 21.1643 5.73925 22 6.805 22H17.195C18.2607 22 19.1393 21.1643 19.1925 20.0999L19.8975 6H4.1025Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 4H9V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4ZM7 6V3C7 1.34315 8.34315 0 10 0H14C15.6569 0 17 1.34315 17 3V6H7Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 5C0 4.44772 0.447715 4 1 4H23C23.5523 4 24 4.44772 24 5C24 5.55228 23.5523 6 23 6H1C0.447715 6 0 5.55228 0 5Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 10C15.5523 10 16 10.4477 16 11V16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16V11C14 10.4477 14.4477 10 15 10Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 10C9.55228 10 10 10.4477 10 11V16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16V11C8 10.4477 8.44772 10 9 10Z"
        fill={color}
      />
    </svg>
  );
};

export { Delete };
