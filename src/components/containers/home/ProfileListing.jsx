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

      {/* Profile listing */}
      <div className="listing-row">
        <div className="featured-profile-listing-holder">
          <a href="/beesechurger73" target="_blank">
            <span className="link-spanner"></span>
          </a>

          <div className="profile-listing-img-holder">
            <img
              loading="lazy"
              className="profile-listing-img"
              src="https://d5ik1gor6xydq.cloudfront.net/sellers/34455/16391148157364063.jpg"
              alt="  creator Michael Castle being photographed"
            />
            <div className="profile-listing-owner-holder">
              <div className="profile-listing-owner-info-holder">
                <div className="profile-listing-owner-name">Michael Castle</div>
                <div className="profile-listing-owner-location">
                  Los Angeles, CA, US
                </div>
              </div>
            </div>
          </div>

          <div className="profile-listing-info-row">
            <div className="profile-listing-category">Instagram</div>
            <div className="profile-listing-price">$100</div>
          </div>
          <h3 className="profile-listing-title">Minecraft Content Creator</h3>
        </div>

        <div className="featured-profile-listing-holder">
          <a href="/mollymaybrownn" target="_blank">
            <span className="link-spanner"></span>
          </a>

          <div className="profile-listing-img-holder">
            <img
              loading="lazy"
              className="profile-listing-img"
              src="https://d5ik1gor6xydq.cloudfront.net/sellers/8485/16276321569491997.jpg"
              alt="  creator Molly Brown  being photographed"
            />
            <div className="profile-listing-owner-holder">
              <div className="profile-listing-owner-info-holder">
                <div className="profile-listing-owner-name">Molly Brown </div>
                <div className="profile-listing-owner-location">
                  Leeds, LDS, GB
                </div>
              </div>
            </div>
          </div>

          <div className="profile-listing-info-row">
            <div className="profile-listing-category">Instagram</div>
            <div className="profile-listing-price">$300</div>
          </div>
          <h3 className="profile-listing-title">
            Fashion And Beauty Creator &amp; Lifestyle!{" "}
          </h3>
        </div>

        <div className="featured-profile-listing-holder">
          <a href="/johnderting" target="_blank">
            <span className="link-spanner"></span>
          </a>

          <div className="profile-listing-img-holder">
            <img
              loading="lazy"
              className="profile-listing-img"
              src="https://d5ik1gor6xydq.cloudfront.net/sellers/5261/16276316037512283.jpg"
              alt="  creator John Derting being photographed"
            />
            <div className="profile-listing-owner-holder">
              <div className="profile-listing-owner-info-holder">
                <div className="profile-listing-owner-name">John Derting</div>
                <div className="profile-listing-owner-location">
                  Anchorage, AK, US
                </div>
              </div>
            </div>
          </div>

          <div className="profile-listing-info-row">
            <div className="profile-listing-category">TikTok</div>
            <div className="profile-listing-price">$1500</div>
          </div>
          <h3 className="profile-listing-title">
            Nature And Relaxing Videos Along With Exploring W…
          </h3>
        </div>

        <div className="featured-profile-listing-holder">
          <a href="/johnsstyle" target="_blank">
            <span className="link-spanner"></span>
          </a>

          <div className="profile-listing-img-holder">
            <img
              loading="lazy"
              className="profile-listing-img"
              src="https://d5ik1gor6xydq.cloudfront.net/sellers/28186/16319266031248474.jpg"
              alt="  creator Johnstyle being photographed"
            />
            <div className="profile-listing-owner-holder">
              <div className="profile-listing-owner-info-holder">
                <div className="profile-listing-owner-name">Johnstyle</div>
                <div className="profile-listing-owner-location">
                  Brantford, ON, CA
                </div>
              </div>
            </div>
          </div>

          <div className="profile-listing-info-row">
            <div className="profile-listing-category">TikTok</div>
            <div className="profile-listing-price">$300</div>
          </div>
          <h3 className="profile-listing-title">
            Fashion &amp; Lifestyle Content Creator{" "}
          </h3>
        </div>
      </div>

      {/* <div className="container-product">
        <img
          src={process.env.PUBLIC_URL + "assets/blocs/test_influencers.png"}
          width="800px"
          alt=""
        />
      </div> */}
    </div>
  );
}
