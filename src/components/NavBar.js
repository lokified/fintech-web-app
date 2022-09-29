import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav>
        <div className=" container nav-items">
          <div className=" nav-section">
            <Link to="/" className="logo">
              <img src="../images/logo-dark.svg" />
            </Link>
            <div>
              <ul className={click ? "links active" : "links"}>
                <li>
                  <Link to="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/product" onClick={closeMobileMenu}>
                    Products
                  </Link>
                </li>

                <li>
                  <Link to="/blog" onClick={closeMobileMenu}>
                    Blog
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link onClick={closeMobileMenu} className = "faq-nav"> FAQs </Link>
                </li>

              </ul>
            </div>
          </div>

          <div className="nav_btn">
            <button> FAQs </button>
          </div>

          <button onClick={handleClick} className="drop-btn">
            <i
              className={click ? "uil uil-multiply" : "uil uil-align-left"}
            ></i>
          </button>
        </div>
      </nav>
    </>
  );
};