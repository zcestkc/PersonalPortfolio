import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5ukv5zr',
      'template_tbll19a',
      e.target,
      'user_uAn9u7BnCuqY7Yg2bpl64'
    );
    e.target.reset();
    showResult(true);
  };
  // hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="fullName" required />
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send Message" />
      <div className="row">
        {result ? (
          <p>
            Your message has been successfully sent. I will contact you soon!
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
