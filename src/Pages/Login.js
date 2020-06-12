import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'

import FormikInput from '../Components/ForminkInput'
import { loginDataConfig } from '../config/ConfigForm'
import { fetchUserLogin } from '../redux/actions/userActions'

const Login = ({ fetchUserLogin }) => {
  const submitForm = (values, actions) => {
    let formElement = document.getElementById("formLogin")
    let formData = new FormData(formElement)
      
    fetchUserLogin(formData).then((data)=>{
      if(data.response && data.response['0']){
        actions.setErrors({
          general: data.response[0].COD_MENSAJE,
        })
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

      <Formik 
        initialValues={initialValues} 
        onSubmit={(values, actions) => {
          submitForm(values, actions)
        }}
      >
      {({ errors }) => (
        <Form className="form" id="formLogin">
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

          {errors.general && (
            <p className="message">{errors.general}</p>
          )}

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