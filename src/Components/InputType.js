import React from 'react'

import Input from './Input'
import Phone from './Phone'

const InputType = ({
  type,
  options = [],
  ...props
}) => {
  switch (type) {
    case 'phone':
      return <Phone {...props} />
    default:
      return <Input type={type} {...props} />
  }
}

export default InputType