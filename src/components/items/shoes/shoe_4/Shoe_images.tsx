import React from "react";
import {Col, Row,Image} from "react-bootstrap";
import shoes_4_1 from "./shoes_images/shoe_4_1.webp"
import shoes_4_2 from "./shoes_images/shoe_4_2.webp"
import shoes_4_3 from "./shoes_images/shoe_4_3.webp"
import shoes_4_4 from "./shoes_images/shoe_4_4.webp"
import shoes_4_5 from "./shoes_images/shoe_4_5.webp"

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
    const img5 = () => {
        props.num(5)
    }
    return(
        <Row>
            <Col xs={3} onClick={img1}>
                <Image src={shoes_4_1} fluid/>
            </Col>
            <Col xs={3} onClick={img2}>
                <Image src={shoes_4_2} fluid/>
            </Col>
            <Col xs={3} onClick={img3}>
                <Image src={shoes_4_3} fluid/>
            </Col>
            <Col xs={3} onClick={img4}>
                <Image src={shoes_4_4} fluid/>
            </Col>
            <Col xs={3} onClick={img5}>
                <Image src={shoes_4_5} fluid/>
            </Col>
        </Row>
    );
}
export default ShoeImages;