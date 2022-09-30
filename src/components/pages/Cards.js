import "./Cards.css"
import { Footer } from "../Footer"

export const Cards = () => {

    return (
      <>
        <section>
          <div className="container cards-section">
            <div className="row">
              <div className="col-md-6 credit-card-section">
                <h6>CREDIT CARDS</h6>
                <div className="credit-card">
                  <img src="./images/credit-card.svg" />
                  <div className="credit-desc">
                    <h6>GOLD CREDIT CARD</h6>
                    <p>Enjoy 5% Cashback on your bills.</p>
                  </div>
                </div>
                <div className="credit-card">
                  <img src="./images/credit-card.svg" />
                  <div className="credit-desc">
                    <h6>PLATINUM CREDIT CARD</h6>
                    <p>Enjoy rewards points on everyday spends.</p>
                  </div>
                </div>
                <div className="credit-card">
                  <img src="./images/credit-card.svg" />
                  <div className="credit-desc">
                    <h6>INFINITE CREDIT CARD</h6>
                    <p>
                      Go further with the reward points and travel privileges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 debit-card-section">
                <h6>DEBIT CARDS</h6>
                <div className="credit-card">
                  <img src="./images/credit-card.svg" />
                  <div className="credit-desc">
                    <h6>GOLD DEBIT CARD</h6>
                    <p>Earn reward points for every sale.</p>
                  </div>
                </div>
                <div className="credit-card">
                  <img src="./images/credit-card.svg" />
                  <div className="credit-desc">
                    <h6>PLATINUM DEBIT CARD</h6>
                    <p>
                      Enjoy fabolous dining, shopping, lifestyle rewards all
                      year round.
                    </p>
                  </div>
                </div>
                <div className="credit-card">
                  <img src="./images/credit-card.svg" />
                  <div className="credit-desc">
                    <h6>INFINITE DEBIT CARD</h6>
                    <p>
                      Access over 800 airport lounges all around the world for
                      free.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <div className="credit-desc">
                <h6>Important information</h6>
                <p>
                  Enjoy unlimited cashback on everday spends.
                </p>
              </div>

              <div className="credit-desc">
                <h6>Contactless credit card</h6>
                <p>
                    You can now pay with your card using Tap to PAy contactless technology.
                </p>
              </div>

              <div className="credit-desc">
                <h6>Easy payment plan</h6>
                <p>
                  Split your bills enjoy hassle free shopping experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
}