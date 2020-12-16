import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Pagination } from 'react-bootstrap'
import Product from '../components/Product.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import Paginate from '../components/Paginate.js'
import { listProducts } from '../actions/productActions.js'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  const sortType = useSelector((state) => state.userSort.userSort)

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  let arrFiltered = false
  let productsFiltered = []
  let newProduct = []
  let currentDisplay = 'Showing Everything'

  switch (sortType) {
    case 'byName':
      products.sort(function (x, y) {
        let a = x.name.toUpperCase(),
          b = y.name.toUpperCase()
        return a === b ? 0 : a > b ? 1 : -1
      })
      break
    case 'byYear':
      products.sort(function (x, y) {
        let a = x.year,
          b = y.year
        return a === b ? 0 : a > b ? 1 : -1
      })
      currentDisplay = 'Sorted by Year'
      break
    case 'byMedium':
      //this is a reverse sort to put all before acrylic
      products.sort(function (x, y) {
        let a = x.medium.toUpperCase(),
          b = y.medium.toUpperCase()
        return a === b ? 0 : a < b ? 1 : -1
      })
      currentDisplay = 'Sorted by Medium'
      break
    case 'scenery':
      arrFiltered = true
      productsFiltered = products.filter(function (x) {
        return x.subject === 'scenery'
      })
      currentDisplay = 'Showing only Scenery'
      break
    case 'southwestern':
      arrFiltered = true
      productsFiltered = products.filter(function (x) {
        return x.subject === 'southwestern'
      })
      currentDisplay = 'Showing only Southwestern'
      break
    case 'people':
      arrFiltered = true
      productsFiltered = products.filter(function (x) {
        return x.subject === 'people'
      })
      currentDisplay = 'Showing only People'
      break
    case 'still_life':
      arrFiltered = true
      productsFiltered = products.filter(function (x) {
        return x.subject === 'still_life'
      })
      currentDisplay = 'Showing only Still Life'
      break
    case 'for_sale':
      arrFiltered = true
      productsFiltered = products.filter(function (x) {
        return x.price > 0 ?? x.qty > 0
      })
      currentDisplay = 'Showing only Paintings for Sale'
      break

    case 'all':
      products.sort(function (x, y) {
        let a = x.name.toUpperCase(),
          b = y.name.toUpperCase()
        return a === b ? 0 : a > b ? 1 : -1
      })
      break

    default:
      products.sort(function (x, y) {
        let a = x.name.toUpperCase(),
          b = y.name.toUpperCase()
        return a === b ? 0 : a > b ? 1 : -1
      })
      break
  }

  if (arrFiltered) {
    newProduct = productsFiltered
    arrFiltered = false
  } else {
    newProduct = products
  }

  return (
    <>
      <Row className='homescreen-header'>
        <h5>Gallery ({currentDisplay})</h5>
        <h6>Click any picture for details</h6>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row className='p-2'>
            {newProduct.map((product, index) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
