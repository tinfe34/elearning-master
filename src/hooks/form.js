import React, {useCallback, useState} from "react";
import set from 'lodash/set'

export const useFormHook = ({ initialForm = {}, schema}) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  //Validate
  const validate = () => {
    return new Promise ((resolve, reject) => {
      if (schema) {
        schema
          .validate(form, {abortEarly: false})
          .then(() => {
            setErrors({})

            resolve()
          })
          .catch(({inner})=>{
            //create new errors
            const e = {}
            if (Array.isArray(inner)) {
              inner.map((x)=> (e[x.path])  = x.message)
            }

            //set new errors
            setErrors(e)
            reject(e)
          })
      } else {
        resolve()
      }
    })
  }

  // Clear validate
  const reset = useCallback(() => {
    setErrors({})
  }, [])
  
  //Set field value
  const setFieldValue = useCallback((name, value) => {
    setForm((pre) => set({ ...pre }, name, value))
  }, [])

  //Set field error
  const setFieldError = useCallback((name, message) => {
    setErrors((pre) => set({ ...pre }, name, message))
  }, [])

  //On field change
  const onChange = (value, name) => {
    setForm((pre) => set({...pre}, name, value))
    setFieldError(name, null)
  }

  //On blur
  const onBlur = () => {}

  return {
    form,
    errors,
    setErrors,
    validate,
    reset,
    onChange,
    onBlur,
    setFieldError,
    setFieldValue
  }
}

export default useFormHook