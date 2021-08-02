import {Link} from "react-router-dom";
import {Button, Nav, Navbar, Row, Col, Form, FormControl} from "react-bootstrap";

const NavBar = () =>{
  return (
    <Row className='navbar1'>
      <Navbar expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><p className='navlink'>Home</p></Nav.Link>
            <Nav.Link href="/men"><p className='navlink'>Men</p></Nav.Link>
            <Nav.Link href="/women"><p className='navlink'>Women</p></Nav.Link>
            <Nav.Link href="/blog"><p className='navlink'>Blog</p></Nav.Link>
            <Nav.Link href="/about"><p className='navlink'>About</p></Nav.Link>
            <Nav.Link href="/contact"><p className='navlink'>Contact</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Col md={4} xs={3} className='navlink1'>
          <Link to={"/contact"}><h3 className='navlink-'><b>MURO</b>EXE</h3></Link>
        </Col>
        <Col md={4} xs={3}>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search"/>
            <Button variant="outline-success">Buscar..</Button>
          </Form>
        </Col>
      </Navbar>
    </Row>
    );
  }
  export default NavBar;