import React, { useState } from 'react';
import Modal from './Modal';

function MenuItems({ menuItems }) {
  const [project, setProject] = useState();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="portfolios">
      {menuItems.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image1} alt="" />
              <ul className="hover-items">
                <li>
                  <a
                    href={item.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.icon1} alt="" />
                  </a>
                  <a
                    href={item.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.icon2} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <h5
              onClick={() => {
                setIsOpen(!isOpen);
                setProject(item);
              }}
            >
              {item.title}
            </h5>
            {project && project.id === item.id ? (
              <Modal
                open={isOpen}
                project={project}
                onClose={() => setIsOpen(false)}
              />
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
