import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import img1 from "../../images/logo.svg";
import "./Header.scss";

const Header = ({ dark, toggleDarkMode }) => { // Enclose props in curly braces
  return (
    <div className={`my-3 ${dark ? "bg-dark" : "bg-light"}`}>
      <div className="row">
        <div className="col">
          <img src={img1} alt="Logo" />
        </div>
        <div className="col">
          <Navbar
            bg={dark ? "dark" : "light"}
            variant={dark ? "dark" : "light"}
          >
            <Container>
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Pages</Nav.Link>
                  <Nav.Link href="#link">Lifestyle</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          <Button variant="primary" onClick={toggleDarkMode}>
            {dark ? "Light Mode" : "Dark Mode"}
          </Button>
          <button className="btn btn-danger">Subscribe</button>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
