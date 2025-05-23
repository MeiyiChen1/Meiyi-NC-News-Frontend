import { useState } from "react";
export default function CommentCard({ comment, onDelete }) {
  const currentUser = "grumpy19";
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const handleDeleteClick = () => {
    const confirmed = window.confirm(
      "Are you 100% sure about delete this comment?"
    );
    if (!confirmed) return;

    setIsDeleting(true);
    setDeleteError(null);

    onDelete(comment.comment_id)
      .catch(() => {
        setDeleteError("failed to delete the comment, try again later.");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>
        By {comment.author} on{" "}
        {new Date(comment.created_at).toLocaleDateString()}
      </p>
      <p className="vote">
        <strong>Votes:</strong> {comment.votes}
      </p>
      {comment.author === currentUser && (
        <button onClick={handleDeleteClick} disabled={isDeleting}>
          {isDeleting ? "Deleting now..." : "Delete"}
        </button>
      )}
      {deleteError && <p className="error-msg">{deleteError}</p>}
    </div>
  );
}
