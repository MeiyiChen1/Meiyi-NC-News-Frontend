import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="copyright">© 2025 Meiyi_NC_News</footer>
    </>
  );
}
