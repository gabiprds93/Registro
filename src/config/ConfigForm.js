export const entrepreneurDataConfig = [
  { label: 'Nombre de la tienda o persona', type: 'text', name: 'nombre' },
  { label: 'Descripción de la tienda o persona', type: 'textarea', name: 'descripcion' },
  { label: 'Nombre de contacto', type: 'text', name: 'nombree' },
  { label: 'DNI', type: 'number', name: 'dni', regularExp: '^[0-9]{0,8}$' },
  { label: 'Correo', type: 'email', name: 'correo' },
  { label: 'Fecha de Nacimiento', type: 'date', name: 'fechanac' },
  { label: 'Celular de contacto', type: 'number', name: 'celular', regularExp: '^[0-9]{0,9}$' },
  { label: 'URL Facebook', type: 'text', name: 'url' },
]

export const accessDataConfig = [
  { label: 'Usuario', type: 'text', name: 'username' },
  { label: 'Contraseña', type: 'password', name: 'clave' },
  { label: 'Confirmar contraseña', type: 'password', name: 'confirmPassword' },
  { label: 'Agregar archivos', type: 'file', name: 'addFiles' },
]

export const loginDataConfig = [
  { label: 'Usuario', type: 'text', name: 'username' },
  { label: 'Contraseña', type: 'password', name: 'clave' },
]