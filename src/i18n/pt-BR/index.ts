import type { BaseTranslation } from '../i18n-types'

const ptBR = {
  error: {
    plugin_skip: 'Plugin "{plugin:string}" ignorado!',
    plugin_invalid: 'Recusando-se a registrar o plugin inválido "{name:string}"! ({reason:string})',
    database: 'Falha no banco de dados "{message:string}"!',
  },
  status: {
    load_patch: 'Carregando patch "{name:string}" para "{plugin:string}"',
    load_profile: 'Carregando perfil "{profile:string}"',
    load_plugin: 'Carregando plugin "{plugin:string}"',
    initialized: 'Alvos de patch inicializados...',
    connected: 'Conectado!',
    results: 'Plugins carregados {total:number}/{found:number} em {time:number}',
    exit: 'Saindo...',
  },
  auth: {
    login: 'entrar',
    logout: 'sair',
    rememeber_me: 'lembrar-me',
    lost_password: 'esqueci a senha',
    secure: 'proteger',
    unsecure: 'desproteger',
    username: 'nome de usuário',
    password: 'senha',
  },
  settings: {
    options: 'Opções',
    profiles: 'Perfis',
    marketplace: 'Mercado',
    results: 'plugins carregados {total:number}/{found:number} em ≈{time:string}s',
  },
  word: {
    name: 'nome',
    author: 'autor',
    contributors: 'contribuidores',
    homepage: 'site',
    license: 'licença',
    version: 'versão',
    warning: 'aviso',
    error: 'erro',
    info: 'info',
  },
} satisfies BaseTranslation

export default ptBR
