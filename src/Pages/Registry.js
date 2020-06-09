import React from 'react'
import { Formik, Form, Field } from 'formik'

import FormikInput from '../Components/ForminkInput'


const Registry = () => {
  return(
    <Formik>
      <Form
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <Field type="text" name="name" label="Nombre de la tienda o persona" component={FormikInput}/>
      </Form>
    </Formik>
  )
}

export default Registry