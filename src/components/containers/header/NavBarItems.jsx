import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbUserCircle, TbSpeakerphone } from "react-icons/tb";
import { BiMessageAlt } from "react-icons/bi";
import { useFirebaseUsers } from "../../../services/firebase/users";

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

const navItemsConnected = {
  explore: {
    path: "/influencers",
    icon: <AiOutlineSearch className="nav-icon" />,
    name: "Explore",
  },
  orders: {
    path: "/",
    icon: <BiMessageAlt className="nav-icon" />,
    name: "Lists",
  },
  campaigns: {
    path: "/",
    icon: <TbSpeakerphone className="nav-icon" />,
    name: "Billing",
  },
  profile: {
    path: "/",
    icon: <TbUserCircle className="nav-icon" />,
    name: "Account",
  },
};

export default function NavBarItems({ isLoggedIn }) {
  const items = isLoggedIn ? navItemsConnected : navItems;
  const { signOut } = useFirebaseUsers();
    
  return (
    <div className="mobile">
      {Object.values(items).map((item, index) => {
        return (
          <Link key={index} className="nav-item" to={item.path}>
            <div className="nav-img-holder">{item.icon}</div>
            <div className="nav-txt">{item.name}</div>
          </Link>
        );
      })}
      {isLoggedIn && (
        <button className="btn" onClick={signOut}>
          Log Out
        </button>
      )}
    </div>
  );
}
