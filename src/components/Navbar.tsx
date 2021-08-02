import {Link} from "react-router-dom";
import {Button, Nav, Navbar, Row, Col, Form, FormControl} from "react-bootstrap";
import {ArrowRight, Search} from "react-feather";

const NavBar = () =>{
  return (
    <div className='navbar1'>
      <Navbar expand="md">
      <Col xs={{span: 2,order: 3}} md={{span:4, order: 1}}>
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
        </Col>
  <Col xs={{order: 1}} md={{order: 2}} className="navlink1">
          <Link to={"/contact"}><h3 className='navlink-'><b>MURO</b>EXE</h3></Link>
        </Col>
  <Col xs={{ order: 2}} md={{order: 3}} className="searchbar">

          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search"/>
            <Button variant="outline-success"><Search/></Button>
          </Form>
        </Col>
      </Navbar>
    </div>
    );
  }
  export default NavBar;