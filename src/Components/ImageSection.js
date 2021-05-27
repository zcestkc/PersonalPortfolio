import React from 'react';
import about from '../img/about.png';

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Kwan Chan</span>
        </h4>
        <p className="about-text">
          I am a highly organised and motivated
          <span> full-stack developer</span> who has recently finished training
          and is looking for web development opportunities based in
          <span> London</span>. I am a <span>structural engineer</span> by
          practice. Go through my website to find out more about me!
        </p>
        <a
          href="https://kwanchan.co/CV-KwanChan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="btn-cv">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default ImageSection;
