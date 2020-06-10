import React from 'react'

const Input = ({label, type, field}) => {
  return(
    <label className="form-label">
      {label}
      {type === 'textarea' ? 
        <textarea className="form-input" {...field}></textarea>
        : <input className="form-input" type={type} {...field} />
      }
    </label>
  )
}

export default Input