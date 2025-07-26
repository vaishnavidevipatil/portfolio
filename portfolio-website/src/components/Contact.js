// File: src/Contact.js
import React, { useState } from "react";
import axios from 'axios'
// import React from "react";
import "../styles/Contact.css";

// import "../styles/Contact.css" // Assuming you have corresponding styles
import { GitHub, LinkedIn, Instagram, Email, Phone, LocationOn, Send } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/contact', formData);
      alert(res.data.message);
      // Optionally clear form
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message.');
    }
  };


  // ✅ Function to open LinkedIn in a new tab
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/vaishnavi-devi-patil-711176222/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact">
      <h1 className="section-header">Get in touch</h1>
      <div className="contact-wrapper">

        {/* Left contact page */}
        <form id="contact-form" className="form-horizontal" role="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" placeholder="NAME" name="name" 
              value={formData.name}
              onChange={handleChange}
              required />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" 
                value={formData.email}
                onChange={handleChange}
              required />
            </div>
          </div>
          <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" 
          value={formData.message}
          onChange={handleChange}
          required></textarea>

          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            startIcon={<Send />}
            fullWidth
            sx={{ mt: 1 }}
          >
            Send
          </Button>
        </form>

        {/* Right contact page */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <LocationOn fontSize="large" />
              <a href="tel:1-212-555-5555">Bengaluru, Karnataka</a>
              {/* <span className="contact-text place">Bengaluru, Karnataka</span> */}
            </li>
            <li className="list-item">
              <Phone fontSize="large" />
              <span className="contact-text phone">
                <a href="tel:1-212-555-5555">(+91) 797-565-2729</a>
              </span>
            </li>
            <li className="list-item">
              <Email fontSize="large" />
              <span className="contact-text gmail">
                <a href="mailto:hitmeup@gmail.com">vaishnavidevip17@gmail.com</a>
              </span>
            </li>
          </ul>

          <hr />

          <ul className="social-media-list" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            
            {/* GitHub Icon */}
            <IconButton 
              component="a" 
              href="https://github.com/vaishnavidevipatil" 
              target="_blank" 
              rel="noopener noreferrer" 
              color="primary"
              aria-label="GitHub"
            >
              <GitHub fontSize="large" />
            </IconButton>

            {/* LinkedIn Icon */}
            <IconButton 
              onClick={openLinkedIn}
              color="primary"
              aria-label="LinkedIn"
            >
              <LinkedIn fontSize="large" />
            </IconButton>

            {/* Instagram Icon */}
            <IconButton 
              component="a" 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              color="secondary"
              aria-label="Instagram"
            >
              <Instagram fontSize="large" />
            </IconButton>

            {/* Email Icon */}
            <IconButton 
              component="a" 
              href="mailto:vaishnavidevip17@gmail.com" 
              color="error"
              aria-label="Email"
            >
              <Email fontSize="large" />
            </IconButton>

          </ul>

          <hr />
          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
