import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link as BaseLink } from 'react-router-dom'
import { generatePath } from "react-router-dom";

export const Link = ({
    path,
    params,
    query,
    children,
    underline,
    style,
    ...props
}) => {
  const to = useMemo(()=> {
    try {
      const url = generatePath(path, params)
      const searchParams = new URLSearchParams('')

      Object.keys(query).map((key)=> {
        searchParams.append(key, query[key])
      })

      if(searchParams.toString()){
        return url + '?' + searchParams.toString()
      }

      return url
    } catch (error) {
      return path
    }
  },[params, path, query])

  return (
    <BaseLink
      to={to}
      style={{
        textDecoration: underline ? 'underline' : 'none',
        ...style
      }}
      {...props}
    >
      {children}
    </BaseLink>
  )
}

 Link.propTypes = {
  style: PropTypes.object,
  underline: PropTypes.bool,
  path: PropTypes.string,
  params: PropTypes.object,
  query: PropTypes.object,
  children: PropTypes.object,
 }

 Link.defaultProps = {
  style: {},
  underline: false,
  path: '',
  params: {},
  query: {},
  children: null,
 }
export default Link