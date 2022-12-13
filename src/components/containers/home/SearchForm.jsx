import "../../../styles/containers/home/SearchForm.css";

export default function SearchForm() {
  return (
    <>
      <form className="search-form-holder" method="get" action="/influencers">
        <div className="search-holder">
          <div className="filter-section platform-filter-section">
            <div className="filter-title">Platform</div>
            <div className="js-filter-placeholder filter-placeholder">
              Choose a platform
            </div>
            <div className="filter-dropdown-holder platform-dropdown-holder">
              {/* <div className="filter-dropdown-option" data-id="">
                Any
              </div>

              <div className="filter-dropdown-option" data-id="instagram">
                Instagram
              </div>

              <div className="filter-dropdown-option" data-id="tiktok">
                TikTok
              </div>

              <div
                className="filter-dropdown-option"
                data-id="user generated content"
              >
                User Generated Content
              </div>

              <div className="filter-dropdown-option" data-id="youtube">
                YouTube
              </div> */}
            </div>

            {/* <select className="mobile-select-dropdown">
              <option value="">All</option>

              <option value="instagram">Instagram</option>

              <option value="tiktok">TikTok</option>

              <option value="user generated content">
                User Generated Content
              </option>

              <option value="youtube">YouTube</option>
            </select> */}

            <input type="hidden" name="p" value="" />
          </div>

          <div className="filter-seperator"></div>

          <div className="filter-section category-filter-section">
            <div className="clear-input-btn">
              {/* <img
                className="clear-input-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/closeModal.svg"
              /> */}
            </div>
            <div className="filter-title">Category</div>
            <div className="filter-placeholder">
              <input
                className="filter-search-input"
                name="c"
                type="text"
                placeholder="Enter keywords, niches or categories"
                value=""
              />
            </div>
            <div className="filter-dropdown-holder category-dropdown-holder">
              <div className="filter-search-input-suggestion-area">
                {/* <div className="filter-search-input-suggestion-title">
                  Suggested
                </div>
                <div className="filter-search-input-suggestion-holder"></div>
              </div>
              <div>
                <div className="filter-search-input-pop-title">Popular</div> */}
                <div className="filter-search-input-pop-holder">
                  {/* <div
                    className="filter-search-input-pop-option"
                    data-id="Lifestyle"
                  >
                    Lifestyle
                  </div>

                  <div className="filter-search-input-pop-option" data-id="Fashion">
                    Fashion
                  </div>

                  <div className="filter-search-input-pop-option" data-id="Beauty">
                    Beauty
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Health &amp; Fitness"
                  >
                    Health &amp; Fitness
                  </div>

                  <div className="filter-search-input-pop-option" data-id="Travel">
                    Travel
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Food &amp; Drink"
                  >
                    Food &amp; Drink
                  </div>

                  <div className="filter-search-input-pop-option" data-id="Model">
                    Model
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Comedy &amp; Entertainment"
                  >
                    Comedy &amp; Entertainment
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Art &amp; Photography"
                  >
                    Art &amp; Photography
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Music &amp; Dance"
                  >
                    Music &amp; Dance
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Entrepreneur &amp; Business"
                  >
                    Entrepreneur &amp; Business
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Family &amp; Children"
                  >
                    Family &amp; Children
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Animals &amp; Pets"
                  >
                    Animals &amp; Pets
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Athlete &amp; Sports"
                  >
                    Athlete &amp; Sports
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Adventure &amp; Outdoors"
                  >
                    Adventure &amp; Outdoors
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Celebrity &amp; Public Figure"
                  >
                    Celebrity &amp; Public Figure
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Education"
                  >
                    Education
                  </div>

                  <div className="filter-search-input-pop-option" data-id="Actor">
                    Actor
                  </div>

                  <div className="filter-search-input-pop-option" data-id="Gaming">
                    Gaming
                  </div>

                  <div className="filter-search-input-pop-option" data-id="LGBTQ2+">
                    LGBTQ2+
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Technology"
                  >
                    Technology
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Healthcare"
                  >
                    Healthcare
                  </div>

                  <div className="filter-search-input-pop-option" data-id="Vegan">
                    Vegan
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Cannabis"
                  >
                    Cannabis
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Skilled Trades"
                  >
                    Skilled Trades
                  </div>

                  <div
                    className="filter-search-input-pop-option"
                    data-id="Automotive"
                  >
                    Automotive
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <button type="button" className="search-btn">
            <img
              alt="Search"
              className="search-img"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/search.svg"
            />
          </button>
        </div>

        {/* <link
          rel="stylesheet"
          type="text/css"
          href="/static/igmarketplace/components/modal.css?v=3.43"
        />

        <div className="modal">
          <div className="modal-content-holder"></div>
        </div> */}
      </form>
    </>
  );
}
