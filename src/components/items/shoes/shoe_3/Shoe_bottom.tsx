import React from 'react'
import {Col, Row,Image} from "react-bootstrap";
import img1 from "../icon/01-Prestaciones.png"
import img2 from "../icon/02-Minimal.webp"
import img3 from "../icon/03-Calidad.png"
import img4 from "../icon/04-Precios.png"
import img5 from "../icon/05-Unisex.png"
import img6 from "../icon/06-Veganos.png"

const Shoe_bottom = () => {
    return (
        <Row className='shoe-pa'>
            <Row className='icon'>
                <h3>Why are we diferent?</h3>
                <Row className='iconrow'>
                <Col xs={4} md={2} id='icon w-10 h-10'>
                    <Image src={img1} fluid/> 
                    <p>Advanced technical features</p>   
                </Col>
                <Col xs={4} md={2} id='icon w-10 h-10'>
                    <Image src={img2} fluid/>
                    <p>Minimalist design</p>
                </Col>
                <Col xs={4} md={2} id='icon w-10 h-10'>
                    <Image src={img3} fluid/>
                    <p>Affordable prices</p>
                </Col>
                <Col xs={4} md={2} id='icon w-10 h-10'>
                    <Image src={img4} fluid/>
                    <p>High Quality Materials</p>
                </Col>
                <Col xs={4} md={2} id='icon w-10 h-10'>
                    <Image src={img5} fluid/>
                    <p>Unisex design</p>
                </Col>
                <Col xs={4} md={2} id='icon w-10 h-10'>
                    <Image src={img6} fluid/>
                    <p>Vegan materials and processes</p>
                </Col>
                </Row>
            </Row>
            <Row className="tecnical">
                <p>Technical and elegant products for your daily life. Extreme comfort. 100% animal free</p>
            </Row>
        </Row>
    )
}
export default Shoe_bottom;