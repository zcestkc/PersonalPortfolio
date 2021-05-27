import React from 'react';

const ExperienceItem = ({ icon, title, company, year, description }) => {
  return (
    <div className="ExperienceItem">
      <div className="img">
        <img src={icon} alt="" />
      </div>
      <div className="content-container">
        <div className="content-top">
          <div className="content-left">
            <h5>{title}</h5>
            <p>{company}</p>
          </div>
          <p className="content-right">{year}</p>
        </div>
        <div className="content-bottom">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;
