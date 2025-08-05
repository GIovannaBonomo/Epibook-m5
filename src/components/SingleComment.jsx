function SingleComment({comment}){
    return (
    <div className="mb-3 p-3 border rounded">
      <p><strong>Recensione:</strong> {comment.comment}</p>
      <p><strong>Valutazione:</strong> {comment.rate} / 5</p>
      <p><em>Autore: {comment.author || 'Anonimo'}</em></p>
    </div>
    )
}
export default SingleComment