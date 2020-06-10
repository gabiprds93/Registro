import React from 'react'

import Input from './Input'
import Phone from './Phone'

const InputType = ({
  type,
  options = [],
  field,
  ...props
}) => {
  switch (type) {
    case 'phone':
      return <Phone {...props} {...field} />
    default:
      return <Input type={type} {...props} />
  }
}

export default InputType