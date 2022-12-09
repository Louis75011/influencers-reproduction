import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <span onClick={() => navigate("/")}>Icon</span>
      <nav>
        <span onClick={() => navigate("/explore")}>Explore</span>
        <span onClick={() => navigate("/login")}>Login</span>
      </nav>
    </header>
  );
}
