import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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

  return (
    <>
      {/* modal: artist comments */}
      <div
        className='modal fade'
        id='artistCommentsModal'
        tabindex='-1'
        aria-labelledby='artistCommentsModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog  modal-dialog-centered'>
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
            <div className='modal-body'>{product.artist_comments}</div>
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
                            <h6>${product.price.toFixed(2)}</h6>
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
        </>
      )}
    </>
  )
}

export default ProductScreen
