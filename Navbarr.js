import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './cssfiles/Navbarr.css';
import yourbookstorelogo from './pictures/yourbookstorelogo.png';
import Image from 'react-bootstrap/Image';
import { FiShoppingCart } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs"; // 🔥 3 DOT ICON

export default function Navbarr(props) {

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>

        {/* LOGO */}
        <Navbar.Brand as={Link} to="/home">
          <Image src={yourbookstorelogo} alt="logo" className="imglogo" />
        </Navbar.Brand>

        {/* 🔥 CUSTOM TOGGLE (3 DOT) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle">
          <BsThreeDotsVertical size={22} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {props.isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/home" className="nav-text">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="nav-text">About</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="nav-text">Contact</Nav.Link>
                <Nav.Link as={Link} to="/books" className="nav-text">Books</Nav.Link>

                {/* CART */}
                <Nav.Link as={Link} to="/cart" className="cart-icon position-relative">
                  <FiShoppingCart size={22} />
                  {props.cartCount > 0 && (
                    <Badge bg="danger" className="cart-badge">
                      {props.cartCount}
                    </Badge>
                  )}
                </Nav.Link>

                {/* LOGOUT */}
                <Nav.Link onClick={() => {
                  sessionStorage.removeItem("token");
                  props.setIsLoggedIn(false);
                  props.openLogin();
                }}>
                  <button className="mybutton">Logout</button>
                </Nav.Link>
              </>
            )}

            {!props.isLoggedIn && (
              <Nav.Link onClick={props.openLogin}>
                <button className="mybutton">Login</button>
              </Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}