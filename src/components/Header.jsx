import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="logo">
        Meiyi's NC News
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/users">Users</Link>
      </nav>
    </header>
  );
}
