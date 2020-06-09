import React from 'react'

import Input from './Input'
// import { Phone } from './Phone'
// import { Checkbox } from './Checkbox'


const InputType = ({
  type,
  options = [],
  ...props
}) => {
  switch (type) {
    default:
      return <Input type={type} {...props} />
  }
}

export default InputType