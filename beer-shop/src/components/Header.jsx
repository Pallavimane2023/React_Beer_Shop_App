import React, { useState,useEffect } from "react";

import { Nav, Container, Badge } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

import '../App.css'

const Header = () => {
  const getdata = useSelector((state) => state.carts);

  const pathUrl = "/favbeer";
  let currentPath = window.location.pathname;
  const [hide, setHide] = useState(false);


  useEffect(() => {
    if (currentPath === pathUrl) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [currentPath]);



  return (
    <Navbar bg="warning" data-bs-theme="dark" className="Header">
      <Container>
        <Navbar.Brand href="#home">Me'me's Beer</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link  href="/">Home</Nav.Link>
        </Nav>

        {!hide?( <Nav className="justify-content-end">
         <Nav.Link active={true} href="/favbeer">
            Fav <Badge bg="secondary">{getdata.length}</Badge>
          </Nav.Link>
        </Nav>):(<Nav  className="justify-content-end">
         <Nav.Link active={true} href="/">

            BackToHome
          </Nav.Link>
        </Nav>)}
      
      </Container>
    </Navbar>
  );
};

export default Header;
