import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className=' p-2 text-center rounded h-100' style={{ border: 'none' }}>
      <Link to={`/product/${product._id}`}>
        {/* <Card.Img src={product.image} variant='top' /> */}
        <Card.Img src={product.image} />
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
            {product.height}" x {product.width}"
          </Card.Text>
        </Card.Text>
        {/* <Card.Text as='h3'>${product.price}</Card.Text> */}
        <Card.Text as='h6' className='py-2'>
          {product.year}
        </Card.Text>
        <Card.Text className='otherInfo'>
          {product.price > 0 ? (
            <h6 className='visible'>${product.price.toFixed(2)}</h6>
          ) : (
            <h6 className='invisible'>${product.price.toFixed(2)}</h6>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
