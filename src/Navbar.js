import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Aos from 'aos';
import {Link, NavLink} from "react-router-dom";
let NavbarComponent=()=>{
  useEffect(()=>{
    Aos.init({duration:1000});
  }, []
);
    return(
      <>
      <div className='willstick'>
      <Navbar bg="light" data-bs-theme="light">
      <img src='https://marketplace.canva.com/EAGIe7Bjkko/1/0/1600w/canva-black-simple-travel-logo-aZ5WguzTPAw.jpg' height={"60px"} width={"60px"} alt='..'></img>
      <Container>
        <Navbar.Brand href="#home">Tour&Travels</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" style={{color:"white", textDecoration:"none", marginRight:"15px", marginLeft:"15px"}}><button>Plans</button></NavLink>
          <NavLink to="/Hills" style={{color:"white", textDecoration:"none",marginRight:"15px"}}><button>Hills</button></NavLink>
          <NavLink to="/Beaches" style={{color:"white", textDecoration:"none",marginRight:"15px"}}><button>Beaches</button></NavLink>
          <NavLink to="/Splaces" style={{color:"white", textDecoration:"none",marginRight:"15px",}}><button style={{fontSize:"15px"}}>Spiritual places</button></NavLink>
          <NavLink to="/Adventures" style={{color:"white", textDecoration:"none",marginRight:"15px"}}><button style={{fontSize:"17px"}}>Adventures</button></NavLink>
        </Nav>
      </Container>

      <div className='side'>
        <ul>
          <li><Link to='./Know'>About</Link></li>
          <li><Link to='./Last'>Contact</Link></li>
        </ul>
      </div>
    </Navbar>
    </div>
  </>
    )
}

export default NavbarComponent;