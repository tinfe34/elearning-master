import React from "react";
import PropTypes from "prop-types";
import { useMemo } from "react";

export const Text = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

//Props
Text.propTypes = {};

Text.defaultProps = {};

export default Text;
