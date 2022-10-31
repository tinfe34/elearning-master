import React, { useMemo, useRef } from "react";
import PropTypes from 'prop-types'

//helpers
import get from 'lodash/get'

//component
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const Input = ({
    phoneNumber,
    name,
    label,
    placeholder,
    type,
    value,
    errors,
    readOnly,
    textarea,
    rows,
    maxLength,
    counter,
    append,
    autoComplete,
    resize,
    bottomLeft,
    onChange,
    onBlur,
    ...props
}) => {
  const error = get(errors, name, null)

  const inputRef = useRef(null)
  
  const handleChange = (value) => {
    onChange(value, name)
  }

  return (
      <FormGroup className="x-input">
        {!!label && <FormLabel>{label}</FormLabel>}
        <div className="postion-relative">
          <FormControl
            ref={inputRef}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            readOnly={readOnly}
            rows={rows}
            autoComplete={autoComplete}
            isInvalid={!!error}
            plaintext={readOnly}
            as={textarea ? 'textarea' : 'input'}
            style={{ resize }}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={()=> onBlur(name)}
            {...props}
          />
            <div className="input-meta"> 
              <div className="input-bottom-left input-error">{error}</div>
            </div>
        </div>

      </FormGroup>
    )
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placerholder: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.object,
  readOnly: PropTypes.string,
  textarea: PropTypes.string,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  counter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  autoComplete: PropTypes.string,
  append: PropTypes.node,
  phoneNumber: PropTypes.bool,
  resize: PropTypes.string,
  bottomLeft: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

Input.defaultProps = {
  name: '',
  label: '',
  placerholder: '',
  value: '',
  errors: {},
  readOnly: '',
  textarea: '',
  rows: 3,
  maxLength: null,
  counter: false,
  autoComplete: 'off',
  append: null,
  phoneNumber: false,
  resize: 'none',
  bottomLeft: null,

  onChange: () => {},
  onBlur: () => {}
}

export default Input

