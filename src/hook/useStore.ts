import {useReducer} from 'react'

import {Action, FromLanguage, Language, State} from '../types'
import {AUTO_LANGUAGE} from '../constants'

const initialState: State = {
  fromLanguage: AUTO_LANGUAGE,
  toLanguage: 'EN',
  fromText: '',
  resultText: '',
  loading: false,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INTERCHANGE_LANGUAGES':
      if (state.fromLanguage !== AUTO_LANGUAGE) {
        return {
          ...state,
          fromLanguage: state.toLanguage,
          toLanguage: state.fromLanguage,
        }
      }

      return state

    case 'SET_FROM_LANGUAGE':
      if (state.fromLanguage === action.payload) return state

      return {
        ...state,
        fromLanguage: action.payload,
        resultText: '',
        loading: state.fromText !== '',
      }

    case 'SET_TO_LANGUAGE':
      if (state.toLanguage === action.payload) return state

      return {
        ...state,
        toLanguage: action.payload,
        resultText: '',
        loading: state.fromText !== '',
      }

    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: state.fromText !== '',
        fromText: action.payload,
        resultText: '',
      }

    case 'SET_RESULT_TEXT':
      return {
        ...state,
        loading: false,
        resultText: action.payload,
      }

    default:
      return state
  }
}

export function useStore() {
  const [{fromLanguage, toLanguage, fromText, resultText, loading}, dispatch] = useReducer(
    reducer,
    initialState,
  )

  const interchangeLanguages = () => {
    dispatch({type: 'INTERCHANGE_LANGUAGES'})
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({type: 'SET_FROM_LANGUAGE', payload})
  }

  const setToLanguage = (payload: Language) => {
    dispatch({type: 'SET_TO_LANGUAGE', payload})
  }

  const setFromText = (payload: string) => {
    dispatch({type: 'SET_FROM_TEXT', payload})
  }

  const setResultText = (payload: string) => {
    dispatch({type: 'SET_RESULT_TEXT', payload})
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    resultText,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResultText,
  }
}
