import type { BaseTranslation } from '../i18n-types'

const en = {
  error: {
    plugin_skip: 'Skipped plugin "{plugin:string}"!',
    plugin_invalid: 'Refusing to register invalid plugin "{name:string}"! ({reason:string})',
    database: 'Database failure "{message:string}"!',
  },
  status: {
    load_patch: 'Loading code patch "{name:string}" for "{plugin:string}"',
    load_profile: 'Loading config profile "{profile:string}"...',
    load_plugin: 'Loading plugin "{plugin:string}"',
    initialized: 'Patch targets initialized...',
    connected: 'Connected!',
    exit: 'Exiting...',
  },
  auth: {
    login: 'login',
    logout: 'logout',
    rememeber_me: 'rememeber me',
    lost_password: 'lost password',
    secure: 'secure',
    unsecure: 'unsecure',
    username: 'username',
    password: 'password',
  },
  settings: {
    options: 'Options',
    profiles: 'Profiles',
    marketplace: 'Marketplace',
    results: 'plugins loaded {total:number}/{found:number} in ≈{time:string}s',
  },
  word: {
    name: 'name',
    author: 'author',
    contributors: 'contributors',
    homepage: 'webpage',
    license: 'license',
    version: 'version',
    warning: 'warning',
    error: 'error',
    info: 'info',
  },
} satisfies BaseTranslation

export default en
