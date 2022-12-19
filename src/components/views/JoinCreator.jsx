import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";

export default function JoinCreator() {
  const userName = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    try {
      navigate("/creator-signup/" + userName.current.value);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="content">
      <div className="hero-holder">
        <h1 className="hero-title">Power Your Brand Deals</h1>
        <h2 className="hero-subtitle">
          The simple way to sell, manage, and get paid for your Instagram,
          TikTok, and YouTube brand deals
        </h2>

        <div className="username-holder">
          <div className="username-domain">collabstr.com/</div>
          <div className="username-input-holder">
            <input
              ref={userName}
              type="text"
              className="username-input"
              placeholder="yourname"
            />
          </div>
          <button className="username-btn" onClick={handleSubmit}>
            Claim
          </button>
        </div>

        {/* <Link to="/creator-signup" className="signup-btn btn">
          Sign Up
        </Link>

        <div className="username-holder">
          <div className="username-domain">collabstr.com/</div>
          <div className="username-input-holder">
            <input
              type="text"
              className="username-input"
              placeholder="yourname"
            />
          </div>
          <div className="username-btn">Claim</div>
        </div> */}
      </div>

      {/* <div className="hero-img-holder">
        <video className="hero-vid" playsInline="" autoPlay="" muted="" loop="">
          <source src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/hero.mp4" />
        </video>
        <img
          className="platform-img ig-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/ig.svg"
          alt="Instagram Logo"
        />
        <img
          className="platform-img tiktok-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/tiktokHome.svg"
          alt="TikTok Logo"
        />
        <img
          className="platform-img youtube-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/youtubeHome.svg"
          alt="Youtube Logo"
        />
      </div>

      <div className="row-holder">
        <h2 className="row-title row-title-center title-gradient">
          Loved by 60,000+ Creators
        </h2>
        <div className="niches">
          <div className="niche">Lifestyle</div>
          <div className="niche">Fashion</div>
          <div className="niche">Beauty</div>
          <div className="niche">Travel</div>
          <div className="niche">Health &amp; Fitness</div>
          <div className="niche">Family &amp; Children</div>
          <div className="niche">Music &amp; Dance</div>
          <div className="niche">Comedy &amp; Entertainment</div>
        </div>
        <div className="listing-row">
          <div className="featured-profile-listing-holder">
            <a href="/veggietto" target="_blank">
              <span className="link-spanner"></span>
            </a>

            <div className="profile-listing-img-holder">
              <img
                loading="lazy"
                className="profile-listing-img"
                src="https://d5ik1gor6xydq.cloudfront.net/sellers/33342/16380644138447058.jpg"
                alt="  creator Angela Kim being photographed"
              />
              <div className="profile-listing-owner-holder">
                <div className="profile-listing-owner-info-holder">
                  <div className="profile-listing-owner-name">Angela Kim</div>
                  <div className="profile-listing-owner-location">
                    New York, NY, US
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-listing-info-row">
              <div className="profile-listing-category">Instagram</div>
              <div className="profile-listing-price">$300</div>
            </div>
            <h3 className="profile-listing-title">Food Content Creator</h3>
          </div>

          <div className="featured-profile-listing-holder">
            <a href="/outdoorbengal" target="_blank">
              <span className="link-spanner"></span>
            </a>

            <div className="profile-listing-img-holder">
              <img
                loading="lazy"
                className="profile-listing-img"
                src="https://d5ik1gor6xydq.cloudfront.net/sellers/16636/1627627146513741.jpg"
                alt="  creator Albert Colominas being photographed"
              />
              <div className="profile-listing-owner-holder">
                <div className="profile-listing-owner-info-holder">
                  <div className="profile-listing-owner-name">
                    Albert Colominas
                  </div>
                  <div className="profile-listing-owner-location">
                    New York, NY, US
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-listing-info-row">
              <div className="profile-listing-category">YouTube</div>
              <div className="profile-listing-price">$500</div>
            </div>
            <h3 className="profile-listing-title">
              Transform The Bond With Your Cat - Adventure Cat …
            </h3>
          </div>

          <div className="featured-profile-listing-holder">
            <a href="/nikkottmann" target="_blank">
              <span className="link-spanner"></span>
            </a>

            <div className="profile-listing-img-holder">
              <img
                loading="lazy"
                className="profile-listing-img"
                src="https://d5ik1gor6xydq.cloudfront.net/sellers/23150/16276282467681367.jpg"
                alt="  creator Nik Kottmann being photographed"
              />
              <div className="profile-listing-owner-holder">
                <div className="profile-listing-owner-info-holder">
                  <div className="profile-listing-owner-name">Nik Kottmann</div>
                  <div className="profile-listing-owner-location">
                    Lucerne, LU, CH
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-listing-info-row">
              <div className="profile-listing-category">TikTok</div>
              <div className="profile-listing-price">$750</div>
            </div>
            <h3 className="profile-listing-title">
              Visual Effects Artist &amp; Content Creator
            </h3>
          </div>

          <div className="featured-profile-listing-holder">
            <a href="/betsygenevieve" target="_blank">
              <span className="link-spanner"></span>
            </a>

            <div className="profile-listing-img-holder">
              <img
                loading="lazy"
                className="profile-listing-img"
                src="https://d5ik1gor6xydq.cloudfront.net/sellers/5814/1627631715460551.jpg"
                alt="creator Betsy Genevieve being photographed"
              />
              <div className="profile-listing-owner-holder">
                <div className="profile-listing-owner-info-holder">
                  <div className="profile-listing-owner-name">
                    Betsy Genevieve
                  </div>
                  <div className="profile-listing-owner-location">
                    New York, NY, US
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-listing-info-row">
              <div className="profile-listing-category">Instagram</div>
              <div className="profile-listing-price">$200</div>
            </div>
            <h3 className="profile-listing-title">Fashion &amp; Lifestyle</h3>
          </div>
        </div>
      </div>

      <div>
        <div className="logo-title">As seen in</div>
        <div className="logo-holder">
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/buzzfeed.svg"
            alt="Buzzfeed logo"
            loading="lazy"
          />
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/bloomberg.svg"
            alt="Bloomberg logo"
            loading="lazy"
          />
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/nyt.svg"
            alt="New York Times logo"
            //  style="width: 175px;"
            loading="lazy"
          />
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/yahoo.svg"
            alt="Yahoo logo"
            loading="lazy"
          />
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/shopify.svg"
            alt="Shopify logo"
            loading="lazy"
          />
        </div>
      </div>

      <div className="row-holder">
        <h2 className="row-title" id="how-it-works">
          How Collabstr Works
        </h2>
        <h3 className="row-subtitle">
          Everything you need to run your business as an influencer, and more.
        </h3>
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
              <h3 className="step-title">Create Your Page</h3>
              <div className="step-txt">
                Create your personal page and list your services for Instagram,
                TikTok, YouTube, and UGC.
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
              <h3 className="step-title">Share Your Link</h3>
              <div className="step-txt">
                Share your custom link in your bio and social media. Brands can
                view and purchase your services.
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
              <h3 className="step-title">Start Earning</h3>
              <div className="step-txt">
                Easily manage brand deals and get paid for your work directly
                through the platform.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row-holder">
        <div className="features-holder">
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/sell.svg"
                alt="Sell icon"
                loading="lazy"
              />
              Get Brand Deals
            </div>
            <div className="feature-txt">
              Get discovered by thousands of brands on our marketplace looking
              to work with you.
            </div>
          </div>
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/check.svg"
                alt="Check icon"
                loading="lazy"
              />
              Manage Collabs
            </div>
            <div className="feature-txt">
              Easily keep track of brand deals and deadlines. Submit
              deliverables directly through the platform.
            </div>
          </div>
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/money.svg"
                alt="Money icon"
                loading="lazy"
              />
              Always Get Paid
            </div>
            <div className="feature-txt">
              Funds are collected upfront and transferred to your bank account
              when you complete the collaboration.
            </div>
          </div>
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/link.svg"
                alt="link icon"
                loading="lazy"
              />
              Custom Link
            </div>
            <div className="feature-txt">
              Share your custom URL in your link in bio and with brands. Drive
              traffic to your page and get more brand deals.
            </div>
          </div>
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/chat.svg"
                alt="Chat icon"
                loading="lazy"
              />
              Instant Chat
            </div>
            <div className="feature-txt">
              Receive messages from brands and communicate instantly throughout
              the whole collaboration.
            </div>
          </div>
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/tax.svg"
                alt="Tax icon"
                loading="lazy"
              />
              Taxes Made Simple
            </div>
            <div className="feature-txt">
              We handle the filing of your 1099 forms. No more worrying about
              tax season.
            </div>
          </div>

          <div className="feature-holder empty-feature-holder">
            <div className="feature-title"></div>
            <div className="feature-txt"></div>
          </div>
          <div className="feature-holder empty-feature-holder">
            <div className="feature-title"></div>
            <div className="feature-txt"></div>
          </div>
        </div>
      </div>

      <div className="row-holder">
        <h2 className="row-title">Work with 20,000+ Brands</h2>
        <h3 className="row-subtitle">
          Collaborate with brands like Wealthsimple, ClickUp, Deezer, and many
          more.
        </h3>
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
            <a href="https://www.instagram.com/p/CN546zuBXwr/" target="_blank">
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
            <a href="https://www.instagram.com/p/CB3KJUdB3Sq/" target="_blank">
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

        <div className="logo-holder">
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/wealthsimple.svg"
            alt="Wealthsimple logo"
            loading="lazy"
          />
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/clickup.svg"
            alt="ClickUp logo"
            loading="lazy"
          />
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/hopper.svg"
            alt="Hopper logo"
            loading="lazy"
          />
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/un.svg"
            alt="United Nations logo"
            loading="lazy"
          />
          <img
            className="logo-img"
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/deezer.svg"
            alt="Deezer logo"
            loading="lazy"
          />
        </div>
      </div>

      <div className="faqs-holder">
        <div className="faq-holder">
          <div className="faq-title-holder">
            <h3 className="faq-question">How do I get paid?</h3>
            <img
              className="faq-btn"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
              loading="lazy"
            />
          </div>

          <div className="faq-answer">
            Payments are made directly through our website. We use{" "}
            <a href="https://stripe.com/" target="_blank">
              Stripe
            </a>{" "}
            as our payment processor and support all major credit &amp; debit
            cards. Once you complete an order, we will deposit the money into
            your bank account.
          </div>
        </div>

        <div className="faq-holder">
          <div className="faq-title-holder">
            <h3 className="faq-question">How much does it cost?</h3>
            <img
              className="faq-btn"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
              loading="lazy"
            />
          </div>

          <div className="faq-answer">
            There is no up-front cost. We take a 15% transaction fee when you
            make a sale.
          </div>
        </div>

        <div className="faq-holder">
          <div className="faq-title-holder">
            <h3 className="faq-question">Is my payment guaranteed?</h3>
            <img
              className="faq-btn"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
              loading="lazy"
            />
          </div>

          <div className="faq-answer">
            Yes, we collect the payment from the buyer and hold it until the
            order is complete. This ensures that both sides are protected during
            every transaction.
          </div>
        </div>

        <div className="faq-holder">
          <div className="faq-title-holder">
            <h3 className="faq-question">Can I decline orders?</h3>
            <img
              className="faq-btn"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
              loading="lazy"
            />
          </div>
          <div className="faq-answer">
            Yes, you are able to accept or decline an order. This gives you the
            freedom to only work with brands that align with you.
          </div>
        </div>

        <div className="faq-holder">
          <div className="faq-title-holder">
            <h3 className="faq-question">
              What platforms does Collabstr support?
            </h3>
            <img
              className="faq-btn"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
              loading="lazy"
            />
          </div>
          <div className="faq-answer">
            Currently you can list your services for Instagram, TikTok, YouTube,
            Twitch, Twitter and UGC.
          </div>
        </div>

        <div className="faq-holder">
          <div className="faq-title-holder">
            <h3 className="faq-question">Do I need to connect to Stripe?</h3>
            <img
              className="faq-btn"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
              loading="lazy"
            />
          </div>
          <div className="faq-answer">
            Yes, Stripe is what we use to collect payments and make direct
            deposits to your bank account. Stripe is used by apps like Lyft and
            Instacart. Stripe also provides invoices and tax forms for your
            convenience. Any information you enter into Stripe is not accessible
            by Collabstr.
          </div>
        </div>

        <div className="faq-holder">
          <div className="faq-title-holder">
            <h3 className="faq-question">Are there binding contracts?</h3>
            <img
              className="faq-btn"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
              loading="lazy"
            />
          </div>
          <div className="faq-answer">
            No, we do not ask you to sign any contracts. We are a self-serve
            platform, you are free to manage your own deals without our
            involvement. We simply provide the platform for you to advertise
            your services to brands.
          </div>
        </div>

        <div className="faq-holder">
          <div className="faq-title-holder">
            <h3 className="faq-question">Are you an agency?</h3>
            <img
              className="faq-btn"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
              loading="lazy"
            />
          </div>
          <div className="faq-answer">
            No, we are not an agency. We are a platform for you to advertise
            your services, and manage your own brand deals.
          </div>
        </div>
      </div> */}

      <div className="cta-holder">
        <div className="cta-overlay-holder">
          <div className="cta-txt-holder">
            <h2 className="cta-title">Power Your Brand Deals</h2>
            <h3 className="cta-txt">
              Join 60,000+ Creators using Collabstr to Power their Brand Deals
            </h3>
            <div className="cta-btn btn">Create Page</div>
          </div>
        </div>
        <img
          loading="lazy"
          alt="top influencers"
          className="cta-img"
          src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/cta.png"
        />
      </div>

      <Footer />
    </div>
  );
}
