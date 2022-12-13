import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar-links">
      <Link to="/influencers">Explore</Link>
      <Link to="/work">How It Works</Link>
      <Link to="/login">Login</Link>
      <Link to="/brand">Join as Brand</Link>
      <Link className="text-gradient" to="/creator">
        Join as Creator
      </Link>
    </nav>
  );
}
