import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Button, Col, Container, Form, Row, Stack} from 'react-bootstrap'

import {useStore} from './hook/useStore'
import {AUTO_LANGUAGE} from './constants'
import {ArrowsIcon} from './components/Icons'
import {LanguageSelector} from './components/LanguageSelector'
import {SectionType} from './types.d'

function App() {
  const {fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage} =
    useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <Form.Control
              autoFocus
              as="textarea"
              placeholder="Introducir Texto"
              style={{height: '150px'}}
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
            <Form.Control as="textarea" placeholder="Traducción" style={{height: '150px'}} />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
