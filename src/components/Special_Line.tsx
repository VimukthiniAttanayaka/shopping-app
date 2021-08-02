import React from 'react'
import {Link} from "react-router-dom";
import {Container, Row,} from "react-bootstrap";

const Special_Line = () => {
    return (
        <Container fluid={true} className="line">
        <Row className='redline'>
            <Link to={"/specialline"}><h6 id='special'>SUMMER SALE {'>'} UP TO 60% OFF.VIEW ALL MODELS</h6></Link>
        </Row>
        </Container>
    )
}
export default Special_Line;