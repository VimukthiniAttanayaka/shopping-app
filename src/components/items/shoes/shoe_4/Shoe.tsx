import React,{useState} from 'react'
import {Col, Row,Button, Form} from "react-bootstrap";
import Select from 'react-select'
import ShoeImages from './Shoe_images';
import ShoeChangeImage from './Shoe_change_image';
import Shoe_bottom from './Shoe_bottom';

const Shoe = () => {

    const [numb, setNumb] = useState<number>(1)
    const options = [
        { value: '36', label: '36' },
        { value: '37', label: '37' },
        { value: '38', label: '38' },
        { value: '39', label: '39' },
        { value: '40', label: '40' },
        { value: '41', label: '41' }
      ]

      const num = (num:number) => {
          setNumb(num);
      }

    return (
        <Row className='shoe-pa'>
            <Row className='shoeN'>
            <Col>
                <Row>
                    <ShoeChangeImage numb={numb}/>
                </Row>
                <Row>
                    <ShoeImages num={num}/>
                </Row>
            </Col>
            <Col xs={12} md={4}>
                <p id='p1'>Marathon Beyond Grape</p>
                <p id='p2'>28% discount</p>
                <p id='p3'>85.00  <b id='p3s'>€60.99</b></p>
                <p id='p4'>A unique loafer with the latest in sports performance, ultra breathable and super light. We have designed the most classic model but with the advantages of a modern day sports sneaker. Elastic, breathable and with an amazing look with which you will attract all glances.</p>
                <p id='p5'>Available colors</p>
                <Form>
                    <Form.Group controlId="size">
                        <Form.Label>Size</Form.Label>
                        <Select options={options} placeholder={36}/>
                    </Form.Group>
                    <Button className="cart-btn">ADD TO CART</Button>
                </Form>
            </Col>
            </Row>
            <Row className='shoe-pa'>
                <Shoe_bottom/>
            </Row>
        </Row>
    )
}
export default Shoe;