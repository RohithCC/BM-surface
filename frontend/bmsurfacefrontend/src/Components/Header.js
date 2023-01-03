import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">BM+ Surface</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/blogcreate">Blogs Creation</Nav.Link>
            <Nav.Link href="/blogList">Blog List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    </>
  );
}

export default Header;