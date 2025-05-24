import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="image-container">
        <img
          className="heroImage"
          src={heroImg}
          alt="image of news being printing"
        />
      </div>

      <div className="main-content">
        <div className="main-slogan">
          <h1>Welcome to Meiyi's NC News</h1>
          <h2>Your Daily Dose of Curiosity. ☕️📰</h2>
          <div className="button-container">
            <button
              className="browse-button"
              onClick={() => navigate("/articles")}
            >
              Start browsing
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
