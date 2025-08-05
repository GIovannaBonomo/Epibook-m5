import { useParams } from "react-router-dom"
import CommentArea from "./CommentArea"
import { Card, Col, Container, Row } from "react-bootstrap"
import horror from "../data/horror.json"


function BookDetails() {

    const { asin } = useParams()
    const book = horror.find((b) => asin === b.asin)
    return (
        <Container className="my-5">
            <Row className="align-items-start">
                <Col md={4}>
                    <Card.Img src={book.img} className="img-fluid rounded shadow-sm" />
                </Col>
                <Col md={8}>
                    <h2>{book.title}</h2>
                    <p className="text-muted">Categoria: {book.category}</p>
                    <p className="fw-bold text-success">Prezzo: {book.price}€</p>
                    <CommentArea asin={book.asin} />
                </Col>
            </Row>
        </Container>
    )
}
export default BookDetails