import React from 'react';
import '../css/Contact.scss';

const contacts = [
  {
    icon: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/collin-pfeifer-5b77831a7/',
    user: 'Collin Pfeifer',
    description: 'This is where I network and build my professional protfolio',
  },
  {
    icon: 'fas fa-envelope',
    link: 'https://www.linkedin.com/in/collin-pfeifer-5b77831a7/',
    user: 'collinpfeifer@icloud.com',
    description: 'This is where I network and build my professional protfolio',
  },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/collinpfeifer',
    user: 'collinpfeifer',
    description: 'This is where I network and build my professional protfolio',
  },
];

const Contact = () => {
  const renderedContact = contacts.map((contact) => {
    return (
      <div className='contact-card'>
        <div className='icon'>
          <i className={`contact-icon ${contact.icon}`}></i>
        </div>
        <div className='contact-content'>
          <h3>
            <a href={contact.link}>{contact.user}</a>
          </h3>
          <p>{contact.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className='contact-container uk-flex uk-flex-center'>
      {renderedContact}
    </div>
  );
};

export default Contact;
