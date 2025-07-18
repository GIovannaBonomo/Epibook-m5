import { useState } from 'react'
import { Card } from 'react-bootstrap'

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false)

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={book.img}
        onClick={() => setSelected(!selected)}
        className={selected ? 'border border-danger' : ''}
        style={{ cursor: 'pointer' }}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook