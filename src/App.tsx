import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Button, Col, Container, Row} from 'react-bootstrap'

import {useStore} from './hook/useStore'
import {AUTO_LANGUAGE} from './constants'
import {ArrowsIcon} from './components/Icons'

function App() {
  const {fromLanguage, toLanguage, interchangeLanguages} = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>

        <Col>
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            variant="link"
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
