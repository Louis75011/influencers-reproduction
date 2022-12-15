import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let observer = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
        navigate("/");
        // console.log("user in", user);
      } else {
        setIsLoggedIn(false);
        navigate("/");
      }
    });
    return function () {
      observer = null;
    };
  }, []);

  return (
    <nav className="navbar-links">
      <Link to="/influencers">Explore</Link>
      <HashLink to="/#how-it-works">How It Works</HashLink>
      <Link to="/login">Login</Link>
      <Link to="/brand">Join as Brand</Link>
      <Link className="text-gradient" to="/creator">
        Join as Creator
      </Link>
      {/* Test */}
      {isLoggedIn && (
        <button onClick={() => getAuth().signOut()}>Log Out</button>
      )}
    </nav>
  );
}
