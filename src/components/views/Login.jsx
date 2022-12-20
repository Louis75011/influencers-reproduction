import { useRef, useState } from "react";
import { useSignInEmail } from "../../services/firebase/users/common/signInEmail";
import { useSignInGoogle } from "../../services/firebase/users/common/signInGoogle";
import { useNavigate } from "react-router-dom";
import errorHandler from "../../services/firebase/error";
import "../../styles/views/Login.css";

export default function Login() {
  const signInGoogle = useSignInGoogle();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});
  const signInEmail = useSignInEmail();
  const navigate = useNavigate();

  async function handleSignInGoogle(e) {
    e.preventDefault();
    try {
      const response = await signInGoogle();
      if (response.success) {
        navigate("/");
      }
    } catch (error) {
      const msg = errorHandler(error);
      if (msg) {
        alert(msg);
      } else {
        console.log(error);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await signInEmail(
        emailRef.current.value,
        passwordRef.current.value
      );
      const { success, errors } = response;
      setFormErrors(errors ?? {});
      if (response.success) {
        navigate("/");
      }
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
      <div className="form-holder login-form">
        <h1 className="form-title">Welcome Back</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="k7AQLLInPrTygZswYnBqzSFMHtK3O59aUaNC11cNhS276nuMkpbVZFFUYIC7xdFZ"
          />
          <div className="social-login-holder">
            <div className="social-login-btn-holder">
              <div
                id="g_id_onload"
                data-client_id="995959859074-ul46r76qmskr4n8q47f05khgj1kjas7e.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="handleCredentialResponse"
                data-auto_prompt="false"
              ></div>

              <div
                className="g_id_signin"
                data-shape="rectangular"
                data-theme="filled_black"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left"
                data-width="300"
              >
                <div
                  className="S9gUrf-YoZ4jf"
                  // style="position: relative;"
                >
                  <div></div>
                  {/* <iframe
                    src="https://accounts.google.com/gsi/button?shape=rectangular&amp;theme=filled_black&amp;text=signin_with&amp;size=large&amp;logo_alignment=left&amp;width=300&amp;client_id=995959859074-ul46r76qmskr4n8q47f05khgj1kjas7e.apps.googleusercontent.com&amp;iframe_id=gsi_70771_209712&amp;as=POIuLXcVROkqQMQYWu%2BXrA"
                    id="gsi_70771_209712"
                    title='Bouton "Se connecter avec Google"'
                    style="display: block; position: relative; top: 0px; left: 0px; height: 44px; width: 320px; border: 0px; margin: -2px -10px;"
                  ></iframe> */}
                </div>
              </div>
            </div>

            <button className="signup-btn" onClick={handleSignInGoogle}>
              Se connecter à Google
            </button>

            <div className="seperator">
              <span>or</span>
            </div>
          </div>
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            ref={emailRef}
            // required
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
            ref={passwordRef}
            // required
          />
          {formErrors.password && (
            <p style={{ margin: "0 0 17px 0", color: "crimson" }}>
              {formErrors.password}
            </p>
          )}
          <button className="submit-button">Login</button>
          <div className="login-forgot forgot">Forgot password?</div>
        </form>
      </div>

      {/* <div className="modal">
        <div className="modal-content-holder"></div>
      </div> */}
    </div>
  );
}
