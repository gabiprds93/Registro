import React from 'react'

const InputNumber = ({label, form, field, regularExp}) => {
  const handleChangeInput = (evento) => {
    const { name, value } = evento.target;
    let regex = new RegExp(regularExp);

    if (regex.test(value)) {
      form.setFieldValue(name, value)
    }
  }

  return(
    <label className="form-label">
      {label}
      <input className="form-input" type='text' {...field} onChange={handleChangeInput}  />
    </label>
  )
}

export default InputNumber