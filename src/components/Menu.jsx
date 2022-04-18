import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
// import logo from '../Assests/logo.png'
const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><NavLink
                            className="nav-link "
                            activeClassName="active"
                            aria-current="page"
                            to="/"
                        ><img src={logo} alt="logo" /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink
                            className="nav-link "
                            activeClassName="active"
                            aria-current="page"
                            to="/categories"
                        >
                            <h6>Category</h6>
                        </NavLink>
                        <NavLink
                            className="nav-link "
                            activeClassName="active"
                            aria-current="page"
                            to="/brand"
                        >
                            <h6>Brand</h6>
                        </NavLink>
                        <NavLink
                            className="nav-link "
                            activeClassName="active"
                            aria-current="page"
                            to="/new"
                        >
                            <h6>New</h6>
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink
                            className="nav-link "
                            activeClassName="active"
                            aria-current="page"
                            to="/createaccount"
                        >
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/user--v1.png" alt="" />
                        </NavLink>
                        <NavLink
                            className="nav-link "
                            activeClassName="active"
                            aria-current="page"
                            to="/bag"
                        >
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-bag-full.png" alt=""/>
                        </NavLink>
                        <NavLink
                            className="nav-link "
                            activeClassName="active"
                            aria-current="page"
                            to="/cart"
                        >
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart-loaded.png" alt=""/>
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu