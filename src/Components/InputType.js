import React from 'react'

import Input from './Input'
import InputNumber from './InputNumber'
import InputFile from './InputFile'

const InputType = ({
  type,
  options = [],
  ...props
}) => {
  switch (type) {
    case 'number':
      return <InputNumber {...props} />
    case 'file':
      return <InputFile type={type} {...props} />
    default:
      return <Input type={type} {...props} />
  }
}

export default InputType