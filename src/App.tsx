import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Button, Col, Container, Row, Stack} from 'react-bootstrap'
import {useEffect} from 'react'

import {useStore} from './hook/useStore'
import {AUTO_LANGUAGE} from './constants'
import {ArrowsIcon} from './components/Icons'
import {LanguageSelector} from './components/LanguageSelector'
import {SectionType} from './types.d'
import {TextArea} from './components/TextArea'
import {deeplTranslate} from './services/translate'

function App() {
  const {
    loading,
    fromLanguage,
    toLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResultText,
    fromText,
    resultText,
  } = useStore()

  useEffect(() => {
    if (fromText === '') return

    deeplTranslate({fromLanguage, toLanguage, text: fromText})
      .then((result) => {
        if (result == null) return
        setResultText(result)
      })
      .catch(() => {
        setResultText('Error')
      })
  }, [fromText, fromLanguage, toLanguage])

  return (
    <Container fluid>
      <h1 className="text-center">Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs="auto">
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            variant="link"
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={resultText}
              onChange={setResultText}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
