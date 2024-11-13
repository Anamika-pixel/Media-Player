import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <Navbar className="color-bg">
        <Container>
          <Navbar.Brand >
            <Link to={"/"} style={{textDecoration:'none'}}>
               <i className="fa-solid fa-music" style={{color: "#ffffff",fontSize:"50px"}} />{' '}
               <span style={{color:'#000',fontSize:"40px", fontWeight:"bolder"}}> <span id='player'>Media Player</span></span>

            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header