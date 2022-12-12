import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";

const navItems = [
  {
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
  },
];
// console.log(navItems);

export default function NavBarItems() {
  return (
    <div className="mobile">
      {navItems.map((item, index) => {
        return (
          <Link key={index} className="nav-item" to={item.explore.path}>
            <div className="nav-img-holder">{item.explore.icon}</div>
            <div className="nav-txt">{item.explore.name}</div>
          </Link>
        );
      })}

      {navItems.map((item, index) => {
        return (
          <Link key={index} className="nav-item" to={item.brand.path}>
            <div className="nav-img-holder">{item.brand.icon}</div>
            <div className="nav-txt">{item.brand.name}</div>
          </Link>
        );
      })}

      {navItems.map((item, index) => {
        return (
          <Link key={index} className="nav-item" to={item.influencer.path}>
            <div className="nav-img-holder">{item.influencer.icon}</div>
            <div className="nav-txt">{item.influencer.name}</div>
          </Link>
        );
      })}

      {navItems.map((item, index) => {
        return (
          <Link key={index} className="nav-item" to={item.login.path}>
            <div className="nav-img-holder">{item.login.icon}</div>
            <div className="nav-txt">{item.login.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
