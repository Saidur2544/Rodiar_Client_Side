import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/logo.png";
import useAuth from '../../Hooks/useAuth';
import "./Navigation.css";



const Navigation = () => {
    const { user, logout} = useAuth();
    
    return (
        <Navbar style={{ background: '#d9d5d9', borderBottom:'2px solid #ac1717'}} expand="lg">
            <Container>
                <Navbar.Brand><img width="200px" src={logo} alt="logo" className="img-fluid"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="navitem" to="/">Home</NavLink>
                        <NavLink className="navitem" to="/shop">Shop</NavLink>
                        {user?.email ? <>
                            <NavLink className="navitem" to="/dashboard">Deshboard</NavLink>
                            <button onClick={logout} className="btn btn-danger mx-1">Logout</button>
                            <span className="pt-2 border-radius nameofUser">{user?.displayName}</span>
                        </> : <>
                            <NavLink className="navitem" to="/login">Login</NavLink>
                        </>
                    }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;