import "../../../styles/containers/home/FeatureHolder.css";

export default function FeatureHolder(props) {
  return (
    <div className="feature-holder">
      <div className="feature-title">
        <img className="feature-img" src={props.image} alt="icon, feature" />
        {props.title}
      </div>
      <div className="feature-txt">{props.text}</div>
    </div>
  );
}
