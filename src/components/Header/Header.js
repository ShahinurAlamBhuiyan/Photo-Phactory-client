import { Avatar, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import logo from '../../images/logo1.png'


const linkStyle = {
    paddingLeft: '15px', fontWeight: '600', color: '#615f5f'
}

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const handleLogOut = () => {
        window.location.reload(false);
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Link to="/home" style={{ color: '#615f5f', fontSize: '1.8rem' }}>
                <img style={{ width: '60px' }} alt="" src={logo} />
                Photo-Phactory</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><Link style={linkStyle} to="/home">Home</Link></Nav.Link>
                    <Nav.Link><Link style={linkStyle} to="/orders">Orders</Link></Nav.Link>
                    <Nav.Link><Link style={linkStyle} to="/admin">Admin</Link></Nav.Link>
                    <Nav.Link><Link style={linkStyle} to="/deals">Deals</Link></Nav.Link>
                    <Link style={linkStyle} to="/login">
                        {
                            loggedInUser?.email ?
                                (
                                    <div>
                                        <NavDropdown title={
                                            <Avatar
                                            alt={loggedInUser.name || loggedInUser.displayName}
                                            src={loggedInUser.photoURL  || loggedInUser.photo }
                                        >
                                            {/* {loggedInUser.displayName?loggedInUser.displayName.charAt(0) } */}
                                        </Avatar>
                                        } id="basic-nav-dropdown">
                                           <NavDropdown.Item>{loggedInUser.name || loggedInUser.displayName}</NavDropdown.Item>
                                            <NavDropdown.Item><Button variant='contained' onClick={handleLogOut} color='primary' size='small'>Log out</Button></NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                )
                                : (<Button variant='contained' color='primary'>LOGIN</Button>)
                        }
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;