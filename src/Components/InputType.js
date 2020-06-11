import React from 'react'

import Input from './Input'
import Phone from './Phone'
import InputFile from './InputFile'

const InputType = ({
  type,
  options = [],
  ...props
}) => {
  switch (type) {
    case 'phone':
      return <Phone {...props} />
    case 'file':
      return <InputFile type={type} {...props} />
    default:
      return <Input type={type} {...props} />
  }
}

export default InputType