import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import { createProductReview } from '../actions/productActions.js'

const ProductReviewScreen = ({ location, history }) => {
  const [rating, setRating] = useState('')
  const [comment, setReviewComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { error, loading, product } = productDetails

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (!productDetails) {
      history.push(redirect)
    }
  }, [history, productDetails, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    // dispatch(createProductReview(rating, comment))
  }
  return (
    <FormContainer>
      <h1>Painting Review</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader></Loader>}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='rating'>
          <Form.Label>Rating for this Work</Form.Label>
          <Form.Control as='select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Artist Comments</Form.Label>
          <Form.Control
            type='text'
            placeholder='Patron Comments'
            value={comment}
            onChange={(e) => setReviewComment(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Add your comment
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ProductReviewScreen
