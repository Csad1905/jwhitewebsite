import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.querySelector(sectionId);
      if (section) {
        const navbarHeight = document.querySelector('header').offsetHeight;
        const additionalOffset = 100;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - additionalOffset;
        
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    }
    closeMobileMenu();
  };

  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/jwhiteplumbingheating';
  };

  return (
    <header id="header">
      <div className="header-content">
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Link to="/">
          <img src="/jwhite logo.png" alt="J White Plumbing & Heating" id="mainlogo" />
        </Link>
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/" onClick={() => scrollToSection('#home')}>Home</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('#services')}>Services</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('#about')}>About</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('#mywork')}>My Work</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('#contact')}>Contact</Link></li>
            <li id="facebook">
              <a href="#facebook" onClick={handleFacebookClick}>
                <img src="/facebook.png" id="facebookpic" alt="Facebook" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          <div className="close-menu" onClick={closeMobileMenu}>&times;</div>
          <ul>
            <li><Link to="/" onClick={() => scrollToSection('#home')}>Home</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('#services')}>Services</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('#about')}>About</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('#mywork')}>My Work</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('#contact')}>Contact</Link></li>
            <li id="facebook">
              <a href="#facebook" onClick={handleFacebookClick}>
                <img src="/facebook.png" id="facebookpic" alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;