import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import BaseRow from 'react-bootstrap/Row'

export const Row = ({ className, multiline, ...props}) => {
  
const classList = useMemo(() => {
  const classes = [className]

  if (multiline) {
    classes.push('is-multiline')
  }
  
  return classes.join(' ')
}, [className, multiline])

  return <BaseRow className={classList} {...props}/>
}

Row.propTypes = {
  className: PropTypes.string,
  multiline: PropTypes.bool
}

Row.defaultProps = {
  className: null,
  multiline: false,
}

export default Row