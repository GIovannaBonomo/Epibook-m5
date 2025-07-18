import { useState } from 'react'
import horror from '../data/horror.json'
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'

function AllTheBooks() {
  const [searchText, setSearchText] = useState(' ')
  const filteredBook = horror.filter(book =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  )
  return (
    <Container className="my-4">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Inserisci libro.."
          aria-label="cerca libro"
          aria-describedby="basic-addon2"
          value={searchText}
          onChange={(e)=> setSearchText(e.target.value)}
        />
      </InputGroup>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredBook.map(book => (
          <Col key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks