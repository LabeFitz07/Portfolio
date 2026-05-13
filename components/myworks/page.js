import React from 'react';
import Link from 'next/link';
import { Home as HomeIcon } from 'react-feather';
import './myworks.css';

function Myworks() {
  return (
    <div>
      <div className="home-icon">
        <Link href="/">
          <div className="icon-wrapper">
            <HomeIcon size={50} color="white" />
            <span className="home-text">Home</span>
          </div>
        </Link>
      </div>

      <div className="myworks-container">
        <h2 className="section-title">My Works</h2>
        <div className="works-grid">
          <div className="work-item">
            <div className="work-images">
              <img src="/assets/Screenshot 2024-07-01 140626.png" alt="Work 1" className="work-image" />
              <img src="/assets/Screenshot 2024-07-01 140848.png" alt="Work 2" className="work-image" />
              <img src="/assets/Screenshot 2024-07-01 140902.png" alt="Work 3" className="work-image" />
              <img src="/assets/Screenshot 2024-07-01 140910.png" alt="Work 4" className="work-image" />
            </div>
            <div className="work-details">
              <h3 className="work-title">Reviewer System</h3>
              <p className="work-description">This project is a capstone project for the student side. It is a reviewer system. The images show the designs created for the project.</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-images">
              <img src="/assets/Screenshot 2024-07-01 142400.png" alt="Work 5" className="work-image" />
              <img src="/assets/Screenshot 2024-07-01 141612.png" alt="Work 6" className="work-image" />
            </div>
            <div className="work-details">
              <h3 className="work-title">Music Streaming App</h3>
              <p className="work-description">This is a music streaming app built using Flutter.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myworks;
