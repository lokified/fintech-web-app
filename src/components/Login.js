import { Link } from "react-router-dom";
import "./Login.css"
import { Footer } from "./Footer"

export const Login = () => {

    return (
      <>
        <div className="container login-section">
          <div className="row">
            <div className="col-md-6">
              <h4 className="text-center">Lets login</h4>
              <img src="./images/cyber-criminal.svg" />
            </div>
            <div className="col-md-6">
              <div className="login-form">
                <h5 className="text-center">Login</h5>
                <form>
                  <input type="text" placeholder="Enter phone number" />
                  <input type="password" placeholder="Enter password" />

                  <button>Login</button>

                  <Link to="/forgotPassword">forgot password ?</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}