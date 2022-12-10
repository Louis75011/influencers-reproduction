import { Link, NavLink } from "react-router-dom";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

import "../../styles/layout/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container-information">
        <div className="section">
          <p className="category-title">Resources</p>
          <Link className="link-element">Blog</Link>
          <Link className="link-element">Creator Hub</Link>
          <Link className="link-element">Affiliate Program</Link>
          <Link className="link-element">TikTok Ebook For Brands</Link>
          <Link className="link-element">2022 Influencer Marketing Report</Link>
        </div>
        <div className="section">
          <p className="category-title">Tools</p>
          <Link className="link-element">Influencer Price Calculator</Link>
          <Link className="link-element">
            Instagram Engagement Rate Calculator
          </Link>
          <Link className="link-element">
            Influencer Campaign Brief Template
          </Link>
          <Link className="link-element">TikTok Ebook For Brands</Link>
          <Link className="link-element">Influencer Contract Template</Link>
        </div>
        <div className="section">
          <p className="category-title">Discover</p>
          <Link className="link-element">Find Influencers</Link>
          <Link className="link-element">Hire Influencers</Link>
          <Link className="link-element">Search Influencers</Link>
          <Link className="link-element">Buy Content</Link>
          <Link className="link-element">Buy Shoutouts</Link>
          <Link className="link-element">Influencer Marketplace</Link>
          <Link className="link-element">Top Influencers</Link>
        </div>
        <div className="section">
          <p className="category-title">Support</p>
          <Link className="link-element">Contact Us</Link>
          <Link className="link-element">How It Works</Link>
          <Link className="link-element">Frequently Asked Questions</Link>
        </div>
      </div>
      <div className="down-menu">
        <div className="down-menu-info">
          <p>© Collabstr Inc.</p>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Terms</p>
          <p className="cursor-pointer">Sitemap</p>
        </div>
        <div className="down-menu-icon">
          <div className="link-img">
            <a
              href="https://www.instagram.com/collabstr/?hl=fr"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
            <a href="https://tiktok.com/@collabstr.com" target="_blank">
              <FaTiktok />
            </a>
            <a href="https://twitter.com/@usecollabstr" target="_blank">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
