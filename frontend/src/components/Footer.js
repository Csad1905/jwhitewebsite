import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <h3>J White Plumbing & Heating</h3>
          <p>Professional plumbing services across Suffolk</p>
          <p>Gas Safe Registered | City & Guilds Qualified</p>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>Email: Jwhiteplumbingandheating@hotmail.com</p>
          <p>Covering: Ipswich, Kesgrave, Woodbridge, Hadleigh, Sudbury and surrounding areas</p>
        </div>
        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/jwhiteplumbingheating" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 J White Plumbing & Heating. All rights reserved.</p>
        <div className="footy">
          <img src="/gassafe.jpg" alt="Gas Safe Registered" style={{ marginTop: '10px' }} />
          <img src="/cityguilds.png" alt="City & Guilds Qualified" style={{ marginTop: '10px' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;