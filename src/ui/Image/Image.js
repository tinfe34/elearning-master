import React, { useState } from "react";
import PropTypes from "prop-types";
import noImage from "../../assets/img/no-image.jpg";

export const Image = ({ src, alt, children, ...props }) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(noImage);
  };

  return (
    <img src={fallback || src} alt={alt} {...props} onError={handleError} />
  );
};

export default Image;
