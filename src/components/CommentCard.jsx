export default function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>
        By {comment.author} on
        {new Date(comment.created_at).toLocaleDateString()}
      </p>
      <p className="vote">
        <strong>Votes:</strong> {comment.votes}
      </p>
    </div>
  );
}
