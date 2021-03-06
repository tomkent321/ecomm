import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
// import Paginate from '../components/Paginate.js'
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../actions/productActions'
import * as actionType from '../actions/actionTypes.js'

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  // sort the products by name
  const adminPages = 2

  products.sort(function (x, y) {
    let a = x.name.toUpperCase(),
      b = y.name.toUpperCase()
    return a === b ? 0 : a > b ? 1 : -1
  })

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: actionType.PRODUCT_CREATE_RESET })
    if (!userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
      // dispatch(listProducts('', pageNumber))
      dispatch(listProducts())
    }
  }, [dispatch, history, userInfo, successDelete, successCreate, createProduct])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(id))
    }
  }
  const createProductHandler = () => {
    dispatch(createProduct())
  }
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Paintings</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Add Painting
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>IMG</th>
                {/* <th>YEAR</th>
              <th>HT</th>
              <th>WID</th> */}
                <th>PRICE</th>
                {/* <th>SUBJECT</th> */}
                <th>STATUS</th>
                {/* <th>FRAMED</th> */}
                <th>LOCATION</th>
                <th></th>
                {/* <th>ARTIST COMMENT</th> */}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.image.slice(8)}</td>
                  {/* <td>{product.year}</td>
                <td>{product.height}</td>
                <td>{product.width}</td> */}
                  <td>${product.price}</td>
                  {/* <td>{product.subject}</td> */}
                  <td>{product.status}</td>
                  {/* <td>{product.framed}</td> */}
                  <td>{product.location}</td>
                  {/* <td>{product.artist_comments}</td> */}
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          
        </>
      )}
    </>
  )
}

export default ProductListScreen
