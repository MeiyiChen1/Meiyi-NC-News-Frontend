import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import axios from "axios";
import CommentCard from "../components/CommentCard";
import "./ArticleDetails.css";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [articleLoading, setArticleLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

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

  if (articleLoading || !article) return <p>Loading article...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (commentsLoading) return <p>Loading comments...</p>;

  return (
    <div className="article-details">
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
        <strong>Votes:</strong> {article.votes}
      </p>
      <p>
        <strong>Comments number:</strong> {article.comment_count}
      </p>
      <p>
        <strong>Published:</strong>
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
