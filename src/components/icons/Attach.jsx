import React from "react";

const Attach = ({
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
      viewBox="0 0 24 25"
      fill={fill ? "fill" : "none"}
    >
      <path
        d="M21.981 11.6673L12.0815 21.5668C12.0815 21.5668 7.48528 26.163 3.24264 21.9203C-1 17.6777 3.59619 13.0815 3.59619 13.0815L13.8492 2.82843C13.8492 2.82843 16.6777 3.94413e-06 19.5061 2.82843C22.3345 5.65686 19.5061 8.48529 19.5061 8.48529L9.6066 18.3848C9.6066 18.3848 8.19239 19.799 6.77817 18.3848C5.36396 16.9706 6.77817 15.5564 6.77817 15.5564L15.9706 6.36396"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Attach };
