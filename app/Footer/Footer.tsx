import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import './Footer.css';

const Footer = () => {
  return <>
    <footer className="footer">
      <hr className="footer-divider" />
      <div className="footer-content">
        <h3>Ensinando Java</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/ensinandojava/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="instagram" size={48} />
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="linkedin" size={48} />
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <AiFillYoutube className="youtube" size={48} />
          </a>
        </div>
      </div>
    </footer>
  </>
}

export default Footer;