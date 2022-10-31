import React, { useMemo } from "react";
import PropTypes from 'prop-types'
import get from 'lodash/get'
import BaseCol from 'react-bootstrap/Col'

export const Col = ({ className, ...props }) => {
    const classList = useMemo(() => {
      const classes = [className]
      const screens = [
        {
          screen: 'xs',
          narrow: get(props, 'xs.narrow'),
          vcenter: get(props, 'xs.vcenter')
        },
        {
          screen: 'sm',
          narrow: get(props, 'sm.narrow'),
          vcenter: get(props, 'sm.vcenter')
        },
        {
          screen: 'md',
          narrow: get(props, 'md.narrow'),
          vcenter: get(props, 'md.vcenter')
        },
        {
          screen: 'lg',
          narrow: get(props, 'lg.narrow'),
          vcenter: get(props, 'lg.vcenter')
        },
        {
          screen: 'xl',
          narrow: get(props, 'xl.narrow'),
          vcenter: get(props, 'xl.vcenter')
        }
      ]

      screens.map(({screen, narrow, vcenter}) => {
        const middle = screen === 'xs' ? '-' : '-' + screen +  '-'

        if (narrow) {
          classes.push('col' + middle + 'narrow')
        }

        if (vcenter) {
          classes.push('col' + middle + 'vcenter')
        }
      })
      
      return classes.join(' ')
    }, [className, props])

    return <BaseCol className={classList} {...props}></BaseCol>
}

Col.propTypes = {
 className: PropTypes.string,
 xs:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
 ]),
 sm:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
 ]),
 md:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
 ]),
 lg:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
 ]),
 xl:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
 ]),
}

Col.defaultProps = {
  className: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
}

export default Col