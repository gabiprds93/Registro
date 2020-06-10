import React from 'react'

const Input = ({label, type, field}) => {
  return(
    <label style={{display: "flex", flexDirection: "column"}}>
      {label}
      {type === 'textarea' ? 
        <textarea style={{resize: 'none'}} {...field}></textarea>
        : <input type={type} {...field} />
      }
    </label>
  )
}

export default Input