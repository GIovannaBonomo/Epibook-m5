import {Col} from 'react-bootstrap'
import SingleBook from './SingleBook'

function AllTheBooks({filteredBook}) {
 
  return (
    <>
        {filteredBook.map(book => (
          <Col key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
     </> 
  )
}

export default AllTheBooks