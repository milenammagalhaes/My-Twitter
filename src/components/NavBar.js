import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHashtag, faBell, faEnvelope, faBookmark, faListAlt, faUser, faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { Row, Container, Col } from 'react-bootstrap';

const NavBar = () => {

  return (
    <div>

    <div className="navbar">
      <FontAwesomeIcon icon={faTwitter} className="icon twitter" /> 
      
      <Container className="gridNavBar">
        <Col className="icon"> <FontAwesomeIcon icon={faHouse}/> </Col>
        <Col><i>Home</i></Col>
      </Container>
        
      <Container className="gridNavBar">
        <Col className="icon"> <FontAwesomeIcon icon={faHashtag}/> </Col>
        <Col><i>Explore</i></Col>
      </Container>
    
      <Container className="gridNavBar">
        <Col className="icon"> <FontAwesomeIcon icon={faBell}/> </Col>
        <Col><i>Notifications</i></Col>
      </Container>

      <Container className="gridNavBar">
        <Col className="icon" > <FontAwesomeIcon icon={faEnvelope}/> </Col>
        <Col> <i>Messages</i> </Col>
      </Container>

      <Container className="gridNavBar">
        <Col className="icon" > <FontAwesomeIcon icon={faBookmark}/> </Col>
        <Col> <i>Bookmarks</i> </Col>
      </Container>

      <Container className="gridNavBar">
        <Col className="icon" > <FontAwesomeIcon icon={faListAlt}/> </Col>
        <Col><i>Lists</i> </Col>
      </Container>

      <Container className="gridNavBar">
        <Col className="icon" > <FontAwesomeIcon icon={faUser}/> </Col>
        <Col> <i>Profile</i> </Col>
      </Container>

      <Container className="gridNavBar">
        <Col className="icon" > <FontAwesomeIcon icon={faEllipsisH}/> </Col>
        <Col>  <i>More</i> </Col>
      </Container>   

      <button className="tweetButton"> Tweet </button>
    </div>

      <button className="endButton">
        <Container className="userData">
          <Col xs={1}>  <img src="./user.jpg" alt="" style={{ width: '60px', height: '60px' }} className="userPhoto" />  </Col>
          <Col xs={5} className="userName"> <Row> <h5> mimi </h5> </Row> <Row> <h6> @mi_mmagalhaes </h6> </Row></Col>
          <Col xs={1}> <h4>...</h4></Col>
        </Container>
      </button>
      
    </div>

      
  )
}

export default NavBar