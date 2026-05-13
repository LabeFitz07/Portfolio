import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaEnvelope, FaPhoneAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="container">
        <div className="row">
          <div className="home-icon">
            <Link href="/">
              <div className="icon-wrapper">
                <FiHome size={32} color="white" />
                <span>Home</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <h1>Contact Me</h1>
      <div className="contactCard">
        <div className="imageSection">
          <img src="/assets/me.jpg" alt="Image" className="contactImage" />
        </div>
        <div className="contactInfo">
         
            <div className="card-body">
              <FaFacebookSquare className="icon facebook-icon" />
              <span className="contactLink">
                <a href="https://www.facebook.com/labe.fitz.5">https://www.facebook.com/labe.fitz.5?mibextid=ZbWKwL</a>
              </span>
            </div>
            <div className="card-body">
              <FaPhoneAlt className="icon phone-icon" />
              <p className="contactText">Phone Number</p>
              <p className="description">09538350966</p>
            </div>
            <div className="card-body">
              <FaEnvelope className="icon envelope-icon" />
              <p className="contactText">Email Address</p>
              <p className="description">fitzlabe83@gmail.com</p>
            </div>
        </div>
        <div className="googleMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126315.27352647872!2d124.53551912129507!3d8.36696249312597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff8ec5d73be081%3A0xc671d63148795ce9!2sCabaluna%20Store!5e0!3m2!1sen!2sph!4v1719840111378!5m2!1sen!2sph"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contactForm">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Social Media Icons */}
      <div className="socialMedia">
        <h2>Follow Me</h2>
        <div className="icons">
          <a href="https://www.facebook.com/labe.fitz.5" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebookSquare size={32} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter size={32} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
