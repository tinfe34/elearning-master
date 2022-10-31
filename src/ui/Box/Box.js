

import React from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

export const Box = ({
  backgroundColor,
  shadow,
  round,
  children,
  style,
  ...props
}) => {
  
  const classList = useMemo(() => {
    const classes = ['x-box']

    if (round) {
      classes.push('round')
    }

    if(shadow) {
      classes.push('shadow')
    }

    return classes.join(' ')
  }, [round, shadow])

    return (
      <div className={classList} style={{...style}} {...props}>
        {children}
      </div>
    )
}

//Props
Box.propTypes = {
  shadow: PropTypes.bool,
  round: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
}

Box.defaultProps = {
  shadow: false,
  round: true,
  children: null,
  style: {},
}

export default Box;