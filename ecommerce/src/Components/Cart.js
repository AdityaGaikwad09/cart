import React, {useState, useEffect} from 'react'
import { CartState } from '../context/Context';
import { ListGroup, Button, Row, Col, Form, Image } from "react-bootstrap";
import "./style.css";
import Rating  from "./Rating";
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {

  const { state: { cart }, dispatch, } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])


  return (
    <>
      <div className='home'>
      <div className="productContainer">
        <ListGroup>
            {
              cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
              <Col md={2}>
                      <Image src={prod.image} alt={prod.name} fluid rounded></Image>
              </Col>      
              <Col md={2}>
                <span>{prod.name}</span>
              </Col>
              <Col md={2}>
                <span>$ {prod.price}</span>
              </Col>
              <Col md={2}>
                <Rating rating = {prod.ratings}></Rating>
              </Col>   
              <Col md={2}>
                      <Form.Control 
                        as="select"
                        value={prod.qty}
                        onChange={(e) => dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                        })}
                      
                      >
                        
                  {[
                    ...Array(prod.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </Form.Control>
              </Col>
                    <Col md={2}>
              <Button
                      type="button"
                      variant="light"
                      onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })}
                      >
                        <AiFillDelete />
              </Button>  
                    </Col>   
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        </div>
        <div className='filters summary'>
          <span className='tittle'>Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
          <Button type="button" disbaled={cart.length === 0}>
            Proceed to Checkout
          </Button>
        </div>

    </div>
    </>
  )
}

export default Cart