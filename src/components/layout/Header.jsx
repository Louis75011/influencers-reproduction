import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";
import NavBar from "../containers/NavBar";
import "../../styles/layout/Header.css";
import NavBarItems from "../containers/NavBarItems";

export default function Header() {
  const navigate = useNavigate();

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
        <NavBar />
      </div>

      <div className="mobile">
        <NavBar />
        {/* NavBar fixed */}
        <div className="mobile-nav-holder">
          <NavBarItems />
        </div>
      </div>
    </header>
  );
}
