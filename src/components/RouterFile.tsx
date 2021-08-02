import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { Row, Container } from 'react-bootstrap';
  import About from "./About";
  import Men from './Men';
  import Women from './Women';
  import Blog from './Blog';
  import Contact from './Contact';
  import Home from './Home'
import NavBar from "./Navbar";
import Footer from "./Footer";
import Special_Line from "./Special_Line";
import Allitem from "./Allitem";
import Shoe1 from "./items/shoes/shoe_1/Shoe";
import Shoe2 from "./items/shoes/shoe_2/Shoe";
import Shoe3 from "./items/shoes/shoe_3/Shoe";
import Shoe4 from "./items/shoes/shoe_4/Shoe";
import Shoe5 from "./items/shoes/shoe_5/Shoe";
import Shoe6 from "./items/shoes/shoe_6/Shoe";
import Design_process from "./Design_process";
import Dress_your_project from "./Dress_your_project";
import Exchange_returns from "./Exchange_returns";
import Faq from "./Faq";
import Legal from "./Legal";
import Official_stores from "./Official_stores";
import Shopments from "./Shopments";
import Size_chart from "./Size_chart";

  const RouterFile = () =>{
    return (
      <Container fluid={true} className='shoe-pa'>
      <Router>
        <Row className='shoe-pa'>
            <Special_Line/>
            <NavBar/>
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
            <Route path="/specialline">
              <Allitem/>
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