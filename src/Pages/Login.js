import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'

import FormikInput from '../Components/ForminkInput'
import { loginDataConfig } from '../config/ConfigForm'
import { fetchUserLogin } from '../redux/actions/userActions'

const Login = ({ fetchUserLogin }) => {
  const submitForm = values => {
    fetchUserLogin(values).then(data => {
      if(!data.errors){
        console.log('success')
      }
    })
  }

  const initialValues = {
    username: '',
    clave: ''
  }
  
  return(
    <div>
      <div className="header">
        <h2 className="title">Mi cuenta</h2>
        <h3 className="subtitle">Ingresa con tu cuenta para hacer uso de la Plataforma Digital MoliEmprendedor.</h3>
      </div>

      <Formik initialValues={initialValues} onSubmit={submitForm}>
      {() => (
        <Form className="form">
          {loginDataConfig.map((item, index) => {
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

          <div className="button-group">
            <button className="background-green" type="submit">Ingresar</button>
          </div>
        </Form>
      )}
      </Formik>
    </div>
  )
}

const mapStateToProps = state => state 

const mapDispatchToProps = {fetchUserLogin }

export default connect(mapStateToProps, mapDispatchToProps)(Login)