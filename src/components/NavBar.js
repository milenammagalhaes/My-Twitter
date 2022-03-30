import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHashtag, faBell, faEnvelope, faBookmark, faListAlt, faUser, faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { Row, Container, Col } from 'react-bootstrap';

const NavBar = () => {

  return (
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
    </div>
  )
}

export default NavBar