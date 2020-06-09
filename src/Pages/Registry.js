import React from 'react'
import { Formik, Form, Field } from 'formik'

import FormikInput from '../Components/ForminkInput'
import { entrepreneurDataConfig } from '../config/ConfigForm'

const Registry = () => {
  return(
    <Formik>
      <Form
        style={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}
      >
        {entrepreneurDataConfig.map((item, index) => {
          return (
            <Field key={index} type={item.type} name={item.name} label={item.label} component={FormikInput}/>
          )
        })}
      </Form>
    </Formik>
  )
}

export default Registry