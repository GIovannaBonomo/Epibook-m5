import { Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav({searchText, setSearchText}) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="http://localhost:5173/">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browser</Nav.Link>

                    </Nav>
                    <Form className='d-flex m-3'>
                    <InputGroup>
                        <Form.Control
                            placeholder="Inserisci libro.."
                            aria-label="cerca libro"
                            aria-describedby="basic-addon2"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}




export default MyNav