
import "./Footer.css"
import { Link } from "react-router-dom";

export const Footer = () => {

    return (
      <>
        <section>
          <footer>
            <div className="container footer-section">
              <div className="footer-main">
                <div className="footer-section-1">
                  <img src="./images/logo-white.svg" />
                  <div>
                    Bird is an international banking app that offers to non-US
                    residents and businesses a fully featured US-domiciled, FDIC
                    insured bank account with debit cards, international and
                    local transfers, wealth building account, payment
                    consolidation and a checkout solution.
                  </div>
                </div>

                <div className="footer-section-2">
                  <h6>services</h6>
                  <div>
                    <p>Personal banking</p>
                    <p>Premier banking</p>
                    <p>Mobile banking</p>
                    <p>Voice banking</p>
                  </div>
                </div>

                <div className="footer-section-3">
                  <h6>support</h6>
                  <div>
                    <p>Blog</p>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                    <p>Terms and conditions</p>
                    <Link to="/contact">Contact Us</Link>
                  </div>
                </div>

                <div className="footer-section-4">
                  <h6>socials</h6>
                  <div className="socials">
                    <img src="./images/facebook.svg" />
                    <img src="./images/twitter.svg" />
                    <img src="./images/linkedIn.svg" />
                  </div>
                </div>
              </div>
              <div className="footer-end">
                <p className="text-center">2022 Bird.All right reserved</p>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
}