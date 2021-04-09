import React from "react";

const Link = ({
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
        d="M20.8783 2.87855C18.7294 0.729608 15.2452 0.729609 13.0963 2.87855L9.5646 6.41025C9.32163 6.65322 9.51863 7.03495 9.86191 7.02022L11.4185 6.95344C11.7083 6.941 11.983 6.82027 12.1882 6.61511L14.5105 4.29276C15.8784 2.92487 18.0962 2.92487 19.4641 4.29276C20.832 5.66066 20.832 7.87845 19.4641 9.24634L15.9324 12.778C14.5645 14.1459 12.3467 14.1459 10.9788 12.778C10.9446 12.7439 10.9113 12.7092 10.8788 12.6739C10.6089 12.3812 10.2423 12.1738 9.84439 12.1908C9.08916 12.2232 8.59484 12.9924 9.04832 13.5972C9.20385 13.8047 9.37594 14.0036 9.5646 14.1923C11.7135 16.3412 15.1977 16.3412 17.3466 14.1923L20.8783 10.6606C23.0272 8.51161 23.0272 5.02749 20.8783 2.87855Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.3848 11.7237C14.1863 11.6964 14.6915 10.8641 14.1666 10.2578C14.0785 10.156 13.9861 10.0567 13.8894 9.95998C11.709 7.77955 8.17382 7.77955 5.99339 9.95998L2.57571 13.3777C0.395283 15.5581 0.395283 19.0933 2.57571 21.2737C4.75614 23.4541 8.29131 23.4541 10.4717 21.2737L13.8894 17.856C14.0655 17.6799 13.9273 17.3973 13.6784 17.4058L11.8772 17.4671C11.593 17.4767 11.323 17.594 11.1219 17.7951L9.05752 19.8595C7.65814 21.2588 5.3893 21.2589 3.98992 19.8595C2.59055 18.4601 2.59055 16.1913 3.98992 14.7919L7.40761 11.3742C8.80698 9.97481 11.0758 9.97481 12.4752 11.3742C12.6929 11.5919 12.9807 11.7374 13.2884 11.7269L13.3848 11.7237Z"
        fill={color}
      />
    </svg>
  );
};

export { Link };