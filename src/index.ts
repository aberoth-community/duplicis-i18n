/**
 * Portable `TranslationFunctions` mirror (Copied from typesafe-i18n).
 * @see https://www.npmjs.com/package/typesafe-i18n
 * @private
 */
export type TypedTranslationFunctions<T> = {
  [K in keyof T]: T[K] extends string
    ? (...args: any[]) => string
    : T[K] extends Record<any, any>
      ? TypedTranslationFunctions<T[K]>
      : never
}

export { typesafeI18nObject } from 'typesafe-i18n'

export * from './i18n/formatters'
export * from './i18n/i18n-svelte'
export * from './i18n/i18n-util'
export type * from './i18n/i18n-types'
