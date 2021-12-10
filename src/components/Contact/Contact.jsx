/* eslint-disable max-len */
// cant use modules for this component
import React from 'react';
import Fade from 'react-reveal/Fade';
import emailjs, { init } from 'emailjs-com';
import { store } from 'react-notifications-component';
import { contacts } from './contacts';
import ContactItem from './ContactItem.jsx';
import './Contact.scss';

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault();
    init(process.env.GATSBY_MAIL_ID);
    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        '#contact_email'
      )
      .then(res => {
        console.log('SUCCESS!', res.status, res.text);
        store.addNotification({
          title: 'Success',
          message: 'Email Sent!',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      })
      .catch(e => {
        console.log('FAILED...', e);
        store.addNotification({
          title: 'Error',
          message: 'Email failed to send, please try again',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      });
  };

  return (
    <div
      className="contact-main uk-flex uk-flex-center uk-flex-middle uk-flex-column"
      id="contactme"
    >
      <Fade top>
        <div className="contact-container uk-flex uk-flex-wrap uk-flex-center">
          {contacts.map(contact => {
            return (
              <ContactItem
                key={contact.link}
                link={contact.link}
                icon={contact.icon}
                user={contact.user}
                description={contact.description}
              />
            );
          })}
        </div>
      </Fade>
      <Fade bottom>
        <form
          style={{ width: '80%', margin: '7rem', color: 'white' }}
          id="contact_email"
          onSubmit={e => sendEmail(e)}
        >
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Contact Me</legend>
          </fieldset>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="text"
              id="name"
              placeholder="Name"
              name="from_name"
              required
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="email"
              id="email"
              placeholder="Email Address"
              name="reply_to"
              required
            />
          </div>
          <div className="uk-margin">
            <textarea
              className="uk-textarea"
              rows="5"
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            className="uk-button uk-button-default"
            type="submit"
            style={{ background: 'white' }}
          >
            Submit
          </button>
        </form>
      </Fade>
    </div>
  );
};

export default Contact;
