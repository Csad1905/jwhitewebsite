import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.data.success) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <h2 id="conttext">Enquire about plumbing services below:</h2>
      <form onSubmit={handleSubmit} id="contform">
        <div className="inputgroup">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          /><br /><br />
      
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          /><br /><br />
        </div>
      
        <label htmlFor="message">Message:</label><br />
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          cols="50" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea><br /><br />
      
        <input 
          type="submit" 
          value={isSubmitting ? 'Sending...' : 'Submit'} 
          disabled={isSubmitting}
        />
      </form>
      
      {submitMessage && (
        <div className={`submit-message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
          {submitMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;