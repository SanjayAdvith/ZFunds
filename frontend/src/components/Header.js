import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Container, Navbar, Nav, Image } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <Image src="../images/banner.png" className="header_img" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto cart">

                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart'></i>
                                Cart
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <i className='fas fa-user'></i>
                                Sign In
                                </Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header


// import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
// import { Navbar, Nav, Container } from 'react-bootstrap'


// const Header = () => {

//     return (
//         <header>
//             <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
//                 <Container>
//                     <LinkContainer to='/'>
//                         <Navbar.Brand>ProShop</Navbar.Brand>
//                     </LinkContainer>
//                     <Navbar.Toggle aria-controls='basic-navbar-nav' />
//                     <Navbar.Collapse id='basic-navbar-nav'>
//                         <Nav className='ml-auto'>
//                             <LinkContainer to='/cart'>
//                                 <Nav.Link>
//                                     <i className='fas fa-shopping-cart'></i> Cart
//                             </Nav.Link>
//                             </LinkContainer>
//                             <LinkContainer to='/login'>
//                                 <Nav.Link>
//                                     <i className='fas fa-user'></i> Sign In
//                              </Nav.Link>
//                             </LinkContainer>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </header>
//     )
// }

// export default Header

