import React from "react";
import PropTypes from 'prop-types'

export const Heading = ({
  paddingTop,
  paddingBottom,
  size,
  bold,
  color,
  children,
  ...props
}) => {
  return <div
    style={{
      paddingTop,
      paddingBottom,
      fontSize: size,
      fontWeight: bold ? 'bold' : 'normal',
      color,
    }}
    {...props}
  >
    {children}
  </div>
}

Heading.propTypes = {
  paddingTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  bold: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node
}
Heading.defaultProps = {
  paddingTop: '30px',
  paddingBottom: '15px',
  size: '30px',
  bold: true,
  color: '#1A1A1A',
  children: null,
}

export default Heading