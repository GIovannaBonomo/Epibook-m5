import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { SelectedBookContext } from '../context/context'
import { useNavigate } from 'react-router-dom';
{/*import CommentArea from './CommentArea'*/ }


function SingleBook({ book }) {
  const { selected, setSelected } = useContext(SelectedBookContext);
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate("/book/" + book.asin)
  }
  return (

    <Card className="h-100">
      <div className="overflow-hidden" style={{ height: '300px' }}>
        <Card.Img variant="top" src={book.img}
          onClick={() => setSelected(book.asin)}
          className={selected == book.asin && 'border border-danger'}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{book.title}</Card.Title>
        <div className="d-flex justify-content-center mt-3">
          <Button onClick={goToDetails}>
            Dettagli
          </Button>
        </div>
      </Card.Body>
      {/*{selected && <CommentArea asin= {book.asin}></CommentArea>}*/}
    </Card>
  )
}

export default SingleBook