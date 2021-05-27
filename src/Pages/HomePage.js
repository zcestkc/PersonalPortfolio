import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Kwan Chan.</span>
        </h1>
        <p className="h-sub-text">
          I am a <span>full-stack developer</span>. Have a look at my profile!
        </p>
        <div className="icons">
          <a
            className="icon-holder"
            target="_blank"
            href="https://www.linkedin.com/in/kwan-chan-170412170/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon lki" />
          </a>
          <a
            className="icon-holder"
            target="_blank"
            href="https://www.github.com/zcestkc"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
