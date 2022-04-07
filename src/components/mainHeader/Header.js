import React from 'react';
import './Header.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../assets/images/logo.gif';

function Header(){
    return (
        <Navbar bg='primary' className='sticky-top'>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} width={50} height={50} alt='logo'/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className='text-white' href="/">Home</Nav.Link>
                    <Nav.Link className='text-white' href="/about">About</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className='text-white' href="/contact/create">Add Contact</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;