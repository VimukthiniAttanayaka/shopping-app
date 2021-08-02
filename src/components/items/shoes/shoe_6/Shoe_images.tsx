import React from "react";
import {Col, Row,Image} from "react-bootstrap";
import shoes_6_1 from "./shoes_images/shoe_6_1.webp"
import shoes_6_2 from "./shoes_images/shoe_6_2.webp"
import shoes_6_3 from "./shoes_images/shoe_6_3.webp"
import shoes_6_4 from "./shoes_images/shoe_6_4.webp"

type shoeProps = {
    num: (num:number) => void;
}

const ShoeImages: React.FC <shoeProps>  = (props) => {

    const img1 = () => {
        props.num(1)
    }
    const img2 = () => {
        props.num(2)
    }
    const img3 = () => {
        props.num(3)
    }
    const img4 = () => {
        props.num(4)
    }
    return(
        <Row>
            <Col xs={3} onClick={img1}>
                <Image src={shoes_6_1} fluid/>
            </Col>
            <Col xs={3} onClick={img2}>
                <Image src={shoes_6_2} fluid/>
            </Col>
            <Col xs={3} onClick={img3}>
                <Image src={shoes_6_3} fluid/>
            </Col>
            <Col xs={3} onClick={img4}>
                <Image src={shoes_6_4} fluid/>
            </Col>
        </Row>
    );
}
export default ShoeImages;