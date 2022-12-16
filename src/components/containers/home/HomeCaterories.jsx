import "../../../styles/containers/home/ProfileListing.css";

export default function HomeCaterories() {
  return (
    <div className="section-holder">
      <h2 className="section-title">Categories</h2>
      <div className="listing-row">
        <div className="category-listing-holder">
          {/* <a href="/influencers?c=fashion" target="_blank"> */}
          <span className="link-spanner"></span>
          {/* </a> */}
          <div className="category-listing-img-holder">
            <img
              loading="lazy"
              className="category-listing-img"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/categories/fashion.png"
              height="200px"
              alt="influencer being photographed"
            />
            <div className="category-listing-owner-holder">
              <div className="profile-listing-owner-info-holder">
                <div className="category-listing-owner-name">Fashion</div>
              </div>
            </div>
          </div>
        </div>

        <div className="category-listing-holder">
          {/* <a href="/influencers?c=music%20%26%20dance" target="_blank"> */}
          <span className="link-spanner"></span>
          {/* </a> */}
          <div className="category-listing-img-holder">
            <img
              loading="lazy"
              className="category-listing-img"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/categories/music &amp; dance.png"
              height="200px"
              alt="influencer being photographed"
            />
            <div className="category-listing-owner-holder">
              <div className="profile-listing-owner-info-holder">
                <div className="category-listing-owner-name">
                  Music &amp; Dance
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="category-listing-holder">
          {/* <a href="/influencers?c=beauty" target="_blank"> */}
          <span className="link-spanner"></span>
          {/* </a> */}
          <div className="category-listing-img-holder">
            <img
              loading="lazy"
              className="category-listing-img"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/categories/beauty.png"
              height="200px"
              alt="influencer being photographed"
            />
            <div className="category-listing-owner-holder">
              <div className="profile-listing-owner-info-holder">
                <div className="category-listing-owner-name">Beauty</div>
              </div>
            </div>
          </div>
        </div>

        <div className="category-listing-holder">
          {/* <a href="/influencers?c=travel" target="_blank"><span className="link-spanner"></span></a> */}
          <div className="category-listing-img-holder">
            <img
              loading="lazy"
              className="category-listing-img"
              height="200px"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/categories/travel.png"
              alt="influencer being photographed"
            />
            <div className="category-listing-owner-holder">
              <div className="profile-listing-owner-info-holder">
                <div className="category-listing-owner-name">Travel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
