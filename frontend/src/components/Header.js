import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
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

  const handleScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition')
    if (scrollPosition) {
      window.scrollTo(0, 0)
      sessionStorage.removeItem('scrollPosition')
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <header className='sticky-top'>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/' onClick={() => handleScrollPosition()}>
            <Navbar.Brand>
              Donna Hurd Fine Art Studio
              <h6 className='clickHere'>click here for TOP of Gallery</h6>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route
              className='search-box'
              render={({ history }) => <SearchBox history={history} />}
            />

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
                  Show Only Scenery
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='southwestern'>
                  Show Only Southwestern
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='still_life'>
                  Show Only Still Life
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='people'>
                  Show Only People
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey='all' style={{ fontWeight: 'bold' }}>
                  Show Everything
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey='for_sale'>
                  Show Paintings for Sale
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
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Paintings</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Purchases</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

// note how the search box is rendered into the header by inserting a route and then accessing the history as a render prop
// being imbedded in the header component, it would not have had access to history

// import { Route } from 'react-router-dom'
// <Route render={({history}) => <SearchBox history={history} />} />
