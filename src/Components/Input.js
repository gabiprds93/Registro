import React from 'react'

const Input = ({label, type, field}) => {
  return(
    <div>
      <label>{label}</label>
      <input type={type} {...field} />
    </div>
  )
}

export default Input