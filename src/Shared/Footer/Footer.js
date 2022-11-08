import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../asset/favicon.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className="h-10 w-auto" src={favicon} alt="" />
          <h3 className="text-2xl">MediGuide</h3>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to={""} className="link link-hover">
            Branding
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to={""} className="link link-hover">
            About us
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to={""} className="link link-hover">
            Terms of use
          </Link>
          <Link to={""} className="link link-hover">
            Privacy policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
