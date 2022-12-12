import "../../styles/containers/WorksStep.css";

export default function WorksStep() {
  return (
    <div className="steps-holder">
      <div className="step-holder">
        <img
          loading="lazy"
          className="step-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step1.png"
          alt="Influencer posing"
        />
        <div className="step-txt-holder">
          <div className="step-num">1</div>
          <h3 className="step-title">Search Influencers</h3>
          <div className="step-txt">
            Search through thousands of vetted Instagram, TikTok, and YouTube
            influencers.
          </div>
        </div>
      </div>
      <div className="step-holder">
        <img
          loading="lazy"
          className="step-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step2.png"
          alt="Influencer posing"
        />
        <div className="step-txt-holder">
          <div className="step-num">2</div>
          <h3 className="step-title">Purchase Securely</h3>
          <div className="step-txt">
            Safely purchase through Collabstr. We hold your payment until the
            work is completed.
          </div>
        </div>
      </div>
      <div className="step-holder">
        <img
          loading="lazy"
          className="step-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step3.png"
          alt="Influencer posing"
        />
        <div className="step-txt-holder">
          <div className="step-num">3</div>
          <h3 className="step-title">Receive Quality Content</h3>
          <div className="step-txt">
            Receive your high quality content from influencers directly through
            the platform.
          </div>
        </div>
      </div>
    </div>
  );
}
