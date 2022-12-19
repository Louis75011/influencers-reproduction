import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../containers/header/NavBar";
import NavBarItems from "../containers/header/NavBarItems";
import "../../styles/layout/Header.css";
import { useFirebaseUsers } from "../../services/firebase/users";
import { FirebaseContext } from "../../services/firebase";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  // const [currentUser, setCurrentUser] = useState(undefined)
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    let observer = onAuthStateChanged(getAuth(), (user) => {
      setIsLoggedIn(!!user);
    });
    return function () {
      observer = null;
    };
  }, []);

  // useEffect(() => {
  //   console.log({ currentUser });
  //   if (currentUser !== undefined) {
  //     console.log('changed', { currentUser });
  //   }
  // }, [currentUser])

  useEffect(() => {
    console.log(getAuth().currentUser);
  }, [getAuth().currentUser]);

  // useEffect(() => {
  //   console.log(getAuth());
  //   let observer = onAuthStateChanged(getAuth(), (user) => {
  //     console.log({currentUser, user});
  //     if (currentUser !== undefined) {

  //     }
  //     if (user) {
  //       console.log('USER');
  // setIsLoggedIn(true);
  //       setCurrentUser(user)
  //       navigate("/");
  //       // console.log("user in", user);
  //     } else {
  //       console.log('NO-USER');
  //       setIsLoggedIn(false);
  //       setCurrentUser(null)
  //       navigate("/");
  //     }
  //   });
  //   return function () {
  //     observer = null;
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log({currentUser});
  // }, [currentUser])

  return (
    <header>
      <div className="container-title">
        <h1 onClick={() => navigate("/")}>collabstr</h1>
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
