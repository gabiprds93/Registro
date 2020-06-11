import React from 'react'

const Input = ({label, type, field}) => {
  const handleChange = () => {
    let fileName = document.getElementById('input-file').files[0].name;
    document.getElementById('info').innerHTML = fileName;
  }
  
  return(
    <div className="form-label">
      {label}
      <div className="file-upload">
        <label className="form-input">
          <span id='info'>Seleccionar archivo</span>
          <input id='input-file' type={type} {...field} onChange={handleChange} />
        </label>
        <button className="background-green">Cargar</button>
      </div>
    </div>
  )
}

export default Input