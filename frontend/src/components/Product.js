import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Card } from 'react-bootstrap'
// import Rating from './Rating'

const Product = ({ product }) => {
  useEffect(() => {
    const handleScrollPosition = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition')
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition))
        sessionStorage.removeItem('scrollPosition')
      }
    }
    handleScrollPosition()
  }, [])

  // store position in sessionStorage
  const handleClick = (e) => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset)
  }

  return (
    <Card className=' p-2 text-center rounded h-50' style={{ border: 'none' }}>
      <Link to={`/product/${product._id}`} onClick={handleClick}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} onClick={handleClick}>
          <Card.Title as='div'>
            {product.artist_comments.length > 0 ? (
              <strong>
                <h5>{product.name} *</h5>
              </strong>
            ) : (
              <strong>
                <h5>{product.name}</h5>
              </strong>
            )}
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
        <Card.Text as='h6' className='comment-text'>
          comments: {product.numReviews}
        </Card.Text>

        <Card.Text as='h6' className='otherInfo'>
          {product.price > 0 ? (
            <p className='visible'>${product.price.toFixed(2)}</p>
          ) : (
            <p className='invisible'>${product.price.toFixed(2)}</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
