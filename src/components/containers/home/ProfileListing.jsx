import { useNavigate } from "react-router-dom";
import "../../../styles/containers/home/ProfileListing.css";

export default function ProfileListing(props) {
  const navigate = useNavigate();

  return (
    <div className="section-holder">
      <h3 className="section-title">{props.title}</h3>
      <p className="section-subtitle">
        {props.subtitle}
        <span
          className="section-influencers"
          onClick={() => navigate("/influencers")}
        >
          See All
        </span>
      </p>

      <div className="container-product">
        <img
          src={process.env.PUBLIC_URL + "assets/blocs/test_influencers.png"}
          width="800px"
          alt=""
        />
      </div>
    </div>
  );
}
