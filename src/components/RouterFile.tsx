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
import Footer from "./Footer";
import Design_process from "./Footer-files/Design_process";
import Dress_your_project from "./Footer-files/Dress_your_project";
import Exchange_returns from "./Footer-files/Exchange_returns";
import Faq from "./Footer-files/Faq";
import Legal from "./Footer-files/Legal";
import Official_stores from "./Footer-files/Official_stores";
import Shopments from "./Footer-files/Shopments";
import Size_chart from "./Footer-files/Size_chart";
import Special_Line from "./Special_Line";
import Allitem from "./Allitem";
import Shoe1 from "./items/shoes/shoe_1/Shoe";
import Shoe2 from "./items/shoes/shoe_2/Shoe";
import Shoe3 from "./items/shoes/shoe_3/Shoe";
import Shoe4 from "./items/shoes/shoe_4/Shoe";
import Shoe5 from "./items/shoes/shoe_5/Shoe";
import Shoe6 from "./items/shoes/shoe_6/Shoe";

  const RouterFile = () =>{
    return (
      <Container fluid={true}>
        <Router>
          <Row>
            <Special_Line/>
            <Navbar/>
          <Switch> 
            <Route path="/shoe1">
              <Shoe1/>
            </Route>
            <Route path="/shoe2">
              <Shoe2/>
            </Route>
            <Route path="/shoe3">
              <Shoe3/>
            </Route>
            <Route path="/shoe4">
              <Shoe4/>
            </Route>
            <Route path="/shoe5">
              <Shoe5/>
            </Route>
            <Route path="/shoe6">
              <Shoe6/>
            </Route>
            <Route path="/specialline">
              <Allitem/>
            </Route>           
            <Route path="/designprocess">
              <Design_process/>
            </Route>
            <Route path="/dressyourproject">
              <Dress_your_project/>
            </Route>
            <Route path="/exchangereturns">
              <Exchange_returns/>
            </Route>
            <Route path="/faq">
              <Faq/>
            </Route>
            <Route path="/legal">
              <Legal/>
            </Route>
            <Route path="/officialstores">
              <Official_stores/>
            </Route>
            <Route path="/shopments">
              <Shopments/>
            </Route>
            <Route path="/sizechart">
              <Size_chart/>
            </Route>           
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
          <Footer/>
        </Row>
      </Router>
      </Container>
    );
  }
  export default RouterFile;