import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSignUpCreatorGoogle } from "../../services/firebase/users/creator/signUpGoogle";
import { useSignUpCreatorEmail } from "../../services/firebase/users/creator/signUpEmail";
import errorHandler from "../../services/firebase/error";
import Footer from "../layout/Footer";
import "../../styles/views/SignupCreator.css";

export default function SignupCreator() {
  const signUpEmail = useSignUpCreatorEmail();
  const signUpCreatorGoogle = useSignUpCreatorGoogle();
  const navigate = useNavigate();
  const { creatorName } = useParams();
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const foundUsRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});

  async function handleSignUpEmail(e) {
    e.preventDefault();
    try {
      const response = await signUpEmail(
        creatorName,
        fullNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value,
        foundUsRef.current.value
      );
      const { success, errors } = response;
      if (success) navigate("/");
      setFormErrors(errors);
    } catch (error) {
      const msg = errorHandler(error);
      if (msg) {
        alert(msg);
      } else {
        console.log(error);
      }
    }
  }

  async function handleSignUpGoogle(e) {
    e.preventDefault();
    try {
      const response = await signUpCreatorGoogle(creatorName);
      const { success, errors } = response;
      if (success) navigate("/");
      setFormErrors(errors);
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
        <form className="form" action="" onSubmit={handleSignUpEmail}>
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="SYuOh12l2nbCngDjkHeLdZSLR2XgH0BWs1HAxhwLuOkbdEFzGJOgDMST8hPkq87L"
          />
          <div className="social-login-holder">
            <div className="social-login-btn-holder">
              <button className="signup-btn" onClick={handleSignUpGoogle}>
                S'inscrire avec Google
              </button>

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
            ref={fullNameRef}
            className="input"
            type="text"
            placeholder="Full Name"
            name="name"
            id="fullname"
            minLength="2"
            maxLength="255"
            required
          />
          {formErrors.fullName && (
            <p style={{ margin: "0 0 17px 0", color: "crimson" }}>
              {formErrors.fullName}
            </p>
          )}
          <input
            ref={emailRef}
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            maxLength="255"
            required
          />
          {formErrors.email && (
            <p style={{ margin: "0 0 17px 0", color: "crimson" }}>
              {formErrors.email}
            </p>
          )}
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            ref={passwordRef}
            minLength="6"
            maxLength="255"
            required
          />
          {formErrors.password && (
            <p style={{ margin: "0 0 17px 0", color: "crimson" }}>
              {formErrors.password}
            </p>
          )}
          <select ref={foundUsRef} className="input" name="found_us" required>
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
          {formErrors.foundUs && (
            <p style={{ margin: "0 0 17px 0", color: "crimson" }}>
              {formErrors.foundUs}
            </p>
          )}

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
