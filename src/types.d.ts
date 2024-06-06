import {type AUTO_LANGUAGE, type SUPORTED_LANGUAGES} from './constants'

export type Language = keyof typeof SUPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: string
  toLanguage: string
  fromText: string
  resultText: string
  loading: boolean
}

export type Action =
  | {type: 'INTERCHANGE_LANGUAGES'}
  | {type: 'SET_FROM_LANGUAGE'; payload: string}
  | {type: 'SET_TO_LANGUAGE'; payload: string}
  | {type: 'SET_FROM_TEXT'; payload: string}
  | {type: 'SET_RESULT_TEXT'; payload: string}
