import React from "react";
import PropTypes from 'prop-types'

import BaseSpace from 'antd/lib/space'

export const Space = ({children, ...props}) => {
  return <BaseSpace {...props}>
    {children}
  </BaseSpace>
}

Space.propTypes = {
  children:  PropTypes.node
}
Space.defaultProps = {
  children: null
}
export default Space