import type { BaseTranslation } from '../i18n-types'

const es = {
  error: {
    plugin_skip: 'Complemento omitido "{plugin:string}"!',
    plugin_invalid:
      'Negándose a registrar un complemento no válido "{name:string}"! ({reason:string})',
    database: '¡Falla de la base de datos "{message:string}"!',
  },
  status: {
    load_patch: 'Cargando parche "{name:string}" para "{plugin:string}"',
    load_profile: 'Cargando perfil "{profile:string}"',
    load_plugin: 'Cargando plugin "{plugin:string}"',
    initialized: 'Objetivos de parche inicializados...',
    connected: '¡Conectado!',
    exit: 'Saliendo...',
  },
  auth: {
    login: 'entrar',
    logout: 'cerrar sesión',
    rememeber_me: 'recordarme',
    lost_password: 'contraseña olvidada',
    secure: 'asegurar',
    unsecure: 'desasegurar',
    username: 'nombre de usuario',
    password: 'contraseña',
  },
  settings: {
    options: 'Opciones',
    profiles: 'Perfiles',
    marketplace: 'Mercado',
    results: 'complementos cargados {total:number}/{found:number} en ≈{time:string}s',
  },
  word: {
    name: 'nombre',
    author: 'autor',
    contributors: 'colaboradores',
    homepage: 'sitio web',
    license: 'licencia',
    version: 'versión',
    warning: 'aviso',
    error: 'error',
    info: 'info',
  },
} satisfies BaseTranslation

export default es
