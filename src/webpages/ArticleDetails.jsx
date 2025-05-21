import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import axios from "axios";
import "./ArticleDetails.css";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data?.message || error.message);
        setLoading(false);
      });
  }, [article_id]);
  if (loading) return <p>Loading article...</p>;
  if (error) return <p className="error">Error: {error}</p>;
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
        <strong>Comments:</strong> {article.comment_count}
      </p>
      <p>
        <strong>Published:</strong>
        {new Date(article.created_at).toLocaleString()}
      </p>
    </div>
  );
}
