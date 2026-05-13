import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './about.css';
import * as Icon from "react-bootstrap-icons";
import { Container } from 'react-bootstrap';

function About() {
  return (
    <>
    <Container id="about">
      <div className="home-icon">
        <Link href="/">
          <div className="icon-wrapper">
            <Icon.House size={50} color="white" />
            <span>Home</span>
          </div>
        </Link>
      </div>
      <div className="about-card about-card1">
        <div className="image-wrapper">
          <Image
            src="/assets/undraw_programming_re_kg9v.jpg"
            alt="Profile Image"
            className="profile-image"
            height={400}
            width={400}
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi ako d i si Labe, Fitz Gerard ako d i kay ga eskwela sa Phinma COC karon ako na ingganyo pag IT
            tungod sa akung papa kay ana siya demand daw dayun dakog sweldo niya karon na unsa na mani pero 
            sukad sa akung pag ka second year ge ganhan naman pud ko maong kron kamolo pa gyapon ko sa pag eskwela
            aron daghan pako ma balan sa programming.
          </p>
        </div>
      </div>

      <div className="about-card about-card2">
        <div className="about-text">
          <h2>Flutter Development</h2>
          <p>
            I&apos;ve learned Flutter for mobile development and enjoy creating applications with it.
          </p>
        </div>
        <div className="image-wrapper">
          <Image
            src="/assets/undraw_flutter_dev_wvqj.jpg"
            alt="Flutter Image"
            className="profile-image"
            height={400}
            width={400}
          />
        </div>
      </div>

      <div className="about-card">
        <div className="about-text">
          <h2>Static Websites</h2>
          <p>
            Experienced in building static websites using modern web development techniques.
          </p>
        </div>
        <div className="image-wrapper">
          <Image
            src="/assets/undraw_static_website_re_x70h.jpg"
            alt="Static Website Image"
            className="profile-image"
            height={400}
            width={400}
          />
        </div>
      </div>
      </Container>
    </>
  );
}

export default About;
