import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.css";

export const NavBar = () => {
  return (
    <nav className="navbar-bg">
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Duflix</h1>
        </div>
        <div className="navbar-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://www.themoviedb.org/">Tmdb</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
