import React from 'react'
import { Icon } from '@iconify/react';

const ContactItem = ({link, icon, user, description}) => {
    return (
      <div className="contact-card" key={link}>
        <div className="icon">
          <Icon className="contact-icon" icon={icon} />
        </div>
        <div className="contact-content">
          <h3>
            <a href={link} target="__blank" download="">
              {user}
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    );
}

export default ContactItem
