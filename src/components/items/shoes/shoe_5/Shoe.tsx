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
                <p id='p1'>Startup Evolve Blue</p>
                <p id='p2'>28% discount</p>
                <p id='p3'>90.00  <b id='p3s'>€64.99</b></p>
                <p id='p4'>Following Atom's groundbreaking idea, we have created a new icon with Startup, resetting the concept of the sneaker-shoe hybrid with a more sporty model without losing the shoe's elegance. It has a double density die-cut EVA sole, thus gaining in lightness and durability.</p>
                <p id='p4'>In addition, we have also re-designed, thanks to your feecback, the Startup surface with an ultra-breathable and more elastic knit fabric, so that your foot fits perfectly. The rest you can see for yourself, a groundbreaking design, with a "Slip-On" closure in which to tie or not the laces depends only on you.</p>
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