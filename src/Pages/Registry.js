import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'

import FormikInput from '../Components/ForminkInput'
import { entrepreneurDataConfig, accessDataConfig } from '../config/ConfigForm'
import { fetchUserRegistry } from '../redux/actions/userActions'
import { fetchFileUpload } from '../redux/actions/fileActions'

const Registry = ({registryResponse, fetchUserRegistry, fetchFileUpload}) => {
  const submitForm = values => {
    if(values.wichButton === 'uploadButton'){
      let formData = new FormData();
      let fileField = document.querySelector("input[type='file']");
  
      formData.append('file', fileField.files[0]);
      fetchFileUpload(formData).then(data => {
          console.log('success')
      })
    }
    else{
      fetchUserRegistry(values).then(data => {
        if(!data.errors){
          console.log('success')
        }
      })
    }
  }
  
  const initialValues = {
    // idusuario: '',
    // dni: '99999999',
    // nombre: '',
    // descripcion: '',
    // nombree: '',
    // celular: '',
    // correo: 'email@correo.com',
    // url: '',
    // username: '',
    // clave: '',
    // mov_usu: 'N'
    wichButton: '',
    idusuario:'',
    username:'gaby123',
    clave:'clave',
    // ---------------------------
    dni:'dni',
    nombre:'nombre',
    paterno:'paterno',
    materno:'materno',
    celular:'celular',
    correo:'correo',
    descripcion:'descripcion',
    nombree:'nombree',
    url:'url',
    // -----------------------------  
    mov_usu:'N'
  }
  
  return(
    <div>
      <div className="header">
        <h2 className="title">Registro</h2>
        <h3 className="subtitle">Ingresa los datos solicitados para formar parte de nuestros distribuidores.</h3>
      </div>

      <Formik initialValues={initialValues} onSubmit={submitForm}>
      {({resetForm, handleSubmit, setFieldValue}) => (
        <Form className="form">
          <h3 className="section-text">Datos del Emprendedor</h3>
          {entrepreneurDataConfig.map((item, index) => {
            return (
              <Field 
                key={index} 
                type={item.type} 
                name={item.name} 
                label={item.label} 
                component={FormikInput} 
              />
            )
          })}

          <h3 className="section-text">Datos de acceso</h3>
          {accessDataConfig.map((item, index) => {
            return (
              <Field 
                key={index} 
                type={item.type} 
                name={item.name} 
                label={item.label} 
                component={FormikInput} 
              />
            )
          })}

          <span className="form-label">
            <Field
              type='checkbox'
              name='termns'
            />
            Autorizo y Acepto que la Municipalidad de La Molina me notifique los actos administrativos que pudiera emitir a consecuencia de la presente solicitud y/0 procedimiento administrativo al correo electrónico.
          </span>

          {registryResponse && registryResponse.COD_MENSAJE && (
            <p>{registryResponse.COD_MENSAJE}</p>
          )}
          
          <div className="button-group">
            <button className="background-red" type="button" onClick={() => resetForm(initialValues)}>Cancelar</button>
            <button className="background-green" type="button" onClick={() => {setFieldValue('wichButton', 'sendButton')
              handleSubmit()}}>Enviar</button>
          </div>
        </Form>
      )}
      </Formik>
    </div>
  )
}

const mapStateToProps = state => ({
  registryResponse: state.user.registryResponse
})

const mapDispatchToProps = { fetchUserRegistry, fetchFileUpload }

export default connect(mapStateToProps, mapDispatchToProps)(Registry)