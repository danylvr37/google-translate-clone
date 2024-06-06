import Form from 'react-bootstrap/Form'

import {AUTO_LANGUAGE, SUPORTED_LANGUAGES} from '../constants'
import {type FromLanguage, type Language, SectionType} from '../types.d'

export const LanguageSelector = ({onChange, type, value}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label="Selecciona el idioma" value={value} onChange={handleChange}>
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar Idioma</option>}
      {Object.entries(SUPORTED_LANGUAGES).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </Form.Select>
  )
}

type Props =
  | {type: SectionType.From; value: FromLanguage; onChange: (language: Language) => void}
  | {type: SectionType.To; value: Language; onChange: (language: Language) => void}
