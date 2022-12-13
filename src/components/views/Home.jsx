import Footer from "../layout/Footer";
import FeatureHolder from "../containers/home/FeatureHolder";
import FindInfluencers from "../containers/home/FindInfluencers";
import ProfileListing from "../containers/home/ProfileListing";
import SearchForm from "../containers/home/SearchForm";
import TrustedBrand from "../containers/home/TrustedBrand";
import WorksStep from "../containers/home/WorksStep";
import "../../styles/views/Home.css";

export default function Home() {
  return (
    <main>
      <div className="home-container">
        <h2 className="text-gradient text-title">
          Find and Hire Influencers in Seconds
        </h2>
        <p className="text-subtitle">
          Find Instagram, TikTok, and YouTube influencers to create unique
          content for your brand
        </p>
        <SearchForm />
      </div>

      <div className="sections-holder">
        <ProfileListing
          title="Featured"
          subtitle="Hire top influencers across all platforms"
        />
        <ProfileListing
          title="Instagram"
          subtitle="Hire Instagram influencers"
        />
        <ProfileListing title="TikTok" subtitle="Hire TikTok influencers" />

        <div>
          <h3>Categories</h3>
          <div className="container-product-scrolling"></div>
        </div>

        <div>
          <div className="logo-title">As seen in</div>
          <div className="logo-holder">
            <img
              className="logo-img"
              src={process.env.PUBLIC_URL + "/assets/companies/buzzfeed.svg"}
              alt="icon, brand"
            />
            <img
              className="logo-img"
              src={process.env.PUBLIC_URL + "/assets/companies/bloomberg.svg"}
              alt="icon, brand"
            />
            <img
              className="logo-img"
              src={process.env.PUBLIC_URL + "/assets/companies/nyt.svg"}
              alt="icon, brand"
            />
            <img
              className="logo-img"
              src={process.env.PUBLIC_URL + "/assets/companies/yahoo.svg"}
              alt="icon, brand"
            />
            <img
              className="logo-img"
              src={process.env.PUBLIC_URL + "/assets/companies/shopify.svg"}
              alt="icon, brand"
            />
          </div>
        </div>

        <div className="row-holder">
          <h3 className="row-title" id="how-it-works">
            How Collabstr Works
          </h3>
          <p className="row-subtitle">
            Everything you need to run your influencer campaigns, and more.
          </p>
          <WorksStep />
        </div>

        <div className="row-holder">
          <div className="features-holder">
            <FeatureHolder
              image={
                process.env.PUBLIC_URL + "/assets/icons-features/01-money.svg"
              }
              title="No Upfront Cost"
              text="Search influencers for free. No subscriptions, contracts or
                hidden fees."
            />
            <FeatureHolder
              image={
                process.env.PUBLIC_URL + "/assets/icons-features/02-check.svg"
              }
              title="Vetted Influencers"
              text="Every influencer is vetted by us. Always receive high-quality,
                professional content."
            />
            <FeatureHolder
              image={
                process.env.PUBLIC_URL + "/assets/icons-features/03-chat.svg"
              }
              title="Instant Chat"
              text="Instantly chat with influencers and stay in touch throughout the
                whole transaction."
            />
            <FeatureHolder
              image={
                process.env.PUBLIC_URL + "/assets/icons-features/04-secure.svg"
              }
              title="Secure Purchases"
              text="Your money is held safely until you approve the influencer’s
                work."
            />
          </div>
        </div>

        <div className="row-holder">
          <h2 className="row-title">Trusted by 20,000+ Brands</h2>
          <h3 className="row-subtitle">
            View collaborations from brands like Wealthsimple, ClickUp, Deezer,
            and more.
          </h3>
          <TrustedBrand />

          {/* <div className="listing-row"></div> */}
          <div className="logo-holder">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/companies/wealthsimple.svg"
              }
              className="logo-img"
              alt="icon, brand"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/companies/clickup.svg"}
              className="logo-img"
              alt="icon, brand"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/companies/hopper.svg"}
              className="logo-img"
              alt="icon, brand"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/companies/un.svg"}
              className="logo-img"
              alt="icon, brand"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/companies/deezer.svg"}
              className="logo-img"
              alt="icon, brand"
            />
          </div>
        </div>

        <ProfileListing title="YouTube" subtitle="Hire YouTube influencers" />
        <ProfileListing
          title="User Generated Content"
          subtitle="Purchase high-quality UGC"
        />

        <div className="container-product-scrolling"></div>

        <FindInfluencers />
        {/* <div onClick={() => navigate("/product")}>Product</div> */}
      </div>

      <Footer />
    </main>
  );
}
