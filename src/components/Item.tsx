import React from "react";
import {Col, Row, Image} from "react-bootstrap";
import shoes_1_1 from "./items/shoes/shoe_1/shoes_images/shoe_1_1.webp"
import shoes_2_1 from "./items/shoes/shoe_2/shoes_images/shoe_2_1.webp"
import shoes_3_1 from "./items/shoes/shoe_3/shoes_images/shoe_3_1.webp"
import shoes_4_1 from "./items/shoes/shoe_4/shoes_images/shoe_4_1.webp"
import shoes_5_1 from "./items/shoes/shoe_5/shoes_images/shoe_5_1.webp"
import shoes_6_1 from "./items/shoes/shoe_6/shoes_images/shoe_6_1.webp"
import {Link} from "react-router-dom";

const Item: React.FC = () => {

    return(
        <Row className='shoe-pa'>
            <h3 className="summer-sale">Summer Sale</h3>
            <Row className='shoe-pa'>
                <Col xs={4} className='items'>
                    <Link to={'/shoe1'}>
                        <Image src={shoes_1_1} fluid/>
                        <p className='name'>Juno Birdie Grape</p>
                        <p id='price'><i id='old-price'>95.00</i><b id='p3s'>  €74.99</b></p>
                        </Link>
                </Col>
                <Col xs={4} className='items'>
                <Link to={'/shoe2'}>
                    <Image src={shoes_2_1} fluid/>
                    <p className='name'>Juno Birdie Pink</p>
                    <p id='price'><i id='old-price'>95.00</i><b id='p3s'>  €74.99</b></p>
                    </Link>
                </Col>
                <Col xs={4} className='items'>
                <Link to={'/shoe3'}>
                    <Image src={shoes_3_1} fluid/>
                    <p className='name'>Marathon Beyond Ochre</p>
                    <p id='price'><i id='old-price'>85.00</i><b id='p3s'>  €60.99</b></p>
                    </Link>
                </Col>
                <Col xs={4} className='items'>
                    <Link to={'/shoe4'}>
                        <Image src={shoes_4_1} fluid/>
                        <p className='name'>Marathon Beyond Grape</p>
                        <p id='price'><i id='old-price'>85.00</i><b id='p3s'>  €60.99</b></p>
                        </Link>
                </Col>
                <Col xs={4} className='items'>
                <Link to={'/shoe5'}>
                    <Image src={shoes_5_1} fluid/>
                    <p className='name'>Startup Evolve Blue</p>
                    <p id='price'><i id='old-price'>90.00</i><b id='p3s'>  €64.99</b></p>
                    </Link>
                </Col>
                <Col xs={4} className='items'>
                <Link to={'/shoe6'}>
                    <Image src={shoes_6_1} fluid/>
                    <p className='name'>Startup Evolve Orange</p>
                    <p id='price'><i id='old-price'>90.00</i><b id='p3s'>  €64.99</b></p>
                    </Link>
                </Col>
            </Row>
        </Row>
    );
}
export default Item;