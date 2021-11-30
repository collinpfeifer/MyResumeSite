import React from 'react';
import './Experience.scss';
import Fade from 'react-reveal/Fade';
// cant use modules for this component

const Experience = () => {
  return (
    <>
      <div
        className="container
      uk-flex
      uk-flex-center
      uk-flex-column
      uk-flex-middle"
        id="experience"
      >
        <div className="main-timeline">
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">3 Months</span>
                  <span className="year">2020</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <Fade top>
                <h5 className="title">Web Development Intern</h5>
                <p className="description">
                  Furthered my HTML5, CSS3, and JavaScript skills, specifically
                  with Node.js and ReactJS frameworks through a development
                  project. Met with leaders of the web development and gained
                  industry knowledge, attended web-development workshops with
                  fellow interns regarding new industry technologies.
                </p>
              </Fade>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">1 Year</span>
                  <span className="year">2019</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <Fade bottom>
                <h5 className="title">Code Sensei Tutor</h5>
                <p className="description">
                  Tutored students in the fields of computer science between the
                  ages of 8-14, gained valuable leadership skills, learning
                  skills, and computer science skills, specifically JavaScript
                  and C#, to further a possible career.
                </p>
              </Fade>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">6 months</span>
                  <span className="year">2020</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <Fade bottom>
                <h5 className="title">Web Development Intern</h5>
                <p className="description">
                  Led an intern web developer team in the development process
                  for a security focused website built on a MERN (MongoDB,
                  ExpressJS, React, and Node.js) stack to better appeal to
                  customers around the world, and was able to grow leadership
                  and team working abilities along with my developer knowledge.
                </p>
              </Fade>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">6 months</span>
                  <span className="year">2020</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <Fade bottom>
                <h5 className="title">Software Engineer Intern</h5>
                <p className="description">
                  Deployed and maintained Azure web services for multiple
                  clients including web-apps, cloud-storage, and DNS zones,
                  worked on the backend of a site with over a million hits per
                  year, improved security features throughout multiple Vue and
                  Express web-apps and APIs.
                </p>
              </Fade>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">6 months</span>
                  <span className="year">2020</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <Fade bottom>
                <h5 className="title">Web Development Intern</h5>
                <p className="description">
                  Led an intern web developer team in the development process
                  for a security focused website built on a MERN (MongoDB,
                  ExpressJS, React, and Node.js) stack to better appeal to
                  customers around the world, and was able to grow leadership
                  and team working abilities along with my developer knowledge.
                </p>
              </Fade>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">6 months</span>
                  <span className="year">2020</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <Fade bottom>
                <h5 className="title">Web Development Intern</h5>
                <p className="description">
                  Led an intern web developer team in the development process
                  for a security focused website built on a MERN (MongoDB,
                  ExpressJS, React, and Node.js) stack to better appeal to
                  customers around the world, and was able to grow leadership
                  and team working abilities along with my developer knowledge.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
