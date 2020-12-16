import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3' style={{ fontSize: '.4rem' }}>
            Website copyright &copy; 2020 by ThomasKDev
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
