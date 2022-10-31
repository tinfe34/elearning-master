import React, { useMemo } from "react"
import PropTypes from 'prop-types'
import BaseButton from 'react-bootstrap/Button'

//use
import { useDesktop, useTablet } from '../../hooks/media'

export const Button = ({
  className,
  loading,
  width,
  children,
  ...props
}) => {

  const classList = useMemo(() => {
    const classes = [className, 'x-button', 'btn']
    return classes.join(' ')
  }, [className])


  return (
    <button
      className={classList}
      {...props}
    >
      {children}
    </button>
  )
}
Button.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.any,
}

Button.defaultProps = {
  className: null,
  loading: false,
  width: null,
  children: null
}
export default Button