import { useRef, useState } from "react";
import { useFirebaseUsers } from "../../services/firebase/users";
import errorHandler from "../../services/firebase/error";
import Footer from "../layout/Footer";
import "../../styles/views/SignupCreator.css";

export default function SignupCreator() {
  const { signUpCreator } = useFirebaseUsers();
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});

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
    <div id="content">
      <div className="form-holder">
        <h1 className="form-title">Create Your Page</h1>
        <form className="form" action="" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="SYuOh12l2nbCngDjkHeLdZSLR2XgH0BWs1HAxhwLuOkbdEFzGJOgDMST8hPkq87L"
          />
          <div className="social-login-holder">
            <div className="social-login-btn-holder">
              <div
                id="g_id_onload"
                data-client_id="995959859074-ul46r76qmskr4n8q47f05khgj1kjas7e.apps.googleusercontent.com"
                data-context="signup"
                data-ux_mode="popup"
                data-callback="handleCredentialResponse"
                data-auto_prompt="false"
              ></div>

              {/* <div
                className="g_id_signin"
                data-shape="rectangular"
                data-theme="filled_black"
                data-text="signup_with"
                data-size="large"
                data-logo_alignment="left"
                data-width="300"
              >
                <div
                  className="S9gUrf-YoZ4jf"
                  // style="position: relative;"
                >
                  <div></div>
                  <iframe
                    src="https://accounts.google.com/gsi/button?shape=rectangular&amp;theme=filled_black&amp;text=signup_with&amp;size=large&amp;logo_alignment=left&amp;width=300&amp;client_id=995959859074-ul46r76qmskr4n8q47f05khgj1kjas7e.apps.googleusercontent.com&amp;iframe_id=gsi_223463_412022&amp;as=2%2Fi22BNdEZwSWjcvYjgpew"
                    id="gsi_223463_412022"
                    title='Bouton "Se connecter avec Google"'
                    // style="display: block; position: relative; top: 0px; left: 0px; height: 44px; width: 320px; border: 0px; margin: -2px -10px;"
                  ></iframe>
                </div>
              </div> */}
            </div>
            <div className="seperator">
              <span>or</span>
            </div>
          </div>
          <input
            className="input"
            type="text"
            placeholder="Full Name"
            name="name"
            id="fullname"
            ref={fullNameRef}
            minLength="2"
            required=""
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            ref={emailRef}
            required=""
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            ref={passwordRef}
            minLength="6"
            required=""
          />
          <select className="input" name="found_us" required="">
            <option value="" disabled="" hidden="">
              How did you hear about us?
            </option>
            <option value="Friend/Colleague">Friend/Colleague</option>
            <option value="Google">Google</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Reddit">Reddit</option>
            <option value="Other">Other</option>
          </select>
          <input type="hidden" name="social_login" />
          <button className="submit btn">Sign Up</button>
          <div className="login-signup">
            By signing up, you agree to our <a href="/terms">Terms</a> and{" "}
            <a href="/privacy">Privacy Policy.</a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
