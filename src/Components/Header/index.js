import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import img1 from '../../images/logo.svg'


export default function Header() {
    return (
        <div className='my-3'>
            <div className="row">
                <div className="col">
                    <img src={img1} alt="" />
                   
                </div>
                <div className="col ">
                <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">Home</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Pages</Nav.Link>
                                    <Nav.Link href="#link">Life style</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    <button className='btn btn-danger'>Subscribe</button>
                    
                    </Navbar>

                </div>
            </div>
        </div>
    )
}
