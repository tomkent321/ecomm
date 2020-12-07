import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout, userChangeSortOption } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const cartInfo = useSelector((state) => state.cart)
  const { cartItems } = cartInfo
  const logoutHandler = () => {
    dispatch(logout())
  }

  const sortHandler = (selectedKey) => {
    dispatch(userChangeSortOption(selectedKey))
  }
  const aboutHandler = (selectedKey) => {
    dispatch(userChangeSortOption(selectedKey))
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Donna Hurd Fine Art Studio</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <NavDropdown
                title='About'
                id='basic-nav-dropdown'
                onSelect={(selectedKey) => aboutHandler(selectedKey)}
              >
                <NavDropdown.Item href='/about/artist'>
                  About the Artist
                </NavDropdown.Item>
                <NavDropdown.Item href='/about/site'>
                  About the Site
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='Gallery Sort'
                id='basic-nav-dropdown'
                onSelect={(selectedKey) => sortHandler(selectedKey)}
              >
                <NavDropdown.Item eventKey='byName'>
                  Sort by Name
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='byYear'>
                  Sort by Year
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='byMedium'>
                  Sort by Medium
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey='scenery'>
                  See Only Scenery
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='southwestern'>
                  See Only Southwestern
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='still_life'>
                  See Only Still Life
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='people'>
                  See Only People
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey='for_sale'>
                  See Paintings for Sale
                </NavDropdown.Item>
              </NavDropdown>

              {cartItems.length === 0 ? (
                ''
              ) : (
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i> Cart
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
