import React from "react";
import PropTypes from "prop-types";

export const IconGoogle = ({ width, height, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 128 128"
      width={width}
      height={height}
    >
      <circle cx="64" cy="64" r="64" fill="#dd4b39" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M49 61v8h14c-.54 3.46-3.68 10-13 10a15 15 0 1 1 0-30 12.32 12.32 0 0 1 9 4l6.32-6.39C61.22 42.78 56.36 40 50 40a24 24 0 1 0 0 48c13.59 0 22-9.55 22-23a26.34 26.34 0 0 0 0-4ZM102 61h-8v-8h-8v8h-8v8h8v8h8v-8h8v-8z"
      />
    </svg>
  );
};

IconGoogle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};

IconGoogle.defaultProps = {
  width: "30px",
  height: "30px",
  onClick: () => {},
};

export default IconGoogle;
