import Button from "../../components/Button/button";
import AppBar from "../../components/appbar/AppBar";

function SignUpPage() {
  return (
    <div className="vh10">
      <AppBar />

      <div className="container">
        <div className="login-form">
          <div className="form-text">
            <span className="header-text">Looks like you're new here!</span>
            <p className="sub-text">
              Sign up with your mobile number to get started
            </p>
          </div>
          <div className="main-form">
            <form action="">
              <div className="input-field">
                <input type="text" placeholder="" required />
                <label htmlFor="" className="floating-label">
                  Enter Mobile Number
                </label>
              </div>
              <div className="tc-text">
                By continoung, you aggree to Flipkart's
                <a href="/">Terms of use </a> and
                <a href="/">Privacy Policy </a>
              </div>
              <Button text="Continue" variant="otp" />
              <Button
                text="Existing User? Log in"
                variant="primary"
                style={{ width: "100%", marginTop: 20 }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
