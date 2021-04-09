import React from "react";

const SoundPlaying = ({
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
        d="M1 9.16724H5L10 5.16724V19.1672L5 15.1672H1V9.16724Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.702 4C20.7234 5.02144 21.5337 6.23407 22.0865 7.56866C22.6393 8.90324 22.9238 10.3336 22.9238 11.7782C22.9238 13.2227 22.6393 14.6531 22.0865 15.9877C21.5337 17.3223 20.7234 18.5349 19.702 19.5564"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M15.435 7.80322C15.9922 8.36037 16.4341 9.02181 16.7357 9.74976C17.0372 10.4777 17.1924 11.2579 17.1924 12.0459C17.1924 12.8338 17.0372 13.614 16.7357 14.342C16.4341 15.0699 15.9922 15.7314 15.435 16.2885"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { SoundPlaying };
