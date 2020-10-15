import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}></a>
      <Card.Img src={product.image} variant='top' />
      <Card.Body>
        <Card.Title className='center'>
          <h6>{product.name}</h6>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Product
