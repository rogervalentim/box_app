import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar" id="navbar">
      <div className="app__navbar-logo">
        <h1>Box Gym</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="link-navbar">
          <a href="#home">Home</a>
        </li>
        <li className="link-navbar">
          <a href="#about">About</a>
        </li>
        <li className="link-navbar">
          <a href="#history">History</a>
        </li>
        <li className="link-navbar">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#">
          <BsFacebook color="#000" fontSize={20} />
        </a>
        <a href="#">
          <BsInstagram color="#000" fontSize={20} />
        </a>
        <a href="#">
          <BsTwitter color="#000" fontSize={20} />
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="link-navbar">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="link-navbar">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="link-navbar">
                <a href="#history" onClick={() => setToggleMenu(false)}>
                  History
                </a>
              </li>
              <li className="link-navbar">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <li className="icons">
                <a href="#">
                  <BsFacebook color="#000" fontSize={20} />
                </a>
                <a href="#">
                  <BsInstagram color="#000" fontSize={20} />
                </a>
                <a href="#">
                  <BsTwitter color="#000" fontSize={20} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
