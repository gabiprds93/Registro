import React from 'react'

const InputFile = ({label, type, field, form}) => {
  const handleChange = () => {
    let fileName = document.getElementById('input-file').files[0].name;
    document.getElementById('info').innerHTML = fileName;
  }

  const handleClick = () => {
    form.setFieldValue('wichButton', 'uploadButton')
    form.handleSubmit()
  }
  
  return(
    <div className="form-label">
      {label}
      <div className="file-upload">
        <label className="form-input">
          <span id='info'>Seleccionar archivo</span>
          <input id='input-file' type={type} {...field} onChange={handleChange} />
        </label>
        <button className="background-green" type="button" onClick={handleClick} >Cargar</button>
      </div>
    </div>
  )
}

export default InputFile