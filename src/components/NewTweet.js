import './NewTweet.css'
import { Row, Container, Col } from 'react-bootstrap';


const NewTweet = () => {
  return (
    <div>
      <h1 className="home"> Home </h1>
      <Container className="grid">
        <Col xs={2}>
          <img src="./user.jpg" alt="" style={{ width: '60px', height: '60px'}} className="userPhoto"/>
        </Col>
        <Col xs={9}>
          <Row>
            <input className="tweetBox"
              type="text" 
              placeholder="What`s happening?">
            </input>
          </Row>
        </Col>
      </Container>
    </div>
  )
}

export default NewTweet