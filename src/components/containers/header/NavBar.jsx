import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useFirebaseUsers } from "../../../services/firebase/users";

export default function NavBar({ isLoggedIn }) {
  const { signOut } = useFirebaseUsers();

  return (
    <nav className="navbar-links">
      <Link to="/influencers">Explore</Link>
      <HashLink to="/#how-it-works">How It Works</HashLink>
      <Link to="/login">Login</Link>
      <Link to="/brand">Join as Brand</Link>
      <Link className="text-gradient" to="/creator">
        Join as Creator
      </Link>

      {isLoggedIn && (
        <button className="btn" onClick={signOut}>
          Log Out
        </button>
      )}
    </nav>
  );
}
