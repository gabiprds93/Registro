export const validateRegistry = values => {
  const errors = {}

  if (!values.nombre) {
    errors.nombre = 'Requerido';
  }

  if (!values.descripcion) {
    errors.descripcion = 'Requerido';
  }

  if (!values.correo) {
    errors.correo = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Correo inválido'
  }

  if (!values.celular) {
    errors.celular = 'Requerido';
  }

  if (!values.username) {
    errors.username = 'Requerido';
  }

  if (!values.clave) {
    errors.clave = 'Requerido';
  }

  return errors
}

export const validateLogin = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Requerido';
  }

  if (!values.clave) {
    errors.clave = 'Requerido';
  }

  return errors
}