import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import "../../styles/views/Home.css";

export default function Home() {
  const navigate = useNavigate();

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
        <div>
          <select name="" id=""></select>
          <label htmlFor="">Categorie</label>
          <input type="text" placeholder="Tag" />
          <button>Search</button>
        </div>
      </div>

      <div>
        <h3>Featured</h3>
        <p>Hire top influencers across all platforms</p>
        {/* See All */}
        <div className="container-product"></div>
      </div>

      <div>
        <h3>Instagram</h3>
        <p>Hire Instagram influencers</p>
        <div className="container-product"></div>
      </div>

      <div>
        <h3>TikTok</h3>
        <p>Hire TikTok influencers</p>
        <div className="container-product"></div>
      </div>

      <div>
        <h3>Categories</h3>
        <p>Hire TikTok influencers</p>
        <div className="container-product"></div>
      </div>

      <div>
        <p>As seen in</p>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/buzzfeed.svg"}
            height="50px"
            alt="icon, brand"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/bloomberg.svg"}
            height="50px"
            alt="icon, brand"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/nyt.svg"}
            height="50px"
            alt="icon, brand"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/yahoo.svg"}
            height="50px"
            alt="icon, brand"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/shopify.svg"}
            height="50px"
            alt="icon, brand"
          />
        </div>
      </div>

      <div>
        <h3>How Collabstr Works</h3>
        <p>Everything you need to run your influencer campaigns, and more.</p>
        <div className="container-product"></div>
      </div>

      <div>
        <div>
          {/* icon */}
          <p>No Upfront Cost</p>
          <p>
            Search influencers for free. No subscriptions, contracts or hidden
            fees.
          </p>
        </div>
        <div>
          {/* icon */}
          <p>Vetted Influencers</p>
          <p>
            Every influencer is vetted by us. Always receive high-quality,
            professional content.
          </p>
        </div>
        <div>
          {/* icon */}
          <p>Instant Chat</p>
          <p>
            Instantly chat with influencers and stay in touch throughout the
            whole transaction.
          </p>
        </div>
        <div>
          {/* icon */}
          <p>Secure Purchases</p>
          <p>
            Your money is held safely until you approve the influencer’s work.
          </p>
        </div>
      </div>

      <div>
        <h3>Trusted by 20,000+ Brands</h3>
        <p>
          View collaborations from brands like Wealthsimple, ClickUp, Deezer,
          and more.
        </p>
        <div className="container-product"></div>
      </div>

      <div>
        <p>As seen in</p>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/wealthsimple.svg"}
            height="50px"
            alt="icon, brand"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/clickup.svg"}
            height="50px"
            alt="icon, brand"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/hopper.svg"}
            height="50px"
            alt="icon, brand"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/un.svg"}
            height="50px"
            alt="icon, brand"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/deezer.svg"}
            height="50px"
            alt="icon, brand"
          />
        </div>
      </div>

      <div>
        <h3>YouTube</h3>
        <p>Hire YouTube influencers</p>
        <div className="container-product"></div>
      </div>

      <div>
        <h3>User Generated Content</h3>
        <p>Purchase high-quality UGC</p>
        <div className="container-product"></div>
      </div>

      <div>
        <p>Find and Hire Influencers</p>
        <p>Search Instagram, TikTok, and YouTube influencers</p>
        <button>Search Influencers</button>
        {/* <img src="" alt="" /> */}
      </div>
      <div onClick={() => navigate("/product")}>Product</div>
      <Footer />
    </main>
  );
}
