export const CommentList = ({ comments }) => (
  <section className="comments-section">
    <h3 className="comments-container">Comments:</h3>
    {comments && comments.map(comment => (
      <div className="comment-item" key={comment.postedBy + ': ' + comment.text}>
        <h4>{comment.postedBy}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </section>
)
