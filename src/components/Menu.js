import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';


export default function Menu(){
    return(
        <>
        <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Star Wars Character Search</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    );

}
