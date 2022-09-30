import "./Register.css"
import { Footer } from "./Footer";

export const Register = () => {

    return (
      <>
        <div className="container register-section">
          <div className="row">
            <div className="col-md-6">
              <h4 className="text-center">Open an Account with us</h4>
              <p className="text-center">
                You are guaranteed a secure account with us. Faster transactions
                and better loan intrests.
              </p>
              <img src="./images/mobile.png" />
            </div>
            <div className="col-md-6">
              <div className="register-form">
                <h5 className="text-center">Register</h5>
                <form>
                  <input type="text" placeholder="Enter first name" />
                  <input type="text" placeholder="Enter last name" />
                  <input type="text" placeholder="Enter phone number" />
                  <input type="text" placeholder="Enter email" />
                  <input type="password" placeholder="Enter password" />
                  <input type="password" placeholder="confirm password" />

                  <button>Continue</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}