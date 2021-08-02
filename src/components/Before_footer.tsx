import React from "react";
import {Col, Row, Carousel, Container} from "react-bootstrap";
import ss4 from '../styles/beforefooter/ss1.png'
import ss2 from '../styles/beforefooter/ss2.png'
import ss3 from '../styles/beforefooter/ss3.png'
import ss1 from '../styles/beforefooter/ss4.png'

const Before_footer: React.FC = () => {
    return(
        <Container fluid={true} className='befo-footer'>
        <Row>
            <Col className='befo-footer'>
                <Row className="blue-part">
                    <h1>Technical and elegant products</h1>
                    <h1> for your daily life. Extreme comfort.</h1>
                    <h1> 100% animal free.</h1>
                </Row>
                <Row className="black-part">
                    <Col xs={12} md={6}>
                        <h1>We dress a generation of urban professionals, creatives and innovators that need functional yet modern products for their everyday lives.</h1>
                    </Col>
                    <Col xs={12} md={6}>
                        <p id="black-part-p1">We have sold more than 300K pairs. We have customers in more than 51 countries. We sell in more tan 320 shops all around the globe.</p>
                        <p id="black-part-p2">#dothefuture</p>
                    </Col>
                    <Row>
                        <Col>
                            <p id="muroexe">#muroexe</p>
                        </Col>
                        <Col>
                            <p id="instashop"><a href="">Instashop</a></p>
                        </Col>
                    </Row>
                </Row>
                <Row className="gray-part">
                    <Col xs={12} md={6} id="gray-col1">
                        <p><b>*****</b></p>
                        <p><b>4.7</b></p>
                        <p><b>"Excellent!"</b></p>
                        <h6>Based on 431 reviews from our users</h6>
                    </Col>
                    <Col xs={12} md={6} id="gray-col2">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img className="d-block" src={ss1}/>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img className="d-block" src={ss2}/>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img className="d-block" src={ss3}/>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img className="d-block" src={ss4}/>
                            </Carousel.Item>
                        </Carousel>                        
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    );
}
export default Before_footer;