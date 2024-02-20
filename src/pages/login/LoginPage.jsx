import Button from "../../components/Button/button";
import AppBar from "../../components/appbar/AppBar";
import CustomInput from "../../components/custominput/CustomInput";
import "./login.css";
function LoginPage() {
  return (
    <div className="vh10">
      <AppBar />

      <div className="container">
        <div className="login-form">
          <div className="form-text">
            <span className="header-text">Login</span>
            <p className="sub-text">
              Get access tp your Orders, Wishlist and Recommendations
            </p>
          </div>
          <div className="main-form">
            <form action="">
              <div className="input-field">
                <input type="text" placeholder="" required />
                <label htmlFor="" className="floating-label">
                  Enter Email/Mobile Number
                </label>
              </div>
              <div className="tc-text">
                By continoung, you aggree to Flipkart's
                <a href="/">Terms of use </a> and
                <a href="/">Privacy Policy </a>
              </div>
              <Button text="Request OTP" variant="otp" />
            </form>
            <div className="create-account">
              New to Flipkart? <a href="/">Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
