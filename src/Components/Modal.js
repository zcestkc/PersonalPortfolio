import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ open, project, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div onClick={onClose} className="overlay"></div>
      <div className="Modal">
        <button onClick={onClose} className="modal-close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img src={project.image2} alt="project-screenshot" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="techniques">{project.category.join(' / ')}</p>
      </div>
    </div>
  );
};

export default Modal;
