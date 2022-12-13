import "../../../styles/containers/home/TrustedBrand.css";

export default function TrustedBrand() {
  return (
    <div className="listing-row">
      <div className="content-holder">
        <div className="play-btn-holder">
          <img
            className="play-btn"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/play.svg"
            loading="lazy"
          />
        </div>
        <video
          className="content-img content-vid"
          playsInline=""
          preload="metadata"
        >
          <source src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/1.mp4#t=0.1" />
        </video>
      </div>

      <div className="content-holder">
        <a
          rel="nofollow"
          href="https://www.instagram.com/p/CN546zuBXwr/"
          target="_blank"
        >
          <span className="link-spanner"></span>
        </a>
        <img
          loading="lazy"
          className="content-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/2.png"
          alt="Influencer content"
        />
      </div>

      <div className="content-holder">
        <div className="play-btn-holder">
          <img
            className="play-btn"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/play.svg"
            loading="lazy"
          />
        </div>
        <video
          className="content-img content-vid"
          playsInline=""
          preload="metadata"
        >
          <source src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/3.mp4#t=0.1" />
        </video>
      </div>

      <div className="content-holder">
        <a
          rel="nofollow"
          href="https://www.instagram.com/p/CB3KJUdB3Sq/"
          target="_blank"
        >
          <span className="link-spanner"></span>
        </a>
        <img
          loading="lazy"
          className="content-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/4.png"
          alt="Influencer content"
        />
      </div>

      <div className="content-holder">
        <div className="play-btn-holder">
          <img
            className="play-btn"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/play.svg"
            loading="lazy"
          />
        </div>
        <video
          className="content-img content-vid"
          playsInline=""
          preload="metadata"
        >
          <source src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/5.mp4#t=0.1" />
        </video>
      </div>
    </div>
  );
}
