import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.scss";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <Navbar expand="lg">
            <Navbar.Brand href="#home">Admin Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#link">Admin</Nav.Link>
                <Nav.Link href="#home">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;
