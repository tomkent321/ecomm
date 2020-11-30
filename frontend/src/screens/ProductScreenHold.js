import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import { listProductDetails } from '../actions/productActions.js'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)

  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
  // console.log('history',history)
  // console.log('match.params.id', match.params.id)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error} </Message>
      ) : (
        <Row>
          <Col md={12}>
            <Image src={product.image} alt={product.name} fluid className='my-3'></Image>
          </Col>
          <Col md={12}>
            <Card className='my-3 p-3 text-center rounded'>
              <Card.Body>
                <Link to={`/product/${product._id}`}>
                  <Card.Title as='div'>
                    <strong>
                      <h2>{product.name}</h2>
                    </strong>
                  </Card.Title>
                </Link>
                <Card.Subtitle as= 'h5' className='mb-2 text-muted'>
                  {product.medium}
                </Card.Subtitle>

                <Card.Text as='h5' className='py-2'>
                  {product.height} x {product.width}"
                </Card.Text>

                <Card.Text as='h5' className='py-1'>
                  {product.year}
                </Card.Text>
                <Col md={4}>
                  <Row as='h5' className='py-1'>
                    Location: {product.location}
                  </Row>
                  <Row as='h5' className='py-1'>
                    Status: {product.status}
                  </Row>
                  <Row as='h5' className='py-1'>
                    Framed: {product.framed}
                  </Row>
                </Col>
                <Col md={5}>
                  <Row as='h5' className='py-1'>Artist comments: {product.artist_comments}</Row>
                </Col>
                {/* <Card.Text as='h6' className='py-2'>
                  {`Location: ${product.location} Status: ${product.status}  Framed: ${product.framed}`}
                </Card.Text> */}
              </Card.Body>
            </Card>

            {/* <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 className='artComments'>
                  <span>
                    <strong>Artist's comments:</strong>
                  </span>
                  {product.artist_comments}
                </h6>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup> */}
          </Col>
          {/* <Col md={6}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col> */}
        </Row>
      )}
    </>
  )
}

export default ProductScreen
