import React from 'react'

const Phone = ({label, form, field}) => {
  const handleChangeInput = (evento) => {
    const { name, value } = evento.target;
    let regex = new RegExp("^[0-9]{0,9}$");

    if (regex.test(value)) {
      form.setFieldValue(name, value)
    }
  }

  return(
    <label style={{display: "flex", flexDirection: "column"}}>
      {label}
      <input type='text' {...field} onChange={handleChangeInput}  />
    </label>
  )
}

export default Phone