import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar-links">
      <Link to="/explore">Explore</Link>
      <Link to="/work">How It Works</Link>
      <Link to="/login">Login</Link>
      <Link to="/join">Join as Brand</Link>
      <Link className="text-gradient" to="/join">
        Join as Creator
      </Link>
    </nav>
  );
}
