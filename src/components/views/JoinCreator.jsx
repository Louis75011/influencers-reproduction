import { useRef } from "react";
import { useFirebaseUsers } from "../../services/firebase/users";
import errorHandler from "../../services/firebase/error";
import Footer from "../layout/Footer";
import "../../styles/views/Join.css";

export default function JoinCreator() {
  const { signUpCreator } = useFirebaseUsers();
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(fullNameRef.current.value);
      await signUpCreator(
        fullNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (error) {
      const msg = errorHandler(error);
      if (msg) {
        alert(msg);
      } else {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname :</label>
        <input type="text" id="fullname" ref={fullNameRef} />
        <label htmlFor="fullname">Email :</label>
        <input type="email" id="email" ref={emailRef} />
        <label htmlFor="fullname">Password :</label>
        <input type="password" id="password" ref={passwordRef} />
        <button>Sign up</button>
      </form>

      {/* <div id="content">
    <div class="hero-holder">
        <h1 class="hero-title">Power Your Brand Deals</h1>
        <h2 class="hero-subtitle">The simple way to sell, manage, and get paid for your Instagram, TikTok, and YouTube brand deals</h2>

        <div class="username-holder">
            <div class="username-domain">collabstr.com/</div>
            <div class="username-input-holder">
                <input type="text" class="username-input" placeholder="yourname">
            </div>
            <div class="username-btn">Claim</div>
        </div>
    </div>

    <div class="hero-img-holder">
        <video class="hero-vid" playsinline="" autoplay="" muted="" loop="">
            <source src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/hero.mp4">
        </video>
        <img class="platform-img ig-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/ig.svg" alt="Instagram Logo">
        <img class="platform-img tiktok-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/tiktokHome.svg" alt="TikTok Logo">
        <img class="platform-img youtube-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/youtubeHome.svg" alt="Youtube Logo">
    </div>

    <div class="row-holder">
        <h2 class="row-title row-title-center title-gradient">Loved by 60,000+ Creators</h2>
        <div class="niches">
            <div class="niche">Lifestyle</div>
            <div class="niche">Fashion</div>
            <div class="niche">Beauty</div>
            <div class="niche">Travel</div>
            <div class="niche">Health &amp; Fitness</div>
            <div class="niche">Family &amp; Children</div>
            <div class="niche">Music &amp; Dance</div>
            <div class="niche">Comedy &amp; Entertainment</div>
        </div>
        <div class="listing-row">
            
                <div class="featured-profile-listing-holder">
    
        <a href="/sophiiaisabella" target="_blank"><span class="link-spanner"></span></a>
    
    <div class="profile-listing-img-holder">
        

        
        <img loading="lazy" class="profile-listing-img" src="https://d5ik1gor6xydq.cloudfront.net/sellers/27346/16308957463908727.jpg" alt="  creator Sophia Isabella being photographed">
        <div class="profile-listing-owner-holder">
            <div class="profile-listing-owner-info-holder">
                <div class="profile-listing-owner-name">Sophia Isabella</div>
                <div class="profile-listing-owner-location">Toronto, ON, CA</div>
            </div>
        </div>
    </div>

    <div class="profile-listing-info-row">
        <div class="profile-listing-category">Instagram</div>
        <div class="profile-listing-price">$170</div>
    </div>
    <h3 class="profile-listing-title">Fashion | Lifestyle | Wellness | Beauty</h3>
    
</div>
            
                <div class="featured-profile-listing-holder">
    
        <a href="/uriah" target="_blank"><span class="link-spanner"></span></a>
    
    <div class="profile-listing-img-holder">
        

        
        <img loading="lazy" class="profile-listing-img" src="https://d5ik1gor6xydq.cloudfront.net/sellers/7563/16276319636246264.jpg" alt="  creator Uriah Shelton being photographed">
        <div class="profile-listing-owner-holder">
            <div class="profile-listing-owner-info-holder">
                <div class="profile-listing-owner-name">Uriah Shelton</div>
                <div class="profile-listing-owner-location">Los Angeles, CA, US</div>
            </div>
        </div>
    </div>

    <div class="profile-listing-info-row">
        <div class="profile-listing-category">Instagram</div>
        <div class="profile-listing-price">$3000</div>
    </div>
    <h3 class="profile-listing-title">Public Figure, Celebrity, Actor, Motorcycle Enthu…</h3>
    
</div>
            
                <div class="featured-profile-listing-holder">
    
        <a href="/laurengastineau" target="_blank"><span class="link-spanner"></span></a>
    
    <div class="profile-listing-img-holder">
        

        
        <img loading="lazy" class="profile-listing-img" src="https://d5ik1gor6xydq.cloudfront.net/sellers/34748/16565322863229637.jpg" alt="  creator Lauren Gastineau being photographed">
        <div class="profile-listing-owner-holder">
            <div class="profile-listing-owner-info-holder">
                <div class="profile-listing-owner-name">Lauren Gastineau</div>
                <div class="profile-listing-owner-location">Portland, OR, US</div>
            </div>
        </div>
    </div>

    <div class="profile-listing-info-row">
        <div class="profile-listing-category">Instagram</div>
        <div class="profile-listing-price">$200</div>
    </div>
    <h3 class="profile-listing-title">Pnw Adventure &amp; Inspiration Content Creator </h3>
    
</div>
            
                <div class="featured-profile-listing-holder">
    
        <a href="/chiaramarie" target="_blank"><span class="link-spanner"></span></a>
    
    <div class="profile-listing-img-holder">
        

        
        <img loading="lazy" class="profile-listing-img" src="https://d5ik1gor6xydq.cloudfront.net/sellers/14370/1627633318897665.jpg" alt="  creator Chiara Marie being photographed">
        <div class="profile-listing-owner-holder">
            <div class="profile-listing-owner-info-holder">
                <div class="profile-listing-owner-name">Chiara Marie</div>
                <div class="profile-listing-owner-location">Karlsruhe, BW, DE</div>
            </div>
        </div>
    </div>

    <div class="profile-listing-info-row">
        <div class="profile-listing-category">Instagram</div>
        <div class="profile-listing-price">$2000</div>
    </div>
    <h3 class="profile-listing-title">Positive Vibes, Portraits, Fashion &amp; Inspirationa…</h3>
    
</div>
            
        </div>
    </div>

    
<div>
    <div class="logo-title">As seen in</div>
    <div class="logo-holder">
        <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/buzzfeed.svg" alt="Buzzfeed logo" loading="lazy">
        <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/bloomberg.svg" alt="Bloomberg logo" loading="lazy">
        <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/nyt.svg" alt="New York Times logo" style="width: 175px;" loading="lazy">
        <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/yahoo.svg" alt="Yahoo logo" loading="lazy">
        <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/shopify.svg" alt="Shopify logo" loading="lazy">
    </div>
</div>

    <div class="row-holder">
        <h2 class="row-title" id="how-it-works">How Collabstr Works</h2>
        <h3 class="row-subtitle">Everything you need to run your business as an influencer, and more.</h3>
        <div class="steps-holder">
            <div class="step-holder">
                <img loading="lazy" class="step-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step1.png" alt="Influencer posing">
                <div class="step-txt-holder">
                    <div class="step-num">1</div>
                    <h3 class="step-title">Create Your Page</h3>
                    <div class="step-txt">Create your personal page and list your services for Instagram, TikTok, YouTube, and UGC.</div>
                </div>
            </div>
            <div class="step-holder">
                <img loading="lazy" class="step-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step2.png" alt="Influencer posing">
                <div class="step-txt-holder">
                    <div class="step-num">2</div>
                    <h3 class="step-title">Share Your Link</h3>
                    <div class="step-txt">Share your custom link in your bio and social media. Brands can view and purchase your services.</div>
                </div>
            </div>
            <div class="step-holder">
                <img loading="lazy" class="step-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step3.png" alt="Influencer posing">
                <div class="step-txt-holder">
                    <div class="step-num">3</div>
                    <h3 class="step-title">Start Earning</h3>
                    <div class="step-txt">Easily manage brand deals and get paid for your work directly through the platform.</div>
                </div>
            </div>
        </div>
    </div>

    <div class="row-holder">
        <div class="features-holder">
            <div class="feature-holder">
                <div class="feature-title"><img class="feature-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/sell.svg" alt="Sell icon" loading="lazy">Get Brand Deals</div>
                <div class="feature-txt">Get discovered by thousands of brands on our marketplace looking to work with you.</div>
            </div>
            <div class="feature-holder">
                <div class="feature-title"><img class="feature-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/check.svg" alt="Check icon" loading="lazy">Manage Collabs</div>
                <div class="feature-txt">Easily keep track of brand deals and deadlines. Submit deliverables directly through the platform.</div>
            </div>
            <div class="feature-holder">
                <div class="feature-title"><img class="feature-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/money.svg" alt="Money icon" loading="lazy">Always Get Paid</div>
                <div class="feature-txt">Funds are collected upfront and transferred to your bank account when you complete the collaboration.</div>
            </div>
            <div class="feature-holder">
                <div class="feature-title"><img class="feature-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/link.svg" alt="link icon" loading="lazy">Custom Link</div>
                <div class="feature-txt">Share your custom URL in your link in bio and with brands. Drive traffic to your page and get more brand deals.</div>
            </div>
            <div class="feature-holder">
                <div class="feature-title"><img class="feature-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/chat.svg" alt="Chat icon" loading="lazy">Instant Chat</div>
                <div class="feature-txt">Receive messages from brands and communicate instantly throughout the whole collaboration.</div>
            </div>
            <div class="feature-holder">
                <div class="feature-title"><img class="feature-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/tax.svg" alt="Tax icon" loading="lazy">Taxes Made Simple</div>
                <div class="feature-txt">We handle the filing of your 1099 forms. No more worrying about tax season.</div>
            </div>

            <div class="feature-holder empty-feature-holder">
                <div class="feature-title"></div>
                <div class="feature-txt"></div>
            </div>
            <div class="feature-holder empty-feature-holder">
                <div class="feature-title"></div>
                <div class="feature-txt"></div>
            </div>
        </div>
    </div>


    <div class="row-holder">
        <h2 class="row-title">Work with 20,000+ Brands</h2>
        <h3 class="row-subtitle">Collaborate with brands like Wealthsimple, ClickUp, Deezer, and many more.</h3>
        <div class="listing-row">
            <div class="content-holder">
                <div class="play-btn-holder">
                    <img class="play-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/play.svg" loading="lazy">
                </div>
                <video class="content-img content-vid" playsinline="" preload="metadata">
                    <source src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/1.mp4#t=0.1">
                </video>
            </div>

            <div class="content-holder">
                <a href="https://www.instagram.com/p/CN546zuBXwr/" target="_blank"><span class="link-spanner"></span></a>
                <img loading="lazy" class="content-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/2.png" alt="Influencer content">
            </div>

            <div class="content-holder">
                <div class="play-btn-holder">
                    <img class="play-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/play.svg" loading="lazy">
                </div>
                <video class="content-img content-vid" playsinline="" preload="metadata">
                    <source src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/3.mp4#t=0.1">
                </video>
            </div>

            <div class="content-holder">
                <a href="https://www.instagram.com/p/CB3KJUdB3Sq/" target="_blank"><span class="link-spanner"></span></a>
                <img loading="lazy" class="content-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/4.png" alt="Influencer content">
            </div>

            <div class="content-holder">
                <div class="play-btn-holder">
                    <img class="play-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/play.svg" loading="lazy">
                </div>
                <video class="content-img content-vid" playsinline="" preload="metadata">
                    <source src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/content/5.mp4#t=0.1">
                </video>
            </div>
        </div>

        <div class="logo-holder">
            <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/wealthsimple.svg" alt="Wealthsimple logo" loading="lazy">
            <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/clickup.svg" alt="ClickUp logo" loading="lazy">
            <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/hopper.svg" alt="Hopper logo" loading="lazy">
            <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/un.svg" alt="United Nations logo" loading="lazy">
            <img class="logo-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos/deezer.svg" alt="Deezer logo" loading="lazy">
        </div>
    </div>


    <div class="faqs-holder">
        <div class="faq-holder">
            <div class="faq-title-holder">
                <h3 class="faq-question">How do I get paid?</h3>
                <img class="faq-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg" loading="lazy">
            </div>

            <div class="faq-answer">Payments are made directly through our website. We use <a href="https://stripe.com/" target="_blank">Stripe</a> as our payment processor and support all major credit &amp; debit cards. Once you complete an order, we will deposit the money into your bank account.</div>
        </div>

        <div class="faq-holder">
            <div class="faq-title-holder">
                <h3 class="faq-question">How much does it cost?</h3>
                <img class="faq-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg" loading="lazy">
            </div>

            <div class="faq-answer">There is no up-front cost. We take a 15% transaction fee when you make a sale.</div>
        </div>

        <div class="faq-holder">
            <div class="faq-title-holder">
                <h3 class="faq-question">Is my payment guaranteed?</h3>
                <img class="faq-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg" loading="lazy">
            </div>

            <div class="faq-answer">Yes, we collect the payment from the buyer and hold it until the order is complete. This ensures that both sides are protected during every transaction.</div>
        </div>

        <div class="faq-holder">
            <div class="faq-title-holder">
                <h3 class="faq-question">Can I decline orders?</h3>
                <img class="faq-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg" loading="lazy">
            </div>
            <div class="faq-answer">Yes, you are able to accept or decline an order. This gives you the freedom to only work with brands that align with you.</div>
        </div>

        <div class="faq-holder">
            <div class="faq-title-holder">
                <h3 class="faq-question">What platforms does Collabstr support?</h3>
                <img class="faq-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg" loading="lazy">
            </div>
            <div class="faq-answer">Currently you can list your services for Instagram, TikTok, YouTube, Twitch, Twitter and UGC.</div>
        </div>

        <div class="faq-holder">
            <div class="faq-title-holder">
                <h3 class="faq-question">Do I need to connect to Stripe?</h3>
                <img class="faq-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg" loading="lazy">
            </div>
            <div class="faq-answer">Yes, Stripe is what we use to collect payments and make direct deposits to your bank account. Stripe is used by apps like Lyft and Instacart. Stripe also provides invoices and tax forms for your convenience. Any information you enter into Stripe is not accessible by Collabstr.</div>
        </div>

        <div class="faq-holder">
            <div class="faq-title-holder">
                <h3 class="faq-question">Are there binding contracts?</h3>
                <img class="faq-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg" loading="lazy">
            </div>
            <div class="faq-answer">No, we do not ask you to sign any contracts. We are a self-serve platform, you are free to manage your own deals without our involvement. We simply provide the platform for you to advertise your services to brands.</div>
        </div>

        <div class="faq-holder">
            <div class="faq-title-holder">
                <h3 class="faq-question">Are you an agency?</h3>
                <img class="faq-btn" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg" loading="lazy">
            </div>
            <div class="faq-answer">No, we are not an agency. We are a platform for you to advertise your services, and manage your own brand deals.</div>
        </div>
    </div>

    <div class="cta-holder">
        <div class="cta-overlay-holder">
            <div class="cta-txt-holder">
                <h2 class="cta-title">Power Your Brand Deals</h2>
                <h3 class="cta-txt">Join 60,000+ Creators using Collabstr to Power their Brand Deals</h3>
                <div class="cta-btn btn">Create Page</div>
            </div>
        </div>
        <img loading="lazy" alt="top influencers" class="cta-img" src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/cta.png">
    </div>
</div> */}

      <Footer />
    </div>
  );
}
