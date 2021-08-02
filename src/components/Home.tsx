import { Container, Row } from "react-bootstrap"
import Before_footer from "./Before_footer"
import Item from "./Item"
import Welcome from "./Welcome";


const Home = () => {
  return (
    <Container fluid={true} className='home'>
    <Row className="App">
      <Welcome/>
      <Item/>
      <Before_footer/>
    </Row>
    </Container>
  );
}

export default Home;