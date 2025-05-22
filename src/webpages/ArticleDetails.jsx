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
      <div className="comments-container">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
