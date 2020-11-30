import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
      <div>
    <Card className='my-3 p-3 text-center rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>
              <h5>{product.name}</h5>
            </strong>
          </Card.Title>
        </Link>
        <Card.Subtitle className='mb-2 text-muted'>
          <h6>{product.medium}</h6>
        </Card.Subtitle>
        <Card.Text as='div'>
          {/* <Rating value={product.rating} text={`${product.numReviews} reviews`} /> */}
          <Card.Text as='h6' className='py-2'>
            {product.height} x {product.width}"
          </Card.Text>
        </Card.Text>
        {/* <Card.Text as='h3'>${product.price}</Card.Text> */}
        <Card.Text as='h6' className='py-2'>
          {product.year}
        </Card.Text>
      </Card.Body>
    </Card>









    
    </div>
  )
}

export default Product
