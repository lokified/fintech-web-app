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
              <img src="./images/logo-dark.svg" />
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
                  <Link to="/card" onClick={closeMobileMenu}>
                    Cards
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link to="/login" onClick={closeMobileMenu} className = "faq-nav"> Login </Link>
                </li>

              </ul>
            </div>
          </div>

          <div className="nav_btn">
            <Link to="/login"> Login </Link>
          </div>

          <button onClick={handleClick} className="drop-btn">
            <i
              className={click ? "uil uil-multiply" : "uil uil-align-right"}
            ></i>
          </button>
        </div>
      </nav>
    </>
  );
};
