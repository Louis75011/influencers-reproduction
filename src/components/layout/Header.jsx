import { useNavigate } from "react-router-dom";
import "../../styles/layout/Header.css";
import NavBar from "../containers/NavBar";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container-title">
        <h1 onClick={() => navigate("/")}>collabstr</h1>
        <img
          src={process.env.PUBLIC_URL + "/assets/collabstr.png"}
          height="35px"
          alt="icon,title,header,navbar"
        />
      </div>

      <div className="dekstop">
        <NavBar />
      </div>

      <div className="mobile">
        <NavBar />
      </div>
    </header>
  );
}
