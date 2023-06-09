import React from 'react';
import { CartState } from "../context/Context";
import { Card , Button } from 'react-bootstrap'
import Rating from './Rating'

const SingleProduct = ({ prod }) => {

    const { state: { cart },
        dispatch, } = CartState();
    
    console.log(cart);

  return (
      <div className='products'>
          <Card>
              <Card.Img varient="top" src={prod.image} alt={prod.name} />
              <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Subtitle style={{ paddingBottom: 10 }}>
                      <span>$ {prod.price.split(".")[0]}</span>
                      {prod.fastDelivery ? (
                          <div>
                              Fast Delivery
                          </div>
                      ) : (
                              <div>
                                  4 days delivery
                              </div>
                      )}
                      <Rating rating={prod.ratings} />
                  </Card.Subtitle>
                   {/* some check if it particular thing exists inside of array or not */}
                  {
                      cart.some(p => p.id === prod.id) ? (
                          <Button
                              onClick={() => {
                                //   dispatch get take two things one is type & ANOTHER IS PAYLOAD 
                                  dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod
                                      
                                  })
                              }} variant="danger">Remove from cart</Button>
                      ) : (
                              <Button onClick={() => {
                                //   dispatch get take two things one is type & ANOTHER IS PAYLOAD 
                                  dispatch({
                                      type: "ADD_TO_CART",
                                      payload: prod
                                      
                                  })
                              }} disabled={!prod.inStock}>
                      {!prod.inStock ? "out of Stock" : "Add to Cart"}</Button>
                      )
                  }
                  
                  
              </Card.Body>
          </Card>
          
    </div>
  )
}

export default SingleProduct
