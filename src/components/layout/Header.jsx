import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <span onClick={() => navigate("/")}>Icon</span>
      <span onClick={() => navigate("/explore")}>Explore</span>
      <span onClick={() => navigate("/login")}>Login</span>
    </div>
  );
}
