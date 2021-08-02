import React,{useState} from 'react'
import {Col, Row,Button,Form} from "react-bootstrap";
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
                <p id='p1'>Juno Birdie Grape</p>
                <p id='p2'>21% discount</p>
                <p id='p3'>95.00  <b id='p3s'>€74.99</b></p>
                <p id='p4'>Comfortable and light. It also has a knit surface that makes it super breathable. Our female model is back for another year reinventing itself with a summer look so that you have the cooler and lighter summer.</p>
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