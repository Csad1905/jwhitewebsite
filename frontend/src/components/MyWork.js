import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MyWork = () => {
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

  const workExamples = [
    {
      title: "Boiler Installation",
      image: "/example1.jpg",
      description: "Complete boiler replacement and installation in Ipswich"
    },
    {
      title: "Bathroom Renovation",
      image: "/example2.jpg",
      description: "Full bathroom suite installation in Kesgrave"
    },
    {
      title: "Central Heating System",
      image: "/example3.jpg",
      description: "New central heating system installation in Woodbridge"
    },
    {
      title: "Emergency Repair",
      image: "/example4.jpg",
      description: "Emergency burst pipe repair in Hadleigh"
    }
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
    <section id="mywork">
      <h2>My Work & Coverage Areas</h2>
      
      <div className="work-examples">
        <h3>Recent Projects</h3>
        <div className="work-gallery">
          {workExamples.map((work, index) => (
            <div key={index} className="work-item">
              <img src={work.image} alt={work.title} />
              <div className="work-info">
                <h4>{work.title}</h4>
                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="coverage-area">
        <h3>Areas I Cover</h3>
        <div id="map" style={{ height: '400px', width: '100%', margin: '20px 0' }}>
          <MapContainer 
            center={[52.056736, 1.148220]} 
            zoom={10} 
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
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
        
        <div className="location-list">
          <h4>Service Areas Include:</h4>
          <ul>
            {locations.map((location, index) => (
              <li key={index}>{location.name}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        <div id="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <h4>{review.reviewerName} - {getStars(review.rating)}</h4>
              <p>{review.description}</p>
              <small>Posted on {new Date(review.created_at).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
        
        <div className="review-form">
          <h4>Leave a Review</h4>
          <form onSubmit={handleReviewSubmit} id="revform">
            <div className="inputgroup">
              <label htmlFor="reviewerName">Your Name:</label>
              <input 
                type="text" 
                id="reviewerName" 
                value={newReview.reviewerName}
                onChange={(e) => setNewReview({...newReview, reviewerName: e.target.value})}
                required 
              />
            </div>

            <div className="rating">
              <label htmlFor="rating">Rating:</label>
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
            </div>

            <div className="inputgroup">
              <label htmlFor="description">Description:</label>
              <textarea 
                id="description" 
                rows="4" 
                value={newReview.description}
                onChange={(e) => setNewReview({...newReview, description: e.target.value})}
                required
              ></textarea>
            </div>

            <input type="submit" value="Submit Review" id="submit-button" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyWork;