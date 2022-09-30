import React from "react"
import "./Home.css"
import { ServiceCards } from "../home/ServiceCards"
import { NewsCards } from "../home/NewsCards";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";

export const Home = () => {

    return (
      <>
        <section>
          <div className=" intro-section">
            <div className=" container intro-content">
              <h6 className="intro-header">
                Banking & Transfers <br /> at your Fingertips
              </h6>

              <p className="intro-description">
                Bird is a fully featured US bank account for non-US residents
                (Africans) and its deposit is fully protected by US government’s
                Federal Deposit Insurance Corporation (FDIC)
              </p>

              <div className="intro-btn">
                <Link to = "/openAccount">Get started</Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container services-section">
            <div className="row">
              <div className="col-md-6 service-header">
                <h1>What you will do</h1>
              </div>
              <div className="col-md-6">
                <ServiceCards />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container inside-section">
            <div className="row">
              <div className="col-md-6 inside-description">
                <h1>Inside Bird</h1>
                <p>
                  Our undertaking is two pronged: to empower our clients and stakehoders both socially and economically.
                  We have made banking more efficient, enabling people to turn visions into reality.
                </p>

                <button>Read more</button>
              </div>

              <div className="col-md-6 inside-img">
                <img src="./images/grow.jpg" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container news-section">
            <h3 className="text-white text-center p-5">Latest News</h3>

            <NewsCards />
          </div>
        </section>

        <section>
          <div className="container help-section">
            <div className="help-menu">
              <h4>Problems? Visit our help center</h4>

              <div className="help-menu-items">
                <li>Compliments&complaints</li>
                <li>Locate Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Fees and Charges</li>
                <li>Forms and Consumer Guides</li>
              </div>
            </div>

            <div className="help">
              <h6>Lost Card?</h6>
              <p>Get urgent help in case your card was lost or Stolen</p>
              <button>LEARN MORE</button>
            </div>

            <div className="help">
              <h6>Information</h6>
              <p>Frequently askked questions and useful information</p>
              <button>LEARN MORE</button>
            </div>

            <div className="help">
              <h6>Call us</h6>
              <p>Contact our client contact centre for immediate assistance</p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
}