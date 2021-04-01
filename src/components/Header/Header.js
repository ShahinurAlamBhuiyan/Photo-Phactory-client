import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import logo from '../../images/logo1.png'



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/home" style={{color: 'black'}}>
                    <img style={{ width: '80px' }} alt="" src={logo} />
                Photo-Phactory</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <div className='d-flex justify-content-between align-items-center'>

                        <Link style={{ color: 'black', paddingLeft:'15px' }} to="/home">Home</Link>
                        <Link style={{ color: 'black', paddingLeft:'15px' }} to="/orders">Orders</Link>
                        <Link style={{ color: 'black', paddingLeft:'15px' }} to="/admin">Admin</Link>
                        <Link style={{ color: 'black', paddingLeft:'15px' }} to="/deals">Deals</Link>
                        <Link style={{ color: 'black', paddingLeft:'15px' }} to="/login"><Button variant='contained' color='primary'>Login</Button></Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;