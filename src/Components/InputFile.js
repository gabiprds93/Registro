import React from 'react'

const InputFile = ({label, type, field}) => {
  const [info, setInfo] = React.useState('Seleccionar archivo')
  const handleChange = (event) => {
    let file = event.target.files;
    if(file.length){
      setInfo(file[0].name)
    }
  }
  
  return(
    <div className="form-label">
      {label}
      <div className="file-upload">
        <label>
          <div className="form-input">
            <span id='info'>{info}</span>
          </div>
          <input id='input-file' type={type} {...field} onChange={handleChange} />
          <div className="btn background-green">Cargar</div>
        </label>
      </div>
    </div>
  )
}

export default InputFile