import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { FaFacebookSquare } from 'react-icons/fa'; 
import './home.css';

const Body = (props) => {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="/myworks" className="nav-link">My Works</a>
          <a href="/resume" className="nav-link">Resume</a>
          <a href="/contact" className="nav-link">Contacts</a>
        </nav>
        <h1 className="title">Welcome to My Portfolio</h1>
        <p className="subtitle">Crafting Digital Experiences</p> {/* Added personal touch */}
      </header>
      <main className="main-content">
        <section id="about" className="profile-section">
          <Image
            src="/assets/me.5.jpg"
            alt="Profile Image"
            className="profile-image"
            height={400}
            width={400}
          />
          <p className="description">
            Hi, I&apos;m a passionate developer who loves creating beautiful and functional web applications.
          </p>
          <div className="icons">
            <FaHtml5 className="icon html" />
            <FaCss3Alt className="icon css" />
            <FaJs className="icon js" />
            <FaReact className="icon react" />
            <FaNodeJs className="icon node" />
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Labe&apos;s Portfolio. All rights reserved.</p> {/* Copyright notice */}
        <div className="social-links">
          <a href="https://www.facebook.com/labe.fitz.5" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebookSquare size={32} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Body;
