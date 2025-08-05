import { useState } from "react"
import { Button, Form } from "react-bootstrap";

function AddComment({ asin }) {
    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: asin,
    })

    const sendComment = async (e) => {
    e.preventDefault()
    try {
        const response = await fetch ('https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTM4MTE0NjMsImV4cCI6MTc1NTAyMTA2M30.r7rDTsSGt-iUn5U91_kemslDggXMfD-HRXX_CozJkBs",
          }, 
          body: JSON.stringify(comment),
    } 
    )

   if (response.ok) {
        alert('Recensione inviata')
        setComment({
          comment: '',
          rate: 1,
          elementId: asin,
        })
      } else {
        alert('Errore')
      }
    } catch (error) {
      alert(error)
    
    }}
  return (
    <div className="m-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  )
}
export default AddComment
