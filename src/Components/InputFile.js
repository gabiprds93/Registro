import React from 'react'

const InputFile = ({label, type, field}) => {
  const handleChange = () => {
    let fileName = document.getElementById('input-file').files[0].name;
    document.getElementById('info').innerHTML = fileName;
  }
  
  return(
    <div className="form-label">
      {label}
      <div className="file-upload">
        <label>
          <div className="form-input">
            <span id='info'>Seleccionar archivo</span>
          </div>
          <input id='input-file' type={type} {...field} onChange={handleChange} />
          <div className="btn background-green">Cargar</div>
        </label>
      </div>
    </div>
  )
}

export default InputFile