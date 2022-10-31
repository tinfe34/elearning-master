import React from "react";
import PropTypes from "prop-types";

export const IconSearch = ({ width, height, onClick, ...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      onClick={onClick}
      {...props}
    >
      <path
        fill="#231f20"
        d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
      />
      <path
        fill="#231f20"
        d="M322.36,58.4c-68.1-73-182.91-77-255.92-8.91A181.08,181.08,0,0,0,307.87,319.32q2.84-2.43,5.59-5c1.84-1.71,3.63-3.46,5.38-5.23A181.08,181.08,0,0,0,322.36,58.4Zm14.73,128.7a147.21,147.21,0,0,1-147,142.1q-2.61,0-5.25-.09A146.27,146.27,0,0,1,82.31,282.4C26.94,223,30.19,129.7,89.55,74.33A147.21,147.21,0,0,1,337.09,187.1Z"
      />
      <path
        fill="#fff"
        d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
      />
      <path
        fill="#231f20"
        d="M494.87,455.2,371.74,327.92l-49,45.73L445.89,501a33.3,33.3,0,0,0,23.3,10.58l1.19,0a33.53,33.53,0,0,0,24.49-56.39Z"
      />
      <line x1="352.47" x2="308.34" y1="356.15" y2="308.84" fill="none" />
      <rect
        width="15"
        height="64.69"
        x="322.9"
        y="300.15"
        fill="#231f20"
        transform="rotate(-43.01 330.367 332.477)"
      />
      <path
        fill="#231f20"
        d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
      />
    </svg>
  );
};

IconSearch.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};

IconSearch.defaultProps = {
  width: "25px",
  height: "25px",
  onClick: () => {},
};

export default IconSearch;
