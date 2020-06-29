import React from 'react';
import styled from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiHomeVariant } from '@mdi/js';
import HomeIcon from "./Icons/HomeIcon"
import DiscoverIcon from "./Icons/DiscoverIcon"
import LoginIcon from "./Icons/LoginIcon"
import {Container} from 'react-bootstrap'

const Styles = styled.div`


.navdiv{
    background: #f8f8f8;
    border: 0.5px solid black;
}
.brand{
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
}

a{
    padding: 10px;
    svg {
        width: 1.8rem;
        height: 1.8rem;
        transition: 0.3s;
        fill: black
    }

}

svg:hover{
    fill: grey;
    transform: translateY(-2px);
    transition: 0.3s

}
`;


const MainNavbar = () => {
    
    return ( 
        <Styles>
            <div className="navdiv">
                <Container>
                    <Navbar className="navbar" expand="lg">
                        <Navbar.Brand className="brand"href="/">FittingRoom.</Navbar.Brand>
                        <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto nav paths">                        
                                <Link to="/">
                                    <HomeIcon className='path'></HomeIcon>
                                    </Link>
                                <Link to="/discover">
                                    <DiscoverIcon className='path'></DiscoverIcon>
                                </Link>
                                <Link to="/login">
                                    <LoginIcon className='path'></LoginIcon>
                                </Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                
            </div>
            
        </Styles>
        
    );
}

export default MainNavbar;

