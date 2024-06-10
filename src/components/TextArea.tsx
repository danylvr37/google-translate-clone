import {Form} from 'react-bootstrap'

import {SectionType} from '../types.d'

const commonStyles = {border: 0, height: '200px', resize: 'none'}

const getPlaceHolder = ({type, loading}: {type: SectionType; loading?: boolean}) => {
  let placeholder = 'Traducción'

  if (type === SectionType.From) placeholder = 'Introducir Texto'
  if (loading === true) placeholder = 'Cargando'

  return placeholder
}

export const TextArea = ({loading, type, value, onChange}: Props) => {
  const styles =
    type === SectionType.From ? commonStyles : {...commonStyles, backgroundColor: '#f5f5f5'}

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as="textarea"
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.To}
      placeholder={getPlaceHolder({type, loading})}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}

interface Props {
  loading?: undefined
  type: SectionType
  value: string
  onChange: (language: string) => void
}
