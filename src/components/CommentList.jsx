import { Carousel} from "react-bootstrap"
import SingleComment from "./SingleComment"

function CommentList({ commentsToShow }) {

  return (
    <div>
      <Carousel data-bs-theme="dark">
      {commentsToShow.map((comment) => (
        <Carousel.Item key={comment._id}>
        <SingleComment  comment={comment} />
        </Carousel.Item>
      ))}
      </Carousel>
    </div>
  )
}
export default CommentList