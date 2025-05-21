import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import api from "../api";
import "./Articles.css";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/articles")
      .then((response) => {
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data?.message || error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="all-articles">
      <h1 className="articles-page-title">All Articles</h1>
      <div className="articles-area">
        {articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          <>
            <p>Total articles: {articles.length}</p>
            {articles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
