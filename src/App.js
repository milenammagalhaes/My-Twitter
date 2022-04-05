import './App.css';
import NavBar from './components/NavBar'
import NewTweet from './components/NewTweet';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const App = () => {

  return (
    <Container className="layout">
      <Col xs={4} className="leftSide"> <NavBar /> </Col>
      <Col xs={10} className="middleSide">
        <NewTweet />
      </Col>
      {/* <Col className="rightSide"> Trends </Col> */}
    </Container>
  )

}

export default App;