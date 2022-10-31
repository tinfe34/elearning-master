import React from "react";
import PropTypes from "prop-types";

export const IconUserLogin = ({ width, height, onClick, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none">
      <path
        fill="#000"
        fill-rule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

IconUserLogin.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};

IconUserLogin.defaultProps = {
  width: "27px",
  height: "27px",
  onClick: () => {},
};

export default IconUserLogin;
