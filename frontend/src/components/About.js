import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About J White Plumbing & Heating</h2>
      <div className="about-content">
        <img src="/photojosh.jpg" alt="Josh White" />
        <div className="about-text">
          <h3>Professional Plumber in Suffolk</h3>
          <p>Hi there! I'm Josh White, your reliable professional plumber. With expertise in maintenance and installations, I deliver efficient, tailored solutions. Customer satisfaction is my priority—I strive to exceed expectations every time. Count on me for hassle-free plumbing services.</p>
          
          <h3>Why Choose J White Plumbing & Heating?</h3>
          <ul>
            <li>Gas Safe Registered</li>
            <li>City & Guilds Qualified</li>
            <li>Free Quotes and Assessments</li>
            <li>Professional and Reliable Service</li>
            <li>Covering Suffolk and Surrounding Areas</li>
          </ul>
          
          <p>At JWhite Plumbing & Heating, your consultation comes at no cost. Benefit from hassle-free plumbing advice and assessments provided by a trusted professional—no fee attached!</p>
        </div>
      </div>
      
      <div className="certifications">
        <h3>Qualifications & Certifications</h3>
        <div className="cert-images">
          <img src="/gassafe.jpg" alt="Gas Safe Registered" />
          <img src="/cityguilds.png" alt="City & Guilds Qualified" />
        </div>
      </div>
      
      <div className="brands-section">
        <h3>Trusted Brands We Work With</h3>
        <div className="brand-logos">
          <img src="/baxi.png" alt="Baxi" />
          <img src="/vailant.png" alt="Vaillant" />
          <img src="/glowworm.png" alt="Glow-worm" />
          <img src="/gledhill.png" alt="Gledhill" />
          <img src="/joule.png" alt="Joule" />
        </div>
      </div>
    </section>
  );
};

export default About;