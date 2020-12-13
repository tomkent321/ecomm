import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actionType from '../actions/actionTypes.js'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from 'react-bootstrap'
// import Rating from '../components/Rating'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions.js'
import Rating from '../components/Rating.js'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setReviewRating] = useState(5)
  const [comment, setReviewComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      alert('Thank you! Comments Submitted!')
      setReviewRating(0)
      setReviewComment('')
      dispatch({ type: actionType.PRODUCT_CREATE_REVIEW_RESET })
    }

    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match, successProductReview])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProductReview(match.params.id, { rating, comment }))
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error} </Message>
      ) : (
        <>
          <Row>
            <Col>
              <Link className='btn btn-light my-3' to='/'>
                Go Back
              </Link>

              {product.artist_comments !== ' ' ? (
                <Button
                  type='button'
                  className='btn btn-light my-3'
                  data-bs-toggle='modal'
                  data-bs-target='#artistCommentsModal'
                >
                  Donna's comments
                </Button>
              ) : (
                ''
              )}

              <Button
                type='button'
                className='btn btn-light my-3'
                data-bs-toggle='modal'
                data-bs-target='#patronCommentsModal'
              >
                Family and Friends Comments
              </Button>
              
              <Button
                type='button'
                className='btn btn-light my-3'
                data-bs-toggle='modal'
                data-bs-target='#pictureInfoModal'
              >
                Painting Information
              </Button>

              {product.price === 0 ? (
                ''
              ) : (
                <Button
                  type='button'
                  className='btn btn-light my-3'
                  data-bs-toggle='modal'
                  data-bs-target='#purchaseInformationModal'
                >
                  Purchase Information
                </Button>
              )}
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Link to='/'>
                <Image
                  src={product.image}
                  alt={product.name}
                  // fluid
                  // className='my-3'
                  className='productImage'
                ></Image>
              </Link>
            </Col>
          </Row>
          {/* <Row>
            <Col md={8}>
              <h2>Reviews</h2>
              {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a review</h2>
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setReviewRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Average</option>
                          <option value='4'>4 - Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Your Comments</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Write your comments here'
                          value={comment}
                          onChange={(e) => setReviewComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button type='submit' variant='primary'>
                        Submit your comment to Donna
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>Login</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row> */}
        </>
      )}

      {/* modal: artist comments */}
      <div
        className='modal fade'
        id='artistCommentsModal'
        tabindex='-1'
        aria-labelledby='artistCommentsModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog  modal-dialog-centered modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='artistCommentsModalLabel'>
                Donna's comments
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body artistComments'>
              {product.artist_comments && product.artist_comments}
            </div>
          </div>
        </div>
      </div>

      {/* modal: patron comments */}
      <div
        className='modal fade'
        id='patronCommentsModal'
        tabindex='-1'
        aria-labelledby='patronCommentsModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog  modal-dialog-centered modal-lg modal-dialog-scrollable'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='patronCommentsModalLabel'>
                Family and Friends Comments
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <Card border='light'>
                <Card.Body>
                  {errorProductReview && (
                    <Message variant='success'>{errorProductReview}</Message>
                  )}
                  {product.reviews.length === 0 && (
                    <Message>No comments yet. Be the first to comment!</Message>
                  )}
                  <ListGroup variant='flush'>
                    {product.reviews.map((review) => (
                      <ListGroup.Item key={review._id}>
                        <div className='reviewerName'>
                          <strong>{review.name}</strong>
                        </div>
                        {/* <Rating value={review.rating} /> */}
                        <div className='reviwerDate'>
                          {review.createdAt.substring(0, 10)}{' '}
                        </div>

                        <div className='reviewerComments'>{review.comment}</div>
                      </ListGroup.Item>
                    ))}
                    <ListGroup.Item>
                      <div className='reviewFormTitle'>
                        Share your comments with Donna
                      </div>
                      {userInfo ? (
                        <Form onSubmit={submitHandler}>
                          {/* <Form.Group controlId='rating'>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                              as='select'
                              value={rating}
                              onChange={(e) => setReviewRating(e.target.value)}
                            >
                              <option value=''>Select...</option>
                              <option value='1'>1 - Poor</option>
                              <option value='2'>2 - Fair</option>
                              <option value='3'>3 - Average</option>
                              <option value='4'>4 - Good</option>
                              <option value='5'>5 - Excellent</option>
                            </Form.Control>
                          </Form.Group> */}
                          <Form.Group controlId='comment'>
                            <Form.Label style={{ fontSize: '.5rem' }}>
                              Your Comments:
                            </Form.Label>
                            <Form.Control
                              type='text'
                              placeholder='Write your comments here'
                              value={comment}
                              onChange={(e) => setReviewComment(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                          <div className='modal-footer'>
                            <Button type='submit' variant='primary'>
                              Submit your comments
                            </Button>
                          </div>
                        </Form>
                      ) : (
                        <Message>Please Sign In to write a review</Message>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* modal: picture information */}
      <div
        className='modal fade'
        id='pictureInfoModal'
        tabindex='-1'
        aria-labelledby='pictureInfoModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog  modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='pictureInfoModalLabel'>
                Painting Information
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <Card border='light' className='text-center '>
                <Card.Body>
                  <Card.Title className='paintTitle'>{product.name}</Card.Title>
                  <Card.Text className='medium'>{product.medium}</Card.Text>
                  <Card.Text className='otherInfo'>
                    {product.height} x {product.width}"
                  </Card.Text>
                  <Card.Text className='otherInfo'>{product.year}</Card.Text>
                  <Card.Text className='otherInfo'>
                    {product.price > 0 ? (
                      <h6>${product.price.toFixed(2)}</h6>
                    ) : (
                      ''
                    )}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <ListGroup>
                    <ListGroupItem>Location: {product.location}</ListGroupItem>
                    <ListGroupItem>Framed: {product.framed}</ListGroupItem>
                    <ListGroupItem>Status: {product.status}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* modal: purchase information */}
      <div
        className='modal fade'
        id='purchaseInformationModal'
        tabindex='-1'
        aria-labelledby='purchaseInformationModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog  modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='purchaseInformationModal'>
                Purchase Information
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price: </Col>
                      <Col>
                        <strong>
                          {product.price === 0 ? (
                            <h6>Not for Sale</h6>
                          ) : (
                            <h6>${product.price}</h6>
                          )}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      data-bs-dismiss='modal'
                      disabled={
                        product.countInStock === 0 || product.price === 0
                      }
                    >
                      Add to Purchases
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductScreen
