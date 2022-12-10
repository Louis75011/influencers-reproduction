import "../../styles/views/Login.css";

export default function Login() {
  return (
    <div id="content">
      <div className="form-holder login-form">
        <h1 className="form-title">Welcome Back</h1>
        <form className="form">
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

            <p>Se connecter à Google</p>

            <div className="seperator">
              <span>or</span>
            </div>
          </div>
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            required=""
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            required=""
          />
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
