import React from "react";
import {ArrowRight} from "react-feather";
import {Col, Container, Row, Form,Button,Image} from "react-bootstrap";
import social_1 from '../styles/footer_image_1.png';
import social_2 from '../styles/footer_image_2.png';
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
  const handleOnSubmit = () => {    
}
  return (
    <div className="footer-dark">
      <footer>
        <Container className="container">
          <Row className="row">
            <Col xs={12} md={6} lg={6}className="item text">
              <h2>We are unisex, we are vegans, <br/>We are #dothefuture</h2>
                <Col>
                  <Form onSubmit={handleOnSubmit}>
                    <Row className='footer_email'>
                    <Col xs={10} md={10} lg={10}>
                      <Form.Control type="text" id="name" placeholder="Email address" />
                    </Col>
                    <Col xs={2} md={2} lg={2}>
                      <Button type="submit" className="create-btn"><ArrowRight/></Button>
                    </Col>
                    </Row>
                  </Form>
                </Col>
              <p>By entering your email address, you agree to receive emails from Muroexe.</p>
            </Col>
            <Col xs={6} md={3} lg={3} className="item">
              <h3>All about your order</h3>
              <ul>
                <li><Link to={"/shopments"}>Shipments</Link></li>
                <li><Link to={"/exchangereturns"}>Exchange & Returns</Link></li>
                <li><Link to={"/sizechart"}>Size Chat</Link></li>
                <li><Link to={"/faq"}>FAQ</Link></li>
              </ul>
            </Col>
            <Col xs={6} md={3} lg={3} className="item">
              <h3>All about us :)</h3>
              <ul>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/dressyourproject"}>Dress Your Projects</Link></li>
                <li><Link to={"/designprocess"}>Design Process</Link></li>
                <li><Link to={"/officialstores"}>Official Stores</Link></li>
                <li><Link to={"/legal"}>Legal</Link></li>
              </ul>
            </Col>
          </Row>
          <Row className="item-social">
            <Col xs={{span:12,order:2}} md={{span:6,order:1}} lg={{span:6,order:1}}>
              <h3><b>Currency EUR | English</b></h3>
              <Col xs={12} className='footer-image'>
                <Image src={social_1} fluid/>
              </Col>
            </Col>
            <Col xs={{span:12,order:1}} md={{span:6,order:2}} lg={{span:6,order:2}}>
            <h3><b>Accepted payment methods</b></h3>
            <Col xs={12}>
                <Image src={social_2} fluid/>
            </Col>
            <p>© Coming back from 2050, Muroexe, Paseo de los Melancólicos, 9. Madrid</p>            
            </Col>
          </Row> 
        </Container>
      </footer>
    </div>
  )
}

export default Footer;