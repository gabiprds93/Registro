import React from 'react'

import Input from './Input'
import InputNumber from './InputNumber'
import InputFile from './InputFile'
import InputDate from './InputDate'

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
    case 'date':
      return <InputDate {...props} />
    default:
      return <Input type={type} {...props} />
  }
}

export default InputType