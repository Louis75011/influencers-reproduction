import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Home</div>
      <div onClick={() => navigate("/product")}>Product</div>
      <Footer />
    </div>
  );
}
