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
        setLoggedInUser("");
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Link to="/home" style={{ color: '#615f5f', fontSize: '1.8rem' }}>
                <img style={{ width: '60px' }} alt="" src={logo} />
                Photo-Phactory</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className='text-center'><Link style={linkStyle} to="/home">Home</Link></Nav.Link>
                    <Nav.Link className='text-center'><Link style={linkStyle} to="/orders">Orders</Link></Nav.Link>
                    <Nav.Link className='text-center'><Link style={linkStyle} to="/admin">Admin</Link></Nav.Link>
                    <Nav.Link className='text-center'><Link style={linkStyle} to="/deals">Deals</Link></Nav.Link>
                        {
                            loggedInUser?.email ?
                                (
                                    <div className='text-center'>
                                        <NavDropdown title={
                                            <Avatar
                                            alt={loggedInUser?.displayName}
                                            src={loggedInUser?.photo}
                                        >
                                            {loggedInUser?.email.charAt(0)}
                                        </Avatar>
                                        } id="basic-nav-dropdown">
                                           <NavDropdown.Item>{loggedInUser.name || loggedInUser.displayName || loggedInUser.email}</NavDropdown.Item>
                                            <NavDropdown.Item><Button variant='contained' onClick={handleLogOut} color='primary' size='small'>Log out</Button></NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                )
                                : (<div className='text-center'>
                                    <Link
                                      style={{ color: "black", paddingLeft: "15px" }}
                                      to="/login"
                                    >
                                      <Button variant="contained" color="primary">
                                        Login
                                      </Button>
                                    </Link>
                                  </div>)
                        }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;