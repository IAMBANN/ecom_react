import React from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

 


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
 


function Header() {
  return (
    <Navbar bg="light" data-bs-theme="dark">
       <Container>
       <Navbar.Brand href="#home">Euu kart </Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           Signed in as: <a href="#login"></a>
         </Navbar.Text>
       </Navbar.Collapse>
      </Container>
   </Navbar>
    // <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
  );
}

export default Header;


 