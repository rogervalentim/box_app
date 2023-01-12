import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="app__navbar-logo">
        <h1>Box Gym</h1>
      </div>
      <ul>
        <li>
          <a href="#">PRIVACY</a>
        </li>
        <li>
          <a href="#">COOKIES</a>
        </li>
        <li>
          <a href="#">HELP</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">TERMS</a>
        </li>
        <li>
          <a href="#">EMAIL</a>
        </li>
        <li>
          <a href="#">SEARCH</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">HISTORY</a>
        </li>
        <li>
          <a href="#">FORUM</a>
        </li>
        <li>
          <a href="#">STORE</a>
        </li>
      </ul>
      <div className="icons">
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
    </footer>
  );
};

export default Footer;
