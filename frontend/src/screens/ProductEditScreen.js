import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import { listProductDetails, updateProduct } from '../actions/productActions.js'
import * as actionType from '../actions/actionTypes'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [image, setImage] = useState('')
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [medium, setMedium] = useState('')
  const [price, setPrice] = useState('')
  const [subject, setSubject] = useState('')
  const [status, setStatus] = useState('')
  const [location, setLocation] = useState('')
  const [framed, setFramed] = useState('')
  const [artist_comments, setArtistComments] = useState('')
  const [countInStock, setCountInStock] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: actionType.PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setYear(product.year)
        setImage(product.image)
        setHeight(product.height)
        setWidth(product.width)
        setMedium(product.medium)
        setPrice(product.price)
        setSubject(product.subject)
        setStatus(product.status)
        setLocation(product.location)
        setFramed(product.framed)
        setArtistComments(product.artist_comments)
        setCountInStock(product.countInStock)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        year,
        image,
        height,
        width,
        medium,
        price,
        subject,
        status,
        location,
        framed,
        artist_comments,
        countInStock,
      })
    )
  }
  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer className='container-fluid'>
        <h1>Edit Painting Information</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{error}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error} </Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Row>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='artist_comments'>
                <Form.Label>Artist Comments</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Artist Comments'
                  value={artist_comments}
                  onChange={(e) => setArtistComments(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Col sm={12} md={6} lg={6} xl={6}>
                <Form.Group controlId='image'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter image url'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='status'>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Status'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='price'>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='subject'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Subject (category: e.g. scenery)'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='year'>
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter Year'
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col sm={12} md={6} lg={6} xl={6}>
                <Form.Group controlId='height'>
                  <Form.Label>Height</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter height in inches'
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='width'>
                  <Form.Label>Width</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter width in inches'
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='medium'>
                  <Form.Label>Medium</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Medium'
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='location'>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='framed'>
                  <Form.Label>Framed</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Is it framed? Can include frame details'
                    value={framed}
                    onChange={(e) => setFramed(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='countInStock'>
                  <Form.Label>Count in Stock</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter quantity in stock'
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
