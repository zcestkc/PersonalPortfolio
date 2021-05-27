import React from 'react';

function SkillItem({ skill, icon }) {
  return (
    <div className="skill-container">
      <h5 className="skill-title">{skill}</h5>
      <div className="skill-icon">
        <img src={icon} alt="icon-svg" />
      </div>
    </div>
  );
}

export default SkillItem;
