import React from 'react'
import DatePicker from 'react-date-picker'

const InputDate = ({label, form, field}) => {

  React.useEffect(() => {
    if(!field.value){
      form.setFieldValue(field.name, new Date())
    }
  }, [])

  const handelChange = (value) => {
    form.setFieldValue(field.name, value)
  }

  return(
    <label className="form-label">
      {label}
      <DatePicker
        className="form-input"
        {...field}
        onChange={handelChange}
      />
    </label>
  )
}

export default InputDate