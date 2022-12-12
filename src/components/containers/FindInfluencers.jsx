import "../../styles/containers/FindInfluencers.css";

export default function FindInfluencers() {
  return (
    <div className="cta-holder">
      <div className="cta-overlay-holder">
        <div className="cta-txt-holder">
          <h2 className="cta-title">Find and Hire Influencers</h2>
          <h3 className="cta-txt">
            Search Instagram, TikTok, and YouTube influencers
          </h3>
          <div className="cta-btn btn">Search Influencers</div>
        </div>
      </div>
      <img
        loading="lazy"
        alt="top influencers"
        className="cta-img"
        src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/cta.png"
      />
    </div>
  );
}
