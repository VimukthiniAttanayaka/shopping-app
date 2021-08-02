import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { Row, Container } from 'react-bootstrap';
  import About from "./Navbar-files/About";
  import Men from './Navbar-files/Men';
  import Women from './Navbar-files/Women';
  import Blog from './Navbar-files/Blog';
  import Contact from './Navbar-files/Contact';
  import Home from './Home'
import Navbar from "./Navbar";

  const RouterFile = () =>{
    return (
      <Container fluid={true}>
      <Router>
        <Row>
            <Navbar/>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/men">
              <Men />
            </Route>
            <Route path="/women">
              <Women />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Row>
      </Router>
      </Container>
    );
  }
  export default RouterFile;