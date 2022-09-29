import "./Product.css"
import {Footer} from "../Footer"

export const Product = () => {

    return (
      <>
        <div className="products-section">
          <h1 className="text-center">Our Products</h1>
          <div className="products">
            <div className="product">
              <img src="/images/money-transfer.svg" />
              <h5>Internet Banking</h5>
              <p>
                Keep track of your finances and stay in control of your account.
              </p>
            </div>

            <div className="product">
              <img src="/images/wallet.svg" />
              <h5>Mobile App</h5>
              <p>
                The solution to all your basic banking needs, right at your
                fingertips.
              </p>
            </div>

            <div className="product">
              <img src="/images/credit-card.svg" />
              <h5>Cards</h5>
              <p>
                TGet access to debit and credit cards for easier transaction and a secure way of.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
}