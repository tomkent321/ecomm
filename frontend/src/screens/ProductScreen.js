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
  Nav,
  Accordion,
  Table,
} from 'react-bootstrap'
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
            <Image
              src={product.image}
              alt={product.name}
              fluid
              className='my-3'
            ></Image>
          </Col>
          <Card border='light' className='text-center col-md-12'>
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
              <Card.Title className='paintTitle'>{product.name}</Card.Title>
              <Card.Text className='medium'>{product.medium}</Card.Text>
              <Card.Text className='otherInfo'>
                {product.height} x {product.width}"
              </Card.Text>
              <Card.Text className='otherInfo'>{product.year}</Card.Text>
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
          </Card>
          <Col md={12}>
            <Accordion defaultActiveKey='0'>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    Artist's Comments
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>"{product.artist_comments}" </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                    Reviews
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='1'>
                  <Card.Body>
                    Reviews go here. Reviews go here.Reviews go here.Reviews go
                    here.Reviews go here.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                    Information about this work
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='2'>
                  <Card.Body>
                    {/* <Table striped bordered hover> */}
                    <Table size='sm' boderless>
                      <tbody>
                        <tr>
                          <th style={{ width: '1%' }}></th>
                          <th style={{ width: '5%' }}></th>
                          <th style={{ width: '20%' }}></th>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Location:</td>
                          <td>{product.location}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td style={{ fontWeight: 'bold' }}>Framed:</td>
                          <td>{product.framed}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Status:</td>
                          <td>{product.status}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                    Purchase
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='3'>
                  <Card.Body>
                    <Row>
                      <Col md={6}>
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
                                      product.price
                                    )}
                                  </strong>
                                </Col>
                              </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <Row>
                                <Col>Status</Col>
                                <Col>
                                  {product.price === 0 ? (
                                    <h6>Not for Sale</h6>
                                  ) : product.countInStock > 0 ? (
                                    'Available'
                                  ) : (
                                    'Sold'
                                  )}
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
                                      {[
                                        ...Array(product.countInStock).keys(),
                                      ].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      ))}
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
                                disabled={
                                  product.countInStock === 0 ||
                                  product.price === 0
                                }
                              >
                                Add to Purchases
                              </Button>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
