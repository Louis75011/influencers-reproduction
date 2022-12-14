import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";

const navItems = {
  explore: {
    path: "/influencers",
    icon: <AiOutlineSearch className="nav-icon" />,
    name: "Explore",
  },
  brand: {
    path: "/brand",
    icon: <RiSuitcaseLine className="nav-icon" />,
    name: "Brand",
  },
  influencer: {
    path: "/creator",
    icon: <AiOutlineUser className="nav-icon" />,
    name: "Influencer",
  },
  login: {
    path: "/login",
    icon: <TbUserCircle className="nav-icon" />,
    name: "Login",
  },
};

export default function NavBarItems() {
  return (
    <div className="mobile">
      {Object.values(navItems).map((item, index) => {
        return (
          <Link key={index} className="nav-item" to={item.path}>
            <div className="nav-img-holder">{item.icon}</div>
            <div className="nav-txt">{item.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
