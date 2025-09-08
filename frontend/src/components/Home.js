import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import axios from 'axios';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    reviewerName: '',
    rating: 0,
    description: ''
  });

  const locations = [
    { name: "Ipswich", coords: [52.056736, 1.148220] },
    { name: "Kesgrave", coords: [52.0707, 1.2322] },
    { name: "Woodbridge", coords: [52.0907, 1.3169] },
    { name: "Hintlesham", coords: [52.0066, 0.9921] },
    { name: "Hadleigh", coords: [52.0451, 0.9567] },
    { name: "Sudbury", coords: [52.0393, 0.7313] },
    { name: "Stowmarket", coords: [52.1885, 0.9977] },
    { name: "Needham Market", coords: [52.1521, 0.9916] }
  ];

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reviews', newReview);
      setNewReview({ reviewerName: '', rating: 0, description: '' });
      fetchReviews();
      alert('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review.');
    }
  };

  const getStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <div>
      <section id="home"> 
        <div className="toppage">
          <img src="/bannerpc.jpeg" alt="Professional plumbing services banner" className="banner-image" />
        </div>
        <div className="additional-section-1">
          <div className="content">
            <img src="/work1.jpeg" alt="Image 1" />
            <div className="text">
              <h2>Professional Plumber in Suffolk</h2>
              <p>Hi there! I'm Josh White, your reliable professional plumber. With expertise in maintenance and installations, I deliver efficient, tailored solutions. Customer satisfaction is my priority—I strive to exceed expectations every time. Count on me for hassle-free plumbing services.</p>
            </div>
          </div>
        </div>
      
        <div className="additional-section">
          <div className="content">
            <div className="text">
              <h2>Why pay for a Quote?</h2>
              <p>Discover Free, Tailored Plumbing Assessments
                At JWhite Plumbing & Heating, Your Consultation Comes at No Cost
                Benefit from Hassle-Free Plumbing Advice and Assessments
                Provided by a Trusted Professional—No Fee Attached!</p>
            </div>
            <img src="/work2.jpeg" alt="Image 2" />
          </div>
        </div>
        <div className="button-holder">
          <a href="#contact" className="quote-button">Get a Free Quote Now!</a>
        </div>
      </section>
      
      <section id="services">
        <h2 id="servicestitle">Below are the plumbing services I provide:</h2>
        <div id="services-container">
          <div className="service-item">
            <img src="/burstpipe.png" alt="Burst Pipes" />
            <div className="service-text">
              <h3>Burst Pipes</h3>
              <p>Burst pipes are a common plumbing issue, especially during colder months. I offer prompt repair services to minimize damage to your property.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-text">
              <h3>Boiler Fittings + Replacement</h3>
              <p>Boiler fittings and replacement encompass the installation, repair, or upgrade of components in a heating system. I offer fittings and replacements of new boilers.</p>
            </div>
            <img src="/boiler fitting.png" alt="Boiler Fitting" />
          </div>
          <div className="service-item">
            <img src="/centralheating.jpg" alt="Central Heating" />
            <div className="service-text">
              <h3>Central Heating Installation</h3>
              <p>Central heating installation involves setting up or upgrading components in a central heating system such as radiators or thermostats.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-text">
              <h3>Power Flushing</h3>
              <p>Power flushing is a cleaning process used to remove sludge, rust, debris, and other contaminants from the central heating system's pipes, radiators, and boiler.</p>
            </div>
            <img src="/powerflush.jpg" alt="Power Flushing" />
          </div>
          <div className="service-item">
            <img src="/wrench.png" alt="Boiler Servicing" />
            <div className="service-text">
              <h3>Boiler Servicing</h3>
              <p>Boiler servicing is a preventative maintenance procedure performed by qualified technicians to ensure the safe, efficient, and reliable operation of a boiler.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-text">
              <h3>General Plumbing</h3>
              <p>General plumbing services are essential for ensuring the proper functioning, safety, and efficiency of plumbing systems in residential, commercial, and industrial buildings.</p>
            </div>
            <img src="/genplumb.jpg" alt="General Plumbing" />
          </div>
          <div className="service-item">
            <img src="/landcert.png" alt="Landlord Certificates" />
            <div className="service-text">
              <h3>Landlord Certificates</h3>
              <p>Landlord certificates, also known as gas safety certificates, are legal requirements ensuring that gas appliances in rental properties are safe for tenants.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-text">
              <h3>Bathroom Installations</h3>
              <p>Bathroom installation requires careful planning, skilled craftsmanship, and attention to detail to create a functional, stylish, and comfortable space.</p>
            </div>
            <img src="/bathroom.jpg" alt="Bathroom Installation" />
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About J White Plumbing & Heating</h2>
        <div className="about-content">
          <img src="/photojosh.jpg" alt="Josh White" />
          <div className="about-text">
            <p>Professional plumber with years of experience serving Suffolk and surrounding areas. Specializing in boiler installations, central heating, and general plumbing services.</p>
          </div>
        </div>
        <div className="certifications">
          <img src="/gassafe.jpg" alt="Gas Safe Registered" />
          <img src="/cityguilds.png" alt="City & Guilds Qualified" />
        </div>
      </section>

      <section id="mywork">
        <h2>Areas I Cover</h2>
        <div id="map" style={{ height: '400px', width: '100%' }}>
          <MapContainer 
            center={[52.056736, 1.148220]} 
            zoom={10} 
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
            dragging={true}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={19}
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.coords} />
            ))}
          </MapContainer>
        </div>
        
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <div id="reviews-container">
            {reviews.map((review) => (
              <div key={review.id} className="review">
                <h3>{review.reviewerName} - {getStars(review.rating)}</h3>
                <p>{review.description}</p>
              </div>
            ))}
          </div>
          
          <div className="inputgroup">
            <form onSubmit={handleReviewSubmit} id="revform">
              <label htmlFor="reviewerName">Your Name:</label>
              <input 
                type="text" 
                id="reviewerName" 
                value={newReview.reviewerName}
                onChange={(e) => setNewReview({...newReview, reviewerName: e.target.value})}
                required 
              /><br /><br />

              <div className="rating">
                <label htmlFor="rating">Rating:</label>
              </div>
              <div className="stars" id="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star}
                    className={`star ${newReview.rating >= star ? 'active' : ''}`}
                    onClick={() => handleStarClick(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>

              <label htmlFor="description">Description:</label><br />
              <textarea 
                id="description" 
                rows="4" 
                cols="50" 
                value={newReview.description}
                onChange={(e) => setNewReview({...newReview, description: e.target.value})}
                required
              ></textarea><br /><br />

              <input type="submit" value="Submit Review" id="submit-button" />
            </form>
          </div>
        </div>
      </section>

      <section id="contact">
        <div style={{padding: '40px', textAlign: 'center'}}>
          <h2>Contact Us</h2>
          <p>Get in touch for professional plumbing services</p>
          <Link to="/contact" className="btn btn-primary" style={{padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px'}}>Get In Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;