import React from "react";

const Call = ({
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
        d="M17.2777 1.9735L20.7457 2.35883C21.6754 2.46213 22.3924 3.19949 22.2947 4.1298C22.0507 6.45546 20.9013 11.0412 15.9719 15.9705C11.0426 20.8999 6.45629 22.0499 4.13019 22.2944C3.19972 22.3922 2.46212 21.6752 2.3588 20.7453L1.97351 17.2777C1.88544 16.485 2.27671 15.7158 2.96921 15.3202L5.45331 13.9011C6.23635 13.4538 7.22191 13.5859 7.85959 14.2235L8.49687 14.8608C8.96972 15.3337 9.65114 15.5337 10.2555 15.2475C10.9715 14.9083 12.0065 14.2792 13.1428 13.1428C14.2792 12.0064 14.9083 10.9715 15.2475 10.2555C15.5338 9.65113 15.3337 8.96971 14.8608 8.49686L14.2236 7.85957C13.5859 7.2219 13.4538 6.23634 13.9012 5.45329L15.3202 2.9692C15.7158 2.2767 16.4851 1.88543 17.2777 1.9735Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Call };