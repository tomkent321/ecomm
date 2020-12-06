// useEffect allows calling backend
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import { listProducts } from '../actions/productActions.js'

// import products from '../products'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  const sortType = useSelector((state) => state.userSort.userSort)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  let arrFiltered = false
  let productsFiltered = []
  let newProduct = []

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
      break

    case 'byMedium':
      //this is a reverse sort to put all before acrylic
      products.sort(function (x, y) {
        let a = x.medium.toUpperCase(),
          b = y.medium.toUpperCase()
        return a === b ? 0 : a < b ? 1 : -1
      })
      break
    case 'scenery':
      arrFiltered = true
      productsFiltered = products.filter(function (x) {
        return x.subject === 'scenery'
      })
      break
    case 'southwestern':
      arrFiltered = true
      productsFiltered = 
      products.filter(function (x) {
        return x.subject === 'southwestern'
      })
      break
    case 'people':
      arrFiltered = true
      productsFiltered = 
      products.filter(function (x) {
        return x.subject === 'people'
      })
      break
    case 'still_life':
      arrFiltered = true
     
      productsFiltered = products.filter(function (x) {
        return x.subject === 'still_life'
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
    
  } else {
    newProduct = products
  }
  
  console.log(newProduct)
  return (
    <>
      <h1>Donna Hurd Art Gallery</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {newProduct.map((product, index) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
