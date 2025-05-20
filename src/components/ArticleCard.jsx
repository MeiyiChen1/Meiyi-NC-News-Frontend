import { Link } from "react-router-dom";
import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <img src={article.article_img_url} />
      <h2 className="title">{article.title}</h2>
      <h3 className="author">Author: {article.author}</h3>
      <p className="vote">
        <strong>Votes:</strong> {article.votes}
      </p>
      <p className="date">
        <strong>Date:</strong>{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <p className="topic">
        <strong>Topic:</strong> {article.topic}
      </p>
    </div>
  );
}
