import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Gunakan 'as={Link}' untuk mengintegrasikan react-router dengan react-bootstrap
const NavbarComponent = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">MAHA PARFUME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/collection">Collection</Nav.Link>
            <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart size={22} />
              {cartCount > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;