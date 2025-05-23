import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import CommentCard from "../components/CommentCard";
import useVote from "../hooks/useVote";
import "./ArticleDetails.css";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [articleLoading, setArticleLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");
  const [postingComment, setPostingComment] = useState(false);
  const [successPosted, setSuccessPosted] = useState(false);
  const [commentError, setCommentError] = useState("");

  useEffect(() => {
    api
      .get(`/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
        setArticleLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data?.message || error.message);
        setArticleLoading(false);
      });
  }, [article_id]);

  useEffect(() => {
    api
      .get(`/articles/${article_id}/comments`)
      .then((response) => {
        setComments(response.data.comments);
        setCommentsLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data?.message || error.message);
        setCommentsLoading(false);
      });
  }, [article_id]);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
    if (e.target.value.trim() !== "") {
      setCommentError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      setCommentError("Comment can't be empty");
      return;
    }
    setPostingComment(true);
    setError(null);
    setSuccessPosted(false);

    const commentSend = {
      username: "grumpy19",
      body: newComment.trim(),
    };
    api
      .post(`/articles/${article_id}/comments`, commentSend)
      .then((response) => {
        setComments((prev) => [
          { ...response.data.comment, author: response.data.comment.username },
          ...prev,
        ]);
        setNewComment("");
        setSuccessPosted(true);
        setCommentError("");
      })
      .catch(() => {
        setError("Failed to post new comment, please try again later");
      })
      .finally(() => {
        setPostingComment(false);
      });
  };

  const [articleVotes, voteArticle] = useVote(
    article?.votes || 0,
    (inc) => api.patch(`/articles/${article_id}`, { inc_votes: inc }),
    "Failed to vote the current article"
  );

  if (articleLoading || !article) return <p>Loading article...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (commentsLoading) return <p>Loading comments...</p>;

  return (
    <div className="article-details">
      <button onClick={() => navigate("/articles")} className="back-button">
        ← Back
      </button>
      <img src={article.article_img_url} />
      <h2>{article.title}</h2>
      <p>
        <strong>Author:</strong> {article.author}
      </p>
      <p>
        <strong>Topic:</strong> {article.topic}
      </p>
      <p className="body-text">{article.body}</p>
      <p>
        <strong>Votes:</strong> {articleVotes}
      </p>
      <button onClick={() => voteArticle(1)}>UP vote</button>
      <button onClick={() => voteArticle(-1)}>DOWN vote</button>
      <p>
        <strong>Published: </strong>
        {new Date(article.created_at).toLocaleString()}
      </p>
      <h3>Comments</h3>
      <div className="new-comment">
        <form onSubmit={handleSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={handleInputChange}
            placeholder="Your comment here..."
            rows={3}
          />
          <button type="submit" disabled={postingComment || !!commentError}>
            {postingComment ? "posting now..." : "post comment"}
          </button>
          {commentError && <p className="error-msg">{commentError}</p>}
          {error && <p className="error-msg">Error: {error}</p>}
          {successPosted && <p className="success">Comment posted :)</p>}
        </form>
      </div>
      <div className="comments-container">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
