import React from 'react'
import { Formik, Form, Field } from 'formik'

import FormikInput from '../Components/ForminkInput'
import { entrepreneurDataConfig, accessDataConfig } from '../config/ConfigForm'

const Registry = () => {
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
      <Formik initialValues={initialValues}>
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
            <button>Enviar</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Registry