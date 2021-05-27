import React from 'react';
import Title from '../Components/Title';
import ContactForm from '../Components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  return (
    <div>
      <Title title={'Contact Me'} span={'Contact Me'} />
      <div className="ContactPage">
        <h4>Fill in the form to get in touch.</h4>
        <ContactForm />
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
      </div>
    </div>
  );
};

export default ContactPage;
