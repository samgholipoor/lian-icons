import React from "react";

const Cast = ({
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
        d="M1.29248 7V6C1.29248 4.34315 2.63563 3 4.29248 3H20.2925C21.9493 3 23.2925 4.34315 23.2925 6V18C23.2925 19.6569 21.9493 21 20.2925 21H15.2925"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.10479 11.6568C2.28668 11.6568 3.45701 11.8896 4.54894 12.3419C5.64087 12.7942 6.63302 13.4571 7.46875 14.2928C8.30448 15.1286 8.96741 16.1207 9.4197 17.2127C9.872 18.3046 10.1048 19.4749 10.1048 20.6568"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1.10557 16.1729C1.6597 16.1729 2.20841 16.2821 2.72037 16.4941C3.23232 16.7062 3.6975 17.017 4.08933 17.4089C4.48117 17.8007 4.79199 18.2659 5.00405 18.7778C5.2161 19.2898 5.32525 19.8385 5.32525 20.3926"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <circle
        cx="1.12109"
        cy="20.4685"
        r="0.5"
        transform="rotate(45 1.12109 20.4685)"
        stroke={color}
      />
    </svg>
  );
};

export { Cast };
