import React from "react";

const Refresh = ({
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
      viewBox="0 0 26 24"
    >
      <path
        d="M4.23683 9.51926C4.76071 7.69228 5.84953 6.07804 7.34723 4.9079C8.84494 3.73777 10.6746 3.07181 12.5741 3.00548C14.4735 2.93915 16.3452 3.47585 17.9209 4.53866C19.4966 5.60147 20.6954 7.13583 21.3454 8.92182"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.1803 15.4987C20.5032 17.1033 19.3752 18.477 17.933 19.4532C16.4907 20.4294 14.7962 20.9662 13.0549 20.9985C11.3137 21.0307 9.60044 20.5571 8.12301 19.635C6.64559 18.7129 5.46743 17.382 4.73141 15.8036"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.71387 14.9349L4.14692 15.3155L2.91127 17.5975"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.1333 9.72992L21.7003 9.34927L22.9359 7.06731"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Refresh };
