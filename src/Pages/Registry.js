import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'

import FormikInput from '../Components/ForminkInput'
import { entrepreneurDataConfig, accessDataConfig } from '../config/ConfigForm'
import { fetchUserRegistry } from '../redux/actions/userActions'
import { fetchFileUpload } from '../redux/actions/fileActions'
import { validateRegistry } from '../config/validation'
import { initialValuesRegistry } from '../config/initialValues'

const Registry = ({fetchUserRegistry, fetchFileUpload, history}) => {
  const submitForm = () => {
    let formElement = document.getElementById("formElement")
    let formData = new FormData(formElement)
    let formDataFile = new FormData();
    let fileField = document.querySelector("input[type='file']");

    formDataFile.append('file', fileField.files[0]);
    fetchFileUpload(formDataFile)

    formData.append('idusuario', '')
    formData.append('mov_usu', 'N')
    formData.delete('confirmPassword')
    formData.delete('addFiles')
    formData.delete('day')
    formData.delete('month')
    formData.delete('year')
    fetchUserRegistry(formData).then(() => {
      history.push('/login')
    })
  }
  
  return(
    <div>
      <div className="header">
        <h2 className="title">Registro</h2>
        <h3 className="subtitle">Ingresa los datos solicitados para formar parte de nuestros distribuidores.</h3>
      </div>

      <Formik initialValues={initialValuesRegistry} onSubmit={submitForm} validate={validateRegistry}>
      {({resetForm, isValid, dirty}) => (
        <Form className="form" id="formElement">
          <h3 className="section-text">Datos del Emprendedor</h3>
          {entrepreneurDataConfig.map((item, index) => {
            return (
              <Field 
                key={index} 
                type={item.type} 
                name={item.name} 
                label={item.label} 
                {...item}
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
          
          <div className="button-group">
            <button 
              className="btn background-red" 
              type="button" 
              onClick={() => resetForm(initialValuesRegistry)}>Cancelar</button>
            <button 
              className="btn background-green" 
              disabled={!dirty || !isValid}
              type="submit"
            >
              Enviar
            </button>
          </div>
        </Form>
      )}
      </Formik>
    </div>
  )
}

const mapStateToProps = state => state

const mapDispatchToProps = { fetchUserRegistry, fetchFileUpload }

export default connect(mapStateToProps, mapDispatchToProps)(Registry)