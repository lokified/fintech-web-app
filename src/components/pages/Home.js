import React from "react"
import "./Home.css"
import { ServiceCards } from "../home/ServiceCards"
import { NewsCards } from "../home/NewsCards";
import { Faqs } from "../home/Faqs";
import { Footer } from "../Footer";

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
                <button>Get started</button>
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
                  Bird is a fully featured US bank account for non-US residents
                  (Africans) and its deposit is fully protected by US
                  government’s Federal Deposit Insurance Corporation (FDIC)
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
          <div className="container faq-section">
            <h3 className="text-center">Frequently Asked Questions</h3>

            <Faqs />
          </div>
        </section>

        <Footer />
      </>
    );
}