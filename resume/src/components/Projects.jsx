import React from 'react';
import '../css/Projects.scss';

const Projects = ({projects}) => {
  const renderedProjects = projects.map((project) => {
    return (
      <div key={project.title} className='card-container'>
        <div className='card'>
          <a href={project.link}>
            <div className='card--display'>
              <i className={project.icon}></i>
              <h2>{project.title}</h2>
            </div>
            <div className='card--hover'>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p className='link'>Click to see project</p>
            </div>
          </a>
          <div className='card--border'></div>
        </div>
      </div>
    );
  });

  return (
    <div
      className='projectmain uk-grid
        uk-grid-small'
      data-uk-grid>
      {renderedProjects}
    </div>
  );
};

export default Projects;
