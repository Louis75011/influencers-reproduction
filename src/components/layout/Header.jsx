import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../containers/header/NavBar";
import NavBarItems from "../containers/header/NavBarItems";
import "../../styles/layout/Header.css";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    let observer = onAuthStateChanged(getAuth(), (user) => {
      setIsLoggedIn(!!user); // return observer
    });
    return function () {
      observer = null;
    };
  }, []);

  return (
    <header>
      <div className="container-title">
        <h1 onClick={() => navigate("/")}>Influencers</h1>
        <img
          src={process.env.PUBLIC_URL + "/assets/site/collabstr.png"}
          height="35px"
          alt="icon,title,header,navbar"
        />
      </div>

      <div className="dekstop">
        <NavBar isLoggedIn={isLoggedIn} />
      </div>

      <div className="mobile">
        <nav className="navbar-links"></nav>
        {/* NavBar fixed */}
        <div className="mobile-nav-holder">
          <NavBarItems isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </header>
  );
}
