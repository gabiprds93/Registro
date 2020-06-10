import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'

import FormikInput from '../Components/ForminkInput'
import { entrepreneurDataConfig, accessDataConfig } from '../config/ConfigForm'
import { fetchUserRegistry } from '../redux/actions/userActions'

const Registry = ({fetchUserRegistry}) => {
  const submitForm = values => {
    fetchUserRegistry(values).then(data => {
      if(!data.errors){
        console.log('success')
      }
    })
  }
  
  const initialValues = {
    name: '',
    description: '',
    contactName: '',
    cellphone: '',
    urlFacebook: '',
    user: '',
    password: '',
    confirmPassword: '',
    addFiles: '',
    termns: false,
  }
  
  return(
    <div>
      <h1>Registro</h1>
      <h2>Ingresa los datos solicitados para formar parte de nuestros distribuidores.</h2>
      <Formik initialValues={initialValues} onSubmit={submitForm}>
        <Form
          style={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}
        >
          <h3>Datos del Emprendedor</h3>
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
          <h3>Datos de acceso</h3>
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
          <label>
            <Field
              type='checkbox'
              name='termns'
            />
            Autorizo y Acepto que la Municipalidad de La Molina me notifique los actos administrativos que pudiera emitir a consecuencia de la presente solicitud y/0 procedimiento administrativo al correo electrónico.
          </label>
          <div>
            <button>Cancelar</button>
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

const mapStateToProps = state => state 

const mapDispatchToProps = { fetchUserRegistry }

export default connect(mapStateToProps, mapDispatchToProps)(Registry)