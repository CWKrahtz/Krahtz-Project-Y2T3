import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';

function BasicNav() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Get the value of isAdmin from localStorage
    const isAdminStored = localStorage.getItem("isAdmin");
    // Parse the value as a boolean, defaulting to false if it's not set
    setIsAdmin(isAdminStored ? JSON.parse(isAdminStored) : false);
  }, []); // Run this effect only once on component mount

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin"); // Remove isAdmin from localStorage on logout
    window.location = "/";
  };

  return (
    <Navbar className="bg-body-warning" style={{ height: "75px", backgroundColor: "#FFC107" }}>
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: "34px" }}>
          KF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            {isAdmin && <Nav.Link href="/admin">Admin</Nav.Link>}
            {isAdmin && <Nav.Link href="/order">Orders</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="light" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;
