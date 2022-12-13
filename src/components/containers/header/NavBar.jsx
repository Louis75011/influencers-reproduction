import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function NavBar() {
  return (
    <nav className="navbar-links">
      <Link to="/influencers">Explore</Link>
      <HashLink to="/#how-it-works">How It Works</HashLink>
      <Link to="/login">Login</Link>
      <Link to="/brand">Join as Brand</Link>
      <Link className="text-gradient" to="/creator">
        Join as Creator
      </Link>
    </nav>
  );
}
