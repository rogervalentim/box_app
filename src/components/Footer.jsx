import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <h1>Box Gym</h1>
      <ul>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Cookies</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">History</a>
        </li>
        <li>
          <a href="#">Forum</a>
        </li>
        <li>
          <a href="#">Store</a>
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
