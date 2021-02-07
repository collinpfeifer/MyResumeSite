/* eslint-disable max-len */
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
    icon: 'fab fa-github',
    link: 'https://github.com/collinpfeifer',
    user: 'collinpfeifer',
    description:
      'This is where I display my code for personal or work purposes',
  },
  {
    icon: 'fas fa-book',
    link: 'https://bookshelf.website/collinpfeifer',
    user: 'collinpfeifer',
    description:
      'My own bookshelf to see what I\'ve been recently reading and for reccomendations',
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
    <div
      className='uk-flex uk-flex-center uk-flex-middle uk-flex-column'
      styler={{height: '100vh'}}>
      <div className='contact-container uk-flex uk-flex-wrap uk-flex-center'>
        {renderedContact}
      </div>
      <form style={{width: '80%', margin: '7rem', color: 'white'}}>
        <fieldset className='uk-fieldset'>
          <legend className='uk-legend'>Contact Me</legend>
        </fieldset>
        <div className='uk-margin'>
          <input className='uk-input' type='text' placeholder='Name' />
        </div>
        <div className='uk-margin'>
          <input className='uk-input' type='text' placeholder='Email Address' />
        </div>
        <div className='uk-margin'>
          <textarea
            className='uk-textarea'
            rows='5'
            placeholder='Message'></textarea>
        </div>
        <button
          className='uk-button uk-button-default'
          style={{background: 'white'}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
