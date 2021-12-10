import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Card from './Card/Card';
import Fade from 'react-reveal/Fade';
import { projects } from './projects';
import './Projects.css';

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState('100%');
  const focusIndex = useRef(0);
  const fadedIndex = useRef(1);

  useEffect(() => {
    if (fadedIndex.current === projects.length - 1) {
      focusIndex.current = projects.length - 1;
      fadedIndex.current = 0;
    } else {
      focusIndex.current = fadedIndex.current;
      fadedIndex.current++;
    }
  }, [index]);

  return (
    <div id="projects">
      <Fade>
        <h2 className="drag">drag right or left to view my projects</h2>
        <div className="projects-main uk-flex uk-flex-center uk-flex-middle">
          <AnimatePresence initial={false}>
            <Card
              key={index + 1}
              pIndex={fadedIndex.current}
              initial={{
                scale: 0,
                y: 105,
                opacity: 0,
              }}
              animate={{
                scale: 0.75,
                y: -90,
                opacity: 0.5,
              }}
              transition={{
                scale: { duration: 0.2 },
                opacity: { duration: 0.4 },
              }}
            />
            <Card
              key={index}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                opacity: {
                  duration: 0.2,
                },
              }}
              exitX={exitX}
              pIndex={focusIndex.current}
              setExitX={setExitX}
              index={index}
              setIndex={setIndex}
              drag="x"
            />
          </AnimatePresence>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
