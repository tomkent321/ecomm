import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Products from '../products'

const Homescreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>{products.map}</Row>
    </>
  )
}

export default Homescreen
