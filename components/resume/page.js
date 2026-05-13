import React from 'react';
import Link from 'next/link';
import { Home } from 'react-feather';
import './resume.css'; 

function Resume() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <div className="home-icon">
          <Link href="/" passHref>
            <div className="icon-wrapper">
              <Home size={50} color="#4CAF50" />
              <span className="home-text">Home</span>
            </div>
          </Link>
        </div>
        <img src="/assets/hello.jpg" alt="Profile" className="profile-image" />
        <h1>Labe Resume</h1>
        <p>Front-End Developer</p>
      </header>

      <div className="resume-cards">
        <div className="resume-card">
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> Labe, Fitz Gerard D.</p>
          <p><strong>Email:</strong> fitzlabe83@gmail.com</p>
          <p><strong>Phone:</strong> 09538350966</p>
        </div>

        <div className="resume-card">
          <h2>Education</h2>
          <p><strong>BS in Information Technology</strong></p>
          <p>Phinma Cagayan De Oro</p>
        </div>

        <div className="resume-card">
          <h2>Work Experience</h2>
          <p><strong>Front-End Developer</strong></p>
          <ul>
            <li>Developed responsive web applications using HTML, CSS.</li>
            <li>Collaborated with designers to create user-friendly interfaces.</li>
            <li>Implemented new features and maintained existing codebase.</li>
          </ul>
        </div>

        <div className="resume-card">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
