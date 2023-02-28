import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "./components/footer";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const laout = () => {
  return (
    <div>
      <Navbar bg="dark" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="/">首頁</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./about">關於這個網站</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
      <Footer />
    </div>
  );
};

export default laout;
