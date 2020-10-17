// useEffect allows calling backend
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'

// import products from '../products'

const HomeScreen = () => {
  //next statement uses the use state: [var, fuctionName] = useState(initial state)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      //note proxy in frontend package.json to see the backend host 5000
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
