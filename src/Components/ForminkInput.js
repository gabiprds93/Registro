import React from 'react'

import InputType from './InputType'

export const FormikInput = ({ sizes, styles, ...props }) => {
  return (
    <div>
      <InputType {...props} />
    </div>
  )
}

export default FormikInput
