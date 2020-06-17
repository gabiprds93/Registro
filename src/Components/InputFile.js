import React from 'react'

const InputFile = ({label, type, field}) => {
  const [files, setFiles] = React.useState([{name: 'Seleccionar archivo'}])
  
  const handleChange = (event) => {
    let inputFile = event.target.files
    let arrayFiles = []

    for(let i = 0; i < inputFile.length; i++){
      arrayFiles.push({name: inputFile[i].name})
    }
    if(inputFile.length) setFiles(arrayFiles)
  }
  
  return(
    <div className="form-label">
      {label}
      <div className="file-upload">
        <label>
          <div className="form-input">
            {files.map((item, index) => (
              <span key={index} id='info'>{item.name}</span>
            ))}
          </div>
          <input id='input-file' type={type} {...field} onChange={handleChange} multiple />
          <div className="btn background-green">Cargar</div>
        </label>
      </div>
    </div>
  )
}

export default InputFile