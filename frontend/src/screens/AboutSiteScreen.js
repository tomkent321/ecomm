import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Col } from 'react-bootstrap'

const AboutSiteScreen = () => {
  return (
    <>
      <h1>Site Information</h1>
        <a href='/'>
        <Button className='btn-sm' variant='primary'>
          Go to the Gallery!
        </Button>
      </a>
      
    </>
  )
}

export default AboutSiteScreen
