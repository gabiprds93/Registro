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
      {({resetForm}) => (
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
          
          <div className="button-group">
            <button className="background-red" type="button" onClick={() => resetForm(initialValues)}>Cancelar</button>
            <button className="background-green" type="submit">Enviar</button>
          </div>
        </Form>
      )}
      </Formik>
    </div>
  )
}

const mapStateToProps = state => state 

const mapDispatchToProps = { fetchUserRegistry }

export default connect(mapStateToProps, mapDispatchToProps)(Registry)