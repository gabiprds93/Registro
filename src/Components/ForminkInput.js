import React from 'react'
import { ErrorMessage } from 'formik'

import InputType from './InputType'

export const FormikInput = ({ sizes, styles, ...props }) => {
  return (
    <div style={{marginBottom: '30px'}}>
      <InputType {...props} />
      <ErrorMessage name={props.field.name}>
        {(msg) => (
          <span className="message">{msg}</span>
        )}
      </ErrorMessage>
    </div>
  )
}

export default FormikInput
