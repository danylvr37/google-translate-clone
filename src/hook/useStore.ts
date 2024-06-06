import {useReducer} from 'react'

import {Action, FromLanguage, type State} from '../types'
import {AUTO_LANGUAGE} from '../constants'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  resultText: '',
  loading: false,
}

function reducer(state: State, action: Action): State {
  const {type} = action

  switch (type) {
    case 'INTERCHANGE_LANGUAGES':
      if (state.fromLanguage !== AUTO_LANGUAGE) {
        return {
          ...state,
          fromLanguage: state.toLanguage,
          toLanguage: state.fromLanguage,
        }
      } else return state

      break

    case 'SET_FROM_LANGUAGE':
      return {
        ...state,
        fromLanguage: action.payload,
      }
      break

    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        toLanguage: action.payload,
      }
      break

    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        resultText: '',
      }
      break

    case 'SET_RESULT_TEXT':
      return {
        ...state,
        loading: false,
        resultText: action.payload,
      }
      break

    default:
      return state
      break
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

  const setToLanguage = (payload: FromLanguage) => {
    dispatch({type: 'SET_TO_LANGUAGE', payload})
  }

  const setFromText = (payload: FromLanguage) => {
    dispatch({type: 'SET_FROM_TEXT', payload})
  }

  const setResultText = (payload: FromLanguage) => {
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
